import React from 'react';
// import { Redirect } from 'react-router-dom';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <p
        className="shopping_cart_button"
        data-testid="shopping-cart-button"
      >
        Carrinho
      </p>
    );
  }
}

export default ShoppingCart;
