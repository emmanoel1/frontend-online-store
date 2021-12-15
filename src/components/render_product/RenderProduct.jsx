// {/* Componente do Gmaque que renderiza os produtos */}
import React from 'react';
import PropTypes from 'prop-types';
import './render_product.css';

class ShowProduct extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    // const { title, image, price } = this.props;
    const { products, addBtnFn } = this.props;
    return (
      <div className="products-results">
        { products.map((product) => (
          <div key={ product.id } data-testid="product" className="product">
            <figure className="product_list">
              <img src={ product.thumbnail } alt={ product.title } />
            </figure>
            <h2>{product.title}</h2>
            <p className="price">
              <span>R$</span>
              {product.price}
            </p>
            <button
              className="button is-primary is-small"
              data-testid="product-add-to-cart"
              type="submit"
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
  // title: PropTypes.string.isRequired,
  // image: PropTypes.string.isRequired,
  // price: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(Object).isRequired,
  addBtnFn: PropTypes.func.isRequired,
};

export default ShowProduct;
