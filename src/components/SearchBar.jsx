import React from 'react';
import PropTypes from 'prop-types';

class SearchBar extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    const { onTypedInput, typed, onClickedBtn } = this.props;
    return (
      <div className="search_bar">
        <input
          className="input_search"
          type="text"
          data-testid="query-input"
          value={ typed }
          onChange={ onTypedInput }
        />
        <button
          className="btn-search button is-primary is-small"
          data-testid="query-button"
          value={ typed }
          type="submit"
          onClick={ onClickedBtn }
        >
          Pesquisar
        </button>
      </div>
    );
  }
}

SearchBar.propTypes = {
  onClickedBtn: PropTypes.func.isRequired,
  onTypedInput: PropTypes.func.isRequired,
  typed: PropTypes.string.isRequired,
};

export default SearchBar;
