// {/* Componente do Gmaque que renderiza os produtos */}
import React from 'react';
import PropTypes from 'prop-types';
import './render_product.css';
import { Link } from 'react-router-dom';

class ShowProduct extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { products, addBtnFn, addedProducts } = this.props;
    return (
      <div className="products-results">
        { products.map((product) => (
          <div key={ product.id } data-testid="product" className="product">
            <Link
              data-testid="product-detail-link"
              to={ {
                pathname: '/Details',
                state: { products: product, cartProducts: addedProducts },
              } }
            >
              <figure className="product_list">
                <img src={ product.thumbnail } alt={ product.title } />
              </figure>
              <h2>{product.title}</h2>
              <p className="price">
                <span>R$</span>
                {product.price}
              </p>
            </Link>
            <button
              className="button is-primary is-small"
              data-testid="product-add-to-cart"
              type="submit"
              value={ product.id }
              onClick={ addBtnFn }
            >
              Adicionar Ao Carrinho
            </button>
          </div>
        ))}
      </div>
    );
  }
}

ShowProduct.propTypes = {
  addedProducts: PropTypes.arrayOf(Object).isRequired,
  products: PropTypes.arrayOf(Object).isRequired,
  addBtnFn: PropTypes.func.isRequired,
};

export default ShowProduct;
