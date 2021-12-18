import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getProductsFromProductID } from '../../services/api';

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      itemOnCart: [],
    };
    this.addBtnFn = this.addBtnFn.bind(this);
  }

  async addBtnFn({ target }) {
    const productId = target.value;
    const fetchProduct = await getProductsFromProductID(productId);
    const { itemOnCart } = this.state;
    const { location } = this.props;
    this.setState({
      itemOnCart: [...itemOnCart, ...location.state.cartProducts, fetchProduct],
    });
  }

  render() {
    const { location } = this.props;
    const products = [location.state.products];
    const { itemOnCart } = this.state;

    return (
      <div>
        <Link
          data-testid="shopping-cart-button"
          to={ {
            pathname: '/ShoppingCartPage',
            state: { product: itemOnCart },
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
            <button
              className="button is-primary is-small"
              data-testid="product-detail-add-to-cart"
              type="submit"
              value={ product.id }
              onClick={ this.addBtnFn }
            >
              Adicionar Ao Carrinho
            </button>
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
