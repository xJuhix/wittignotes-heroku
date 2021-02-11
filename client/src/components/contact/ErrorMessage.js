import React from 'react';
import PropTypes from 'prop-types';

function ErrorMessage({ children }) {
  return <div className="error">{children}</div>;
}

export default ErrorMessage;

ErrorMessage.propTypes = {
  children: PropTypes.node.isRequired,
};
