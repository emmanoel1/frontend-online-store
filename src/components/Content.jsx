// Essa é a página que é exibida quando clicamos em uma categoria
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../pages/SearchPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
import CategoryPage from '../pages/CategoryPage';

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ SearchPage } />
        <Route exact path="/ShoppingCartPage" component={ ShoppingCartPage } />
        <Route exact path="/CategoryPage/:id" component={ CategoryPage } />
      </Switch>
    );
  }
}

export default Content;
