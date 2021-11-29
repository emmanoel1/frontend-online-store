import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';
import AddToCart from './AddToCart';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
      typed: '',
      searchProductsFromTypedText: [],
    };

    this.inputChange = this.inputChange.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }

  inputChange({ target }) {
    this.setState({
      typed: target.value,
    });
  }

  btnClick(event) {
    const { value } = event.target;

    getProductsFromCategoryAndQuery('', value).then((query) => {
      this.setState({ searchProductsFromTypedText: query.results });
    });
  }

  render() {
    const { typed, searchProductsFromTypedText } = this.state;
    console.log(searchProductsFromTypedText);
    return (
      <div className="search_bar">
        <input
          className="input_search"
          type="text"
          data-testid="query-input"
          value={ typed }
          onChange={ this.inputChange }
        />
        <button
          data-testid="query-button"
          value={ typed }
          type="submit"
          onClick={ this.btnClick }
        >
          Pesquisar
        </button>
        <span
          className="products-results"
        >
          {searchProductsFromTypedText.map((product) => (
            <div key={ product.id } data-testid="product">
              <p>
                {product.title}
              </p>
              <img src={ product.thumbnail } alt={ product.title } />
              <p>
                {product.price}
              </p>
              <AddToCart
                productId={ product.id }
                productName={ product.title }
              />
            </div>
          ))}
        </span>
      </div>
    );
  }
}

export default SearchBar;
