// {/* Requisito 4 */}
import React from 'react';
// import { Link } from 'react-router-dom';
import { getCategories } from '../services/api';

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
    console.log(categories);
    return (
      <div className="content_categories">
        {categories.map((category) => (
          <label key={ category.id } htmlFor={ category.id } data-testid="category">
            <input
              type="radio"
              name="category"
              value={ category.name }
              id={ category.id }
            />
            { category.name }
          </label>
        ))}
      </div>
    );
  }
}

export default CategoryList;
