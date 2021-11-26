import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SearchPage from '../pages/SearchPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ SearchPage } />
        <Route exact path="/ShoppingCartPage" component={ ShoppingCartPage } />
        <Route exact path="/:id" component={ SearchPage } />
      </Switch>
    );
  }
}

export default Content;
