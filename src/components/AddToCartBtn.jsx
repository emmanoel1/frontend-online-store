import React from 'react';
import PropTypes from 'prop-types';
// import ShoppingCartPage from '../pages/ShoppingCartPage';

class AddToCart extends React.Component {
  constructor() {
    super();
    this.state = {
      added: '',
    };

    this.btnAdd = this.btnAdd.bind(this);
  }

  btnAdd({ target }) {
    // console.log(target.value);
    this.setState({
      added: target.value,
    });
  }

  render() {
    const { added } = this.state;
    console.log(added);
    const { productName } = this.props;
    return (
      <div>
        <button
          data-testid="product-add-to-cart"
          type="submit"
          value={ productName }
          onClick={ this.btnAdd }
        >
          Adicionar
        </button>
        {/* <ShoppingCartPage product={ added } /> */}
      </div>
    );
  }
}

AddToCart.propTypes = {
  productName: PropTypes.string.isRequired,
};

export default AddToCart;
