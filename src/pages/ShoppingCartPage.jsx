// PÁGINA DE BUSCAS
import React from 'react';
// import PropTypes from 'prop-types';
import { getProductsFromProductID } from '../services/api';

class ShoppingCartPage extends React.Component {
  constructor(Props) {
    super(Props);
    const { location } = Props;
    this.state = {
      handle: location.state.product,
      products: [],
    };
    this.handleProduct = this.handleProduct.bind(this);
    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
    this.quantity = this.quantity.bind(this);
    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    this.handleProduct();
  }

  handleProduct() {
    const { products, handle } = this.state;
    console.log(handle);
    const productId = handle;
    const test = [];
    productId.forEach(async (element, index) => {
      console.log(element);
      const productsObj = await getProductsFromProductID(productId[index]);
      console.log(productsObj);
      test.push();
      this.setState({
        products: [...products, ...test],
      });
    });
  }

  increase({ target }) {
    // console.log(target.quantity);
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
    const items = JSON.parse(localStorage.getItem('cart'));
    const index = items.indexOf(target.id);
    items.splice(index, 1);
    console.log(items);
    localStorage.setItem('cart', JSON.stringify(items));
  }

  quantity(id) {
    console.log(id);
    // console.log(test.find((item) => (item.id === id)));
    return 1;
  }

  render() {
    // conteúdo que Ajudou a passagem de props por link : https://www.youtube.com/watch?v=nmbX2QL7ZJc
    const { products } = this.state;
    // const products = setTimeout(() => {
    //   return products;
    // }, 1000);
    // console.log(products);
    // this.handleProduct();
    const empty = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    const itemCount = (
      <p data-testid="shopping-cart-product-quantity">
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
      </>
    );
  }
}

// ShoppingCartPage.propTypes = {
//   location: PropTypes.objectOf(Object).isRequired,
// };

export default ShoppingCartPage;
