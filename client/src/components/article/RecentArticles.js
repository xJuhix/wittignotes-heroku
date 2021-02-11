/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import { RECENTARTICLES_URL } from '../../constants/api';
import ArticleItem from './ArticleItem';

function RecentArticles() {
  const [articles, setRecentArticles] = useState([]);
  const url = RECENTARTICLES_URL;
  const [hasError, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  // Getting the articles from API
  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setRecentArticles(json);
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
        {articles.map((recent) => (
          <Col sm={6} md={6} lg={4} xl={3} key={recent.id}>
            <ArticleItem
              id={recent.id}
              date_={recent.acf.date_}
              author_={recent.acf.author_}
              category_={recent.acf.category_}
              title={recent.title.rendered}
              excerpt={recent.excerpt.rendered}
              image_={recent.acf.image_.url}
              readtime_={recent.acf.readtime_}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default RecentArticles;
