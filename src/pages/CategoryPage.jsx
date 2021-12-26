import React, { Component } from 'react';
import RenderProduct from '../components/render_product/RenderProduct';

class CategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      products: [],
    };
  }

  render() {
    const { search, products } = this.state;
    return (
      <>

        <input
          data-testid="query-input"
          type="text"
          value={ search }
          placeholder="Pesquisar Produtos"
          onChange={ this.handleInputSearch }
        />
        <button
          data-testid="query-button"
          type="submit"
          onClick={ this.handleSearch }
        >
          Pesquisar

        </button>
        <div className="query-result">
          { search ? 'Nenhum produto foi encontrado' : products.map((product) => (
            <RenderProduct
              key={ product.id }
              title={ product.title }
              image={ product.thumbnail }
              price={ product.price }
            />
          ))}
          ;
        </div>
      </>
    );
  }
}

export default CategoryPage;
