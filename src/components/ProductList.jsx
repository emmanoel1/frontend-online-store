import React from 'react';
// import PropTypes from 'prop-types';

class ProductsList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {test.map((product) => (
            <div key={ product.name } data-testid="product">
              <p>{ product.name }</p>
              <img src={ product.img } alt={ product.name } />
              <p>{ product.price }</p>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

// ProductsList.propTypes = {
// };

export default ProductsList;
