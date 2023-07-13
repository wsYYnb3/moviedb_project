import React from 'react';
import { Card, Row, Col, Container, ListGroup, ListGroupItem } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faClock, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import TextToSpeech from './TextToSpeech';
import { moviePoster } from '../services/TMDBService';

const MovieDetails = ({ movie }) => {
  return (
    <Container fluid>
      <Row className="mt-4">
        <Col md={4}>
          <Card.Img variant="top" src={moviePoster(movie.poster_path)} style={{height: "40em"}}/>
        </Col>
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>
                {movie.title}
                <TextToSpeech text={movie.title}> 
                 
                </TextToSpeech>
              </Card.Title>
              <Card.Text>
                {movie.overview}
                <TextToSpeech text={movie.overview}> 
                 
                </TextToSpeech>
              </Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <FontAwesomeIcon icon={faStar} className="mr-1" /> {movie.vote_average} / 10 ({movie.vote_count} votes)
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon icon={faClock} className="mr-1" /> {movie.runtime} minutes
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon icon={faCalendarAlt} className="mr-1" /> Release date: {movie.release_date}
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MovieDetails;
