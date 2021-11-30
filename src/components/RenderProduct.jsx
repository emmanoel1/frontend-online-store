// {/* Componente do Gmaque que renderiza os produtos */}
import React from 'react';
import PropTypes from 'prop-types';

class ShowProduct extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    // const { title, image, price } = this.props;
    const { products } = this.props;
    return (
      <div>
        { products.map((product) => (
          <div key={ product.id } data-testid="product">
            <h2>{product.title}</h2>
            <img src={ product.thumbnail } alt={ product.title } />
            <h2>{product.price}</h2>
          </div>
        ))}
      </div>
    );
  }
}

ShowProduct.propTypes = {
  // title: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(Object).isRequired,
};

export default ShowProduct;
