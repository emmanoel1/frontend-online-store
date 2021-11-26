// {/* Requisito 4 */}
import React from 'react';
// import { getCategories } from '../services/api';
// import { Link } from 'react-router-dom';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      searchProductsFromCategory: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    getCategories().then((product) => {
      this.setState({
        categories: product,
      });
    });
  }

  handleChange(event) {
    // console.log('event_target: ', event.target);
    const { id, value } = event.target;
    // console.log(id);
    console.log(value);
    getProductsFromCategoryAndQuery(id, '').then((query) => {
      this.setState({ searchProductsFromCategory: query.results });
    });
  }

  render() {
    const { categories, searchProductsFromCategory } = this.state;
    console.log(searchProductsFromCategory);
    return (
      <>
        <div className="content_categories">
          {categories.map((category) => (
            <label key={ category.id } htmlFor={ category.id } data-testid="category">
              <input
                type="radio"
                name="category"
                value={ category.name }
                id={ category.id }
                onChange={ this.handleChange } // Requisito 6 - Função para chamar a categoria
              />
              { category.name }
            </label>
          ))}
        </div>
        <div className="products-results">
          {searchProductsFromCategory.map((product) => (
            <div key={ product.id } data-testid="product">
              <h2>{ product.title }</h2>
              <img src={ product.thumbnail } alt={ product.title } />
              <h2>{product.price}</h2>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default CategoryList;
