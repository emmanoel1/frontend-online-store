// PÁGINA DE BUSCAS
import React from 'react';
import PropTypes from 'prop-types';
import CategoryList from '../components/CategoryList';

class CategoryPage extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  componentDidMount() {
    const { match } = this.props;
    const { id } = match.params;
    // getMusics(id)
    //   .then((response) => this.setState({
    //     musics: [...response],
    //     artistName: response[0].artistName,
    //     collectionName: response[0].collectionName,
    //   }));
  }

  render() {
    return (
      <>
        <div>
          <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
        </div>
        <h3>Página de lista de categorias</h3>
        <CategoryList />
      </>
    );
  }
}

CategoryPage.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default CategoryPage;
