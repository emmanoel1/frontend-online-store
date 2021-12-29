// PÁGINA DE BUSCAS
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromProductID } from '../services/api';

class ShoppingCartPage extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.handleProduct = this.handleProduct.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    this.handleProduct(location.state.product);
  }

  shouldComponentUpdate() {
    return true;
  }

  async handleProduct(product) {
    const { products } = this.state;
    // ["MLB923744806", "MLB918281211"]
    const arrOfProducts = [];
    product.forEach(async (element) => {
      // console.log('find:', arrOfProducts.find((item) => (item.id === element)));
      await getProductsFromProductID(element).then((query) => {
        console.log('query:', query.id);
        query.quantity = 1;
        arrOfProducts.push(query);
        this.setState({
          products: [...products, ...arrOfProducts],
        });
      });
    });
  }

  increase({ target }) {
    const { products } = this.state;
    products.find((item) => (item.id === target.id)).quantity += 1;
    const quantityUpdate = products;
    this.setState({
      products: quantityUpdate,
    });
  }

  decrease({ target }) {
    console.log(target.id);
    const { products } = this.state;
    const actualQuant = products.find((item) => (item.id === target.id)).quantity;
    if (actualQuant > 0) {
      products.find((item) => (item.id === target.id)).quantity -= 1;
      const quantityUpdate = products;
      this.setState({
        products: quantityUpdate,
      });
    }
  }

  removeItem({ target }) {
    const { id } = target;

    const items = JSON.parse(localStorage.getItem('cart'));
    const index = items.indexOf(id);
    items.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(items));

    const { products } = this.state;
    const a = products;
    const clicked = a.find((item) => (item.id === id));
    const indexState = a.indexOf(clicked);
    a.splice(indexState, 1);
    this.setState({
      products: a,
    });
    // ["MLB923744806", "MLB918281211"]
  }

  render() {
    // conteúdo que Ajudou a passagem de props por link : https://www.youtube.com/watch?v=nmbX2QL7ZJc
    const { products } = this.state;

    const empty = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    const itemCount = (
      <p>
        {`Total de itens no carrinho: ${products.length}`}
      </p>);
    return (
      <>
        <h1>Esse aqui é a página do carrinho</h1>
        <div className="products-results">
          {(products.length === 0 ? empty : (products.map((product) => (
            <div key={ product.id } className="product">
              <button
                type="button"
                id={ product.id }
                onClick={ this.removeItem }
              >
                x
              </button>
              <p data-testid="shopping-cart-product-name">{ product.title }</p>
              <figure className="product_list">
                <img src={ product.thumbnail } alt={ product.title } />
              </figure>
              <button
                type="button"
                data-testid="product-decrease-quantity"
                id={ product.id }
                onClick={ this.decrease }
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
              <button
                type="button"
                data-testid="product-increase-quantity"
                id={ product.id }
                onClick={ this.increase }
              >
                +
              </button>
              <span>R$</span>
              {product.price}
            </div>
          ))))}
        </div>
        <div>
          {itemCount}
        </div>
        <div>
          <Link to="/CheckoutPage">
            <button
              type="button"
              data-testid="checkout-products"
            >
              Finalizar Compra
            </button>
          </Link>
        </div>
      </>
    );
  }
}

ShoppingCartPage.propTypes = {
  location: PropTypes.objectOf(Object).isRequired,
};

export default ShoppingCartPage;
