import React from 'react';
import { Helmet } from 'react-helmet';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import Heading from '../layout/Heading';
import Felix from '../../images/fw.png';
import RecentArticles from '../article/RecentArticles';

export function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta
          name="description"
          content="WittigNotes is a blog developed to share opinions, reviews and tips on Books, Economics and Productivity"
        />
      </Helmet>

      <Jumbotron>
        <Container>
          <Heading title="My opinions and views on Books, Economics and Productivity" />
        </Container>
      </Jumbotron>

      <div className="browse__button">
        <Link to="/search/">
          {' '}
          <Button variant="browse" size="lg">
            {' '}
            Browse Articles
          </Button>
        </Link>
      </div>

      <h2>Meet Me</h2>

      <div className="about">
        <Row>
          <Col sm={6} md={5} className="about__image">
            <img src={Felix} className="photo" alt="Felix Wittig" />
          </Col>
          <Col sm={6} md={5} className="about__text">
            <h3>Felix Wittig</h3>
            <p>
              Hi friends, my name is Felix and I am a Business
              Administration student based in Germany and I truly
              believe that most of worlds problems can be solved with
              good economics. I also love reading and am an absolute
              productivity nerd.
            </p>
          </Col>
        </Row>
      </div>

      <h2>Recent Articles</h2>
      <div>
        <RecentArticles />
      </div>
    </>
  );
}

export default Home;
