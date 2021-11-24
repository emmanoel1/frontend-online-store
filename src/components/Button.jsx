import React from 'react';

const Button = ({ children, onClick }) => (
  <>
    <div className="container" />
    <button type="button" onClick={ onClick } data-testid="query-button">
      {children}
    </button>
  </>

);

export default Button;
