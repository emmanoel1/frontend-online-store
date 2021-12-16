// esse é o botão do carrinho de compras

import React from 'react';
import { Link } from 'react-router-dom';
import './shoppingCart.css';
import PropTypes from 'prop-types';

class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      count: [],
      counted: 0,
    };
  }

  itemsCount() {
    const { addedProducts } = this.props;
    this.setState({
      count: addedProducts,
    });
    const { count } = this.state;
    console.log(count);
  }

  itemsCounted() {
    const { count } = this.state;
    this.setState({
      counted: count.length,
    });
  }

  render() {
    const { counted } = this.state;
    return (
      <div>
        <Link
          to="/ShoppingCartPage"
          data-testid="shopping-cart-button"
        >
          <div className="cart_button">
            Carrinho de Compras
          </div>
        </Link>
        <span>{counted}</span>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  addedProducts: PropTypes.string.isRequired,
};

// Start Req8
export default ShoppingCart;
