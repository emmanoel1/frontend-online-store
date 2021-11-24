// PÁGINA DE BUSCAS
import React from 'react';
import PropTypes from 'prop-types';
import { getProductsFromCategoryAndQuery } from '../services/api';
import CategoryList from '../components/CategoryList';

class CategoryPage extends React.Component {
  constructor() {
    super();
    this.state = {
      listProductsCategory: [],
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    console.log(id);
    getProductsFromCategoryAndQuery(id)
    // https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}_ID&q=${query} ex: MLB1384
      .then((response) => this.setState({
        listProductsCategory: [response.results],
      }));
  }

  render() {
    const { listProductsCategory } = this.state;
    console.log(listProductsCategory);
    return (
      <>
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
        <h3>Página de lista de categorias</h3>
        <CategoryList />
      </>
    );
  }
}

CategoryPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default CategoryPage;
