// PÁGINA DE BUSCAS
import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromProductID } from '../services/api';

class ShoppingCartPage extends React.Component {
  constructor() {
    super();
    this.state = {
      apiResponse: [],
    };
    this.addedItems = this.addedItems.bind(this);
  }

  addedItems() {
    getProductsFromProductID('MLB1920967987').then((query) => {
      this.setState({
        apiResponse: query,
      });
    });
  }

  render() {
    const { location } = this.props;
    const productId = location.state.id;
    const { apiResponse } = this.state;
    console.log(apiResponse);
    // this.addedItems(productId);
    // conteúdo que Ajudou a passagem de props por link : https://www.youtube.com/watch?v=nmbX2QL7ZJc
    return (
      <>
        <h1>Esse aqui é a página do carrinho</h1>
        <div className="conteiner">
          {
            productId === '' ? (
              <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
            ) : (
              apiResponse.map((product) => (
                <div key={ product.id }>
                  <img src={ product.thumbnail } alt={ product.title } />
                  <p>{ product.id }</p>
                </div>
              ))
            )
          }
        </div>
      </>
    );
  }
}
ShoppingCartPage.propTypes = {
  location: PropTypes.objectOf(Object).isRequired,
};

export default ShoppingCartPage;
// <p>{location.state.id}</p>
// <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
// {/* O texto acima é parte do requisito 03 e não pode ser apagado  */}
// <p>{location.state.id}</p>
