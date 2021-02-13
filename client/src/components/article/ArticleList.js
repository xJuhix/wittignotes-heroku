/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { ALL_URL } from '../../constants/api';
import ArticleSearch from './ArticleSearch';
import ArticleItem from './ArticleItem';

function AllArticles() {
  const [articles, setArticles] = useState([]);
  const [filtredArticles, setFilteredArticles] = useState([]);
  const [hasError, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Getting the articles from API
  useEffect(() => {
    fetch(ALL_URL)
      .then((response) => response.json())
      .then((json) => {
        setArticles(json);
        setFilteredArticles(json);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => setLoading(false));
  }, []);

  if (hasError) {
    return <Alert variant="warning" className="erroralert" />;
  }
  if (loading) {
    return (
      <Spinner
        role="status"
        animation="border"
        className="spinner"
        variant="info"
      />
    );
  }

  // eslint-disable-next-line func-names
  const searchArticles = function (event) {
    console.log(event.target.value);
    const searchText = event.target.value.toLowerCase();
    // eslint-disable-next-line prettier/prettier
    const filteredArray = articles.filter((article) => article.title.rendered.toLowerCase().includes(searchText));
    setFilteredArticles(filteredArray);
  };

  return (
    <>
      <ArticleSearch handleSearch={searchArticles} />
      <Row className="row__cards">
        {filtredArticles.map((article) => (
          <Col sm={12} md={6} lg={4} xl={3} key={article.id}>
            <ArticleItem
              id={article.id}
              date_={article.acf.date_}
              author_={article.acf.author_}
              category_={article.acf.category_}
              title={article.title.rendered}
              excerpt={article.excerpt.rendered}
              image_={article.acf.image_.url}
              readtime_={article.acf.readtime_}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default AllArticles;
