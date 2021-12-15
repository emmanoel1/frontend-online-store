// TELA PRINCIPAL
import React from 'react';

import SearchBar from '../components/heder/SearchBar';
import ShoppingCart from '../components/heder/ShoppingCart';
import CategoryList from '../components/CategoryList';
import RenderProduct from '../components/render_product/RenderProduct';
// import InputAndButton from '../components/InputAndButton';

import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      typed: '',
      apiResponseFromTyped: [],
    };
    this.onTypedInput = this.onTypedInput.bind(this);
    this.onClickedBtn = this.onClickedBtn.bind(this);
    // this.addBtnFn = this.addBtnFn.bind(this);
  }

  onTypedInput({ target }) {
    this.setState({
      typed: target.value,
    });
  }

  // Sugiro renomear essa funçao para queryApi pois ela será usada também para filtrar resultados das categorias
  onClickedBtn() {
    const { typed } = this.state;
    getProductsFromCategoryAndQuery('', typed).then((query) => {
      this.setState({ apiResponseFromTyped: query.results });
    });
  }

  // addBtnFn({ target }) {
  //   console.log(target);
  // }
  // comentei essa função pois entendo que a ideia do emmanoel é usar isso no futuro

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
            // addBtnFn={ this.addBtnFn }
          />
        </div>

      </div>
    );
  }
}

export default SearchPage;
