// esse é o botão do carrinho de compras

import React from 'react';
import { Link } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <Link
        to="/ShoppingCartPage"
        data-testid="shopping-cart-button"
      >
        <div className="cart_button">
          Carrinho de Compras
        </div>
      </Link>
    );
  }
}
// Start Req8
export default ShoppingCart;
