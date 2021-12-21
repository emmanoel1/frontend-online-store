// PÁGINA DE BUSCAS
import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromProductID } from '../services/api';

class ShoppingCartPage extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
    this.handleProduct = this.handleProduct.bind(this);
  }

  componentDidMount() {
    const { location } = this.props;
    this.handleProduct(location.state.product);
  }

  async handleProduct(param) {
    const productsObj = await getProductsFromProductID(param);
    const { products } = this.state;
    this.setState({
      products: [...products, productsObj],
    });
  }

  render() {
    const { products } = this.state;
    // conteúdo que Ajudou a passagem de props por link : https://www.youtube.com/watch?v=nmbX2QL7ZJc
    const empty = (
      <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>);
    const itemCount = (
      <p data-testid="shopping-cart-product-quantity">
        {`Total de itens no carrinho: ${products.length}`}
      </p>);
    return (
      <>
        <h1>Esse aqui é a página do carrinho</h1>
        <div className="conteiner">
          {products.length === 0 ? empty
            : (products.map((product) => (
              <div key={ product.id }>
                <p data-testid="shopping-cart-product-name">{ product.title }</p>
                <img src={ product.thumbnail } alt={ product.title } />
                <span>R$</span>
                {product.price}
              </div>
            )))}
        </div>
        <div>
          {itemCount}
        </div>
      </>
    );
  }
}

ShoppingCartPage.propTypes = {
  location: PropTypes.objectOf(Object).isRequired,
};

export default ShoppingCartPage;
