/* eslint-disable no-console */
/* eslint-disable no-underscore-dangle */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { PRODUCTIVY_URL } from '../../constants/api';
import ArticleItem from './ArticleItem';

function ProductivityArticles() {
  const [articles, setProductivityArticles] = useState([]);
  const url = PRODUCTIVY_URL;
  const [hasError, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Getting the articles from API
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setProductivityArticles(json);
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
        {articles.map((productivity) => (
          <Col sm={6} md={6} lg={4} xl={3} key={productivity.id}>
            <ArticleItem
              id={productivity.id}
              date_={productivity.acf.date_}
              author_={productivity.acf.author_}
              category_={productivity.acf.category_}
              title={productivity.title.rendered}
              excerpt={productivity.excerpt.rendered}
              image_={productivity.acf.image_.url}
              readtime_={productivity.acf.readtime_}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default ProductivityArticles;
