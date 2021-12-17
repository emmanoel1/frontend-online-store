// PÁGINA DE BUSCAS
import React from 'react';
import PropTypes from 'prop-types';

class ShoppingCartPage extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { location } = this.props;
    const test = [location.state.product];
    console.log(test);
    // conteúdo que Ajudou a passagem de props por link : https://www.youtube.com/watch?v=nmbX2QL7ZJc
    return (
      <>
        <h1>Esse aqui é a página do carrinho</h1>
        <div className="conteiner">
          {test.map((product) => (
            <div key={ product.id }>
              <img src={ product.thumbnail } alt={ product.title } />
              <p data-test-id="shopping-cart-product-name">{ product.title }</p>
            </div>
          ))}
          <span data-test-id="shopping-cart-product-quantity">
            {test.length}
          </span>
        </div>
        {/* {test === '' ? (
            <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          ) : (
            test.map((product) => (
              <div key={ product.id }>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{ product.id }</p>
              </div>
            ))
          )} */}
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
