import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class Details extends React.Component {
  render() {
    const { location } = this.props;
    const products = [location.state.products];

    return (
      <div>
        <Link
          to={ {
            pathname: '/ShoppingCartPage',
            state: { product: location.state.cartProducts },
          } }
        >
          <div className="cart_button">
            Carrinho de Compras
          </div>
        </Link>
        {products.map((product) => (
          <div key={ product.id } className="product">
            <figure className="product_list">
              <img src={ product.thumbnail } alt={ product.title } />
            </figure>
            <h2 data-testid="product-detail-name">{product.title}</h2>
            <p className="price">
              <span>R$</span>
              {product.price}
            </p>
          </div>
        ))}
      </div>
    );
  }
}

Details.propTypes = {
  location: PropTypes.objectOf(Object).isRequired,
};

export default Details;
