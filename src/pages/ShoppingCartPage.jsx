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
    const { product } = this.props;
    console.log(product);
    return (
      <>
        <h1>Esse aqui é a página do carrinho</h1>
        <div className="conteiner">
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          {/* O texto acima é parte do requisito 03 e não pode ser apagado  */}
          <p>{product}</p>
        </div>
      </>
    );
  }
}

ShoppingCartPage.propTypes = {
  product: PropTypes.string.isRequired,
};

export default ShoppingCartPage;
