import React from 'react';

import ShoppingCart from '../components/ShoppingCart';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div data-testid="home-initial-message">
        <div>
          <div>aqui vai ter um input</div>
          <ShoppingCart />
        </div>
        <p>Digite algum termo de pesquisa ou escolha uma categoria.</p>
      </div>
    );
  }
}

export default App;
