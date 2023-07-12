import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    
  return (
    <Link to={`/movies/${movie.id}`}>
      <Card className="mb-4">
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <FontAwesomeIcon icon={faStar} className="mr-1" />
            {movie.vote_average.toFixed(1)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default MovieCard;
