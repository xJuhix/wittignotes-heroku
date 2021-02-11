import React from 'react';
import { Helmet } from 'react-helmet';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Heading from '../layout/Heading';
import ProductivityArticles from '../article/ProductivityArticles';
import ProductivityImg from '../../images/productivityimg.jpg';

export function Productivity() {
  return (
    <>
      <div>
        <Helmet>
          <html lang="en" />
          <title>Productivity</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta
            name="description"
            content="WittigNotes is a blog developed to share opinions, reviews and tips on Books, Economics and Productivity"
          />

          <meta
            name="keywords"
            content="blog, tips, opinions, books, economics, productivity, reviews, "
          />
        </Helmet>
      </div>
      <div className="category">
        <Row>
          <Col sm={12} lg={6} className="category__content">
            <Heading title="Productivity" />
            <blockquote className="category__blockquote">
              <q>Focus on being productive instead of busy.</q>
              <footer className="blockquote-footer">
                Tim Ferris
              </footer>
            </blockquote>
            <div className="category__text">
              <p>
                We all are very busy especially in the 21st century.
                With all these distractions around us staying
                productive can be incredible hard. There is always
                another email another text or another meeting. In the
                rush of the moment we tend to forget that being busy
                and being productive are two completely different
                things. In this category I will share some of the
                productivity hacks that I use and how you can
                implement them in your life as well.
              </p>
            </div>
          </Col>
          <Col sm={12} lg={6} className="category__image">
            <img
              src={ProductivityImg}
              className="image"
              alt="Computer and plant"
            />
          </Col>
        </Row>
      </div>

      <h2>Productivity Articles</h2>
      <div>
        <ProductivityArticles />
      </div>
    </>
  );
}

export default Productivity;
