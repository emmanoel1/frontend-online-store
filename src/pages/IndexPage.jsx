// TELA PRINCIPAL
import React from 'react';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';
import CategoryList from '../components/CategoryList';
// import InputAndButton from '../components/InputAndButton';

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div data-testid="home-initial-message">
        <div className="heder">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          <SearchBar />
          <ShoppingCart />
        </div>
        <div className="conteiner">
          <CategoryList />
        </div>
      </div>
    );
  }
}

export default SearchPage;
