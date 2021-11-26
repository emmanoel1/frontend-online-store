// TELA PRINCIPAL
import React from 'react';
import ShoppingCart from '../components/ShoppingCart';
import CategoryList from '../components/CategoryList';
import InputAndButton from '../components/InputAndButton';

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
            <InputAndButton />
          </div>
          <ShoppingCart />
          {/* <Button data-testid="query-button">Adicionar</Button> */}
          {/* <input type="text" data-testid="query-input" />
            <button type="button"> teste </button> */}
        </div>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
        <CategoryList />
      </div>
    );
  }
}

export default SearchPage;
