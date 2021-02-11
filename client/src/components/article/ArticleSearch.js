import React from 'react';
import PropTypes from 'prop-types';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

function ArticleSearch({ handleSearch }) {
  return (
    <InputGroup className="search__bar">
      <FormControl
        placeholder="Search by name..."
        onChange={(event) => handleSearch(event)}
      />
    </InputGroup>
  );
}

ArticleSearch.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default ArticleSearch;
