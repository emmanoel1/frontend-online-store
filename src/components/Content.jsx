import React from 'react';
import { Route, Switch } from 'react-router-dom';
import IndexPage from '../pages/IndexPage';
import ShoppingCartPage from '../pages/ShoppingCartPage';
// import CategoryPage from '../pages/CategoryPage';

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ IndexPage } />
        <Route exact path="/ShoppingCartPage" component={ ShoppingCartPage } />
        {/* <Route exact path="/CategoryPage/:id" component={ CategoryPage } /> */}
      </Switch>
    );
  }
}

export default Content;
