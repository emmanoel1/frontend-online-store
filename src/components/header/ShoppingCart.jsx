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
    // this.test = this.test.bind(this);
  }
  // componentDidMount() {
  //   const { addedProducts } = this.props;
  //   this.test(addedProducts);
  // }

  // test() {
  // }

  render() {
    const { addedProducts } = this.props;

    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/ShoppingCartPage',
            state: { product: addedProducts },
          } }
        >
          <div className="cart_button">
            Carrinho de Compras
          </div>
        </Link>
      </div>
    );
  }
}

ShoppingCart.propTypes = {
  addedProducts: PropTypes.arrayOf(Object).isRequired,
};

export default ShoppingCart;
