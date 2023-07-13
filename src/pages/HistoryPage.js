import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button} from 'react-bootstrap';
import TMDBService from '../services/TMDBService';
import MovieCard from '../components/MovieCard';
import { useAuth } from '../contexts/AuthContext';

function HistoryPage() {
  const [movies, setMovies] = useState([]);

  const { currentUser, readUser, removeHistory } = useAuth();

  const history = readUser(currentUser.username).history || null;

  useEffect(() => {
    (async ()=>{
      const newMovies = []
      for(const movie in history){
        const response = await TMDBService.getMovieDetails(movie) 
        newMovies.push(response)
      }
      console.log(newMovies)
      setMovies(newMovies)
    })()
  }, []);

  return (
    <Container>
      <h2 className="my-3">History</h2>
      <Row md="5" className="mb-3">
        <Button onClick={()=>{removeHistory(currentUser);setMovies([])}}>Erase history</Button>
      </Row>
      <Row>
        {movies.map(movie => (
          <Col xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>

    </Container>
  );
}

export default HistoryPage;
