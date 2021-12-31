// PÁGINA DE BUSCAS
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { getProductsFromProductID } from '../services/api';

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

  handleProduct(product) {
    this.setState({
      products: product,
    });
  }

  increase({ target }) {
    const { products } = this.state;
    const product = products.find((item) => (item.id === target.id));
    if (product.quantity < product.available_quantity) {
      product.increaseIsDisabled = false;
      product.decreaseIsDisabled = false;
      console.log('rodou');
      product.quantity += 1;
      const quantityUpdated = products;
      this.setState({
        products: quantityUpdated,
      });
    }
    if (product.quantity === product.available_quantity) {
      product.increaseIsDisabled = true;
      product.decreaseIsDisabled = false;
      const quantityUpdated = products;
      this.setState({
        products: quantityUpdated,
      });
    }
  }

  decrease({ target }) {
    console.log(target);
    const { products } = this.state;
    const product = products.find((item) => (item.id === target.id));
    const quantityUpdate = products;
    if (product.quantity > 0) {
      product.decreaseIsDisabled = false;
      product.increaseIsDisabled = false;
      product.quantity -= 1;
      this.setState({
        products: quantityUpdate,
      });
    }
    if (product.quantity === 0) {
      product.decreaseIsDisabled = true;
      product.increaseIsDisabled = false;
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
                disabled={ product.decreaseIsDisabled }
                type="button"
                data-testid="product-decrease-quantity"
                id={ product.id }
                onClick={ this.decrease }
              >
                -
              </button>
              <p data-testid="shopping-cart-product-quantity">{product.quantity}</p>
              <button
                disabled={ product.increaseIsDisabled }
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
