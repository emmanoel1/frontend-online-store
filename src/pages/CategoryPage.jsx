// PÁGINA DE BUSCAS
import React from 'react';
import CategoryList from '../components/CategoryList';

class CategoryPage extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <>
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
        <CategoryList />
      </>
    );
  }
}

export default CategoryPage;
