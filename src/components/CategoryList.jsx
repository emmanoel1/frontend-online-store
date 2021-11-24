import React from 'react';
import { Link } from 'react-router-dom';
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
      <div className="conteiner_categories">
        <ul>
          {categories.map((category) => (
            <li key={ category.id }>
              <Link to={ `CategoryPage/${category.id}` } data-testid="category">
                { category.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default CategoryList;
