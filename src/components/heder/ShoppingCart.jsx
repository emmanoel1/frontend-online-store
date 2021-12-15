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
      <div className="cart_button">
        <Link
          to="/ShoppingCartPage"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
      </div>
    );
  }
}
// Start Req8
export default ShoppingCart;
