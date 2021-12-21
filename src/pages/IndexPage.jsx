// TELA PRINCIPAL
import React from 'react';
import SearchBar from '../components/header/SearchBar';
import ShoppingCart from '../components/header/ShoppingCart';
import CategoryList from '../components/categotyList/CategoryList';
import RenderProduct from '../components/render_product/RenderProduct';
// import InputAndButton from '../components/InputAndButton';
import { getProductsFromCategoryAndQuery } from '../services/api';

class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      typed: '',
      idCategory: '',
      apiResponseFromTyped: [],
      itemOnCart: [],
    };
    this.onTypedInput = this.onTypedInput.bind(this);
    this.onClickedBtn = this.onClickedBtn.bind(this);
    this.testes = this.testes.bind(this);
    this.addBtnFn = this.addBtnFn.bind(this);
  }

  onTypedInput({ target }) {
    this.setState({
      typed: target.value,
    });
  }

  // Sugiro renomear essa funçao para queryApi pois ela será usada também para filtrar resultados das categorias
  onClickedBtn(event) {
    const { id, name } = event.target;
    if (name === 'buscar') {
      const { typed, idCategory } = this.state;
      this.testes(idCategory, typed);
    } else {
      this.setState({ idCategory: id }, () => {
        const { typed, idCategory } = this.state;
        this.testes(idCategory, typed);
      });
    }
    // se event.target.name === buscar so roda os ifs
    // se event.target.name !== buscar resseta o valor do estado (id category = id) e depois roda os ifs
  }

  testes(idCategory, typed) {
    if (idCategory !== '' && typed !== '') {
      console.log('primerio if');
      getProductsFromCategoryAndQuery(idCategory, typed).then((query) => {
        this.setState({ apiResponseFromTyped: query.results });
      });
    } else if (typed !== '') {
      console.log('segundo if');
      getProductsFromCategoryAndQuery('', typed).then((query) => {
        this.setState({ apiResponseFromTyped: query.results });
      });
    } else if (idCategory !== '') {
      console.log('terceriro if');
      getProductsFromCategoryAndQuery(idCategory, '').then((query) => {
        this.setState({ apiResponseFromTyped: query.results });
      });
    }
  }

  addBtnFn({ target }) {
    const productId = target.value;
    const { itemOnCart } = this.state;
    this.setState({
      itemOnCart: [...itemOnCart, productId],
    });
  }

  render() {
    const { typed, apiResponseFromTyped, itemOnCart } = this.state;
    return (
      <div data-testid="home-initial-message">

        <div className="heder">
          <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
          <SearchBar
            onTypedInput={ this.onTypedInput }
            onClickedBtn={ this.onClickedBtn }
            typed={ typed }
          />
          <ShoppingCart
            addedProducts={ itemOnCart }
          />
        </div>

        <div className="conteiner">
          <CategoryList
            onClickedBtn={ this.onClickedBtn }
          />
          <RenderProduct
            products={ apiResponseFromTyped }
            addBtnFn={ this.addBtnFn }
            addedProducts={ itemOnCart }
          />
        </div>

      </div>
    );
  }
}

export default SearchPage;
