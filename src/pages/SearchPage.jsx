// TELA PRINCIPAL
import React from 'react';
import ShoppingCart from '../components/ShoppingCart';
import CategoryList from '../components/CategoryList';
import Button from '../components/Button';

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
          <div>
            <input type="text" data-testid="query-input" />
          </div>
          <ShoppingCart />
          <Button data-testid="query-button">Adicionar</Button>
          {/* <InputAndButton /> */}
        </div>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <CategoryList />
      </div>
    );
  }
}

export default SearchPage;
