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
      <p>
        <Link
          to="/ShoppingCartPage"
          data-testid="shopping-cart-button"
        >
          Carrinho de Compras
        </Link>
      </p>
    );
  }
}

export default ShoppingCart;
