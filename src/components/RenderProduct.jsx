// {/* Componente do Gmaque que renderiza os produtos */}
import React from 'react';
import PropTypes from 'prop-types';

class ShowProduct extends React.Component {
  render() {
    const { title, image, price } = this.props;
    return (
      <div data-testid="product">
        <h2>{title}</h2>
        <img src={ image } alt={ title } />
        <h2>{price}</h2>
      </div>
    );
  }
}

ProductList.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ShowProduct;
