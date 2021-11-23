// TELA PRINCIPAL
import React from 'react';
import ShoppingCart from '../components/ShoppingCart';
import CategoryList from '../components/CategoryList';

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div data-testid="home-initial-message">
        <div className="search">
          <div>aqui vai ter um input</div>
          <ShoppingCart />
        </div>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <CategoryList />
      </div>
    );
  }
}

export default SearchPage;
