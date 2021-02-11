/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Helmet } from 'react-helmet';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Heading from '../layout/Heading';
import EconomicsArticles from '../article/EconomicsArticles';
import Piggybank from '../../images/piggybank.jpg';

export function Economics() {
  return (
    <>
      <div>
        <Helmet>
          <html lang="en" />
          <title>Economics</title>
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
            <Heading title="Economics" />
            <blockquote className="category__blockquote">
              <q>
                Economics is everywhere, and understanding economics
                can help you make better decisions and lead a happier
                life.
              </q>
              <footer className="blockquote-footer">
                Tyler Cowen
              </footer>
            </blockquote>
            <div className="category__text">
              <p>
                For me economics explains everything. One can have the
                best idea in the world but if the idea doesn't make
                financial sense it will fail no matter how good it
                was. Economics is everywhere and its vital to
                understand it well. In this category I will share some
                comments on current affairs that I find facinating.
              </p>
            </div>
          </Col>
          <Col sm={12} lg={6} className="category__image">
            <img
              src={Piggybank}
              className="image"
              alt="Pink piggybank"
            />
          </Col>
        </Row>
      </div>

      <h2>Economics Articles</h2>
      <div>
        <EconomicsArticles />
      </div>
    </>
  );
}

export default Economics;
