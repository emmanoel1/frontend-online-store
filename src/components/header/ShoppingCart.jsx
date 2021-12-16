// esse é o botão do carrinho de compras

import React from 'react';
import { Link } from 'react-router-dom';
import './shoppingCart.css';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { addedProducts } = this.props;
    return (
      <div>
        <Link
          to={ {
            pathname: '/ShoppingCartPage',
            state: { id: addedProducts },
          } }
          data-testid="shopping-cart-button"
        >
          <div className="cart_button">
            Carrinho de Compras
          </div>
        </Link>
        {/* <span>{}</span> */}
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  addedProducts: PropTypes.string.isRequired,
};

// Start Req8
export default ShoppingCart;
