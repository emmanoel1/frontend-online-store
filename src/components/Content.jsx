import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from '../pages/App';

class Content extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={ App } />
      </Switch>
    );
  }
}

export default Content;
