// TELA PRINCIPAL
import React from 'react';
import SearchBar from '../components/SearchBar';
import ShoppingCart from '../components/ShoppingCart';
import CategoryList from '../components/CategoryList';
import RenderProduct from '../components/RenderProduct';
import { getProductsFromCategoryAndQuery } from '../services/api';
// import InputAndButton from '../components/InputAndButton';

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      typed: '',
      apiResponseFromTyped: [],
    };
    this.onTypedInput = this.onTypedInput.bind(this);
    this.onClickedBtn = this.onClickedBtn.bind(this);
    this.addBtnFn = this.addBtnFn.bind(this);
  }

  onTypedInput({ target }) {
    this.setState({
      typed: target.value,
    });
  }

  onClickedBtn() {
    const { typed } = this.state;
    getProductsFromCategoryAndQuery('', typed).then((query) => {
      this.setState({ apiResponseFromTyped: query.results });
    });
  }

  addBtnFn({ target }) {
    console.log(target);
  }

  render() {
    const { typed, apiResponseFromTyped } = this.state;
    return (
      <div data-testid="home-initial-message">
        <div className="heder">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          <SearchBar
            onTypedInput={ this.onTypedInput }
            onClickedBtn={ this.onClickedBtn }
            typed={ typed }
          />
          <ShoppingCart />
        </div>
        <div className="conteiner">
          <CategoryList />
          <RenderProduct
            products={ apiResponseFromTyped }
            addBtnFn={ this.addBtnFn }
          />
        </div>
      </div>
    );
  }
}

export default SearchPage;
