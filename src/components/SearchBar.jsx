import React from 'react';
import { getProductsFromCategoryAndQuery } from '../services/api';

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
      <div>
        <input
          type="text"
          data-testid="query-input"
          value={ typed }
          onChange={ this.inputChange }
        />
        <button
          value={ typed }
          type="button"
          onClick={ this.btnClick }
        >
          Pesquisar
        </button>
        <span className="products-results">
          {searchProductsFromTypedText.map((product) => (
            <div key={ product.id }>
              <p>
                {product.title}
              </p>
              <p>
                {product.price}
              </p>
            </div>
          ))}
        </span>
      </div>
    );
  }
}

export default SearchBar;
