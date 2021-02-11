/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { BOOK_URL } from '../../constants/api';
import ArticleItem from './ArticleItem';

function BookArticles() {
  const [articles, setBookArticles] = useState([]);
  const url = BOOK_URL;
  const [hasError, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Getting the articles from API
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setBookArticles(json);
      })
      .catch((error) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, [url]);

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
  return (
    <>
      <Row className="row__cards">
        {articles.map((book) => (
          <Col sm={6} md={6} lg={4} xl={3} key={book.id}>
            <ArticleItem
              id={book.id}
              date_={book.acf.date_}
              author_={book.acf.author_}
              category_={book.acf.category_}
              title={book.title.rendered}
              excerpt={book.excerpt.rendered}
              image_={book.acf.image_.url}
              readtime_={book.acf.readtime_}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default BookArticles;
