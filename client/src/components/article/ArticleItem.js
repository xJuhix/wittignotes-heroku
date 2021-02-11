/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaClock, FaFolder } from 'react-icons/fa';

function ArticleItem({
  image_,
  title,
  excerpt,
  readtime_,
  id,
  category_,
}) {
  return (
    <Card className="card">
      <Card.Img className="card__image" variant="top" src={image_} />
      <Card.Body>
        <Card.Title className="card__title">{title}</Card.Title>
        <Card.Text
          className="card__excerpt"
          dangerouslySetInnerHTML={{ __html: excerpt }}
        />
        <Card.Text className="card__info">
          <span>
            <FaClock />
          </span>
          {' '}
          Read-time:
					{' '}
          {readtime_}
          {' '}
        </Card.Text>
        <Card.Text>
          <span>
            <FaFolder />
          </span>
          {' '}
          {category_}
          {' '}
        </Card.Text>
        <Link to={`/article/${id}`}>
          <Button
            variant="submit"
            block
            className="button mt-auto btn-lg "
          >
            Read Article
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
}

ArticleItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  image_: PropTypes.string.isRequired,
  readtime_: PropTypes.string.isRequired,
  category_: PropTypes.string.isRequired,
};

export default ArticleItem;
