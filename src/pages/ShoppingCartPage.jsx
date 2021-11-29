// PÁGINA DE BUSCAS
import React from 'react';

class ShoppingCartPage extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <>
        <h1>Esse aqui é a página do carrinho</h1>
        <div className="conteiner">
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
          {/* O texto acima é parte do requisito 03 e não pode ser apagado  */}
        </div>
      </>
    );
  }
}

export default ShoppingCartPage;
