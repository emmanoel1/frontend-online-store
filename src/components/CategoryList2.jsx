// Requisito 2
import React, { Component } from 'react';

export default class ProductsList extends Component {
    CategoryList = () => (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
}
