import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Content from './components/Content';
// import ProductsList from './components/ProductsList';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Content />
      </BrowserRouter>
    );
  }
}

export default App;
