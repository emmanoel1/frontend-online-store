// {/* Requisito 4 */}
// {/* Lista de todas as categorias */}
import React from 'react';
import PropTypes from 'prop-types';
import './categorylist.css';
import { getCategories } from '../../services/api';

class CategoryList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
    };
  }

  componentDidMount() {
    getCategories().then((product) => {
      this.setState({
        categories: product,
      });
    });
  }

  render() {
    const { categories } = this.state;
    const { onClickedBtn } = this.props;

    return (
      <div className="content_categories">
        {categories.map((category) => (
          <label key={ category.id } htmlFor={ category.id } data-testid="category">
            <input
              type="radio"
              name="category"
              value={ category.name }
              id={ category.id }
              onChange={ onClickedBtn } // Requisito 6 - Função para chamar a categoria
            />
            { category.name }
          </label>
        ))}
      </div>
    );
  }
}

CategoryList.propTypes = {
  onClickedBtn: PropTypes.func.isRequired,
};

export default CategoryList;
