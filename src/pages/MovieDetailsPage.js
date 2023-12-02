import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TMDBService from "../services/TMDBService";
import MovieDetails from "../components/MovieDetails";
import ImageGallery from "../components/ImageGallery";
import MovieCard from "../components/MovieCard";
import { Container, Row, Col } from "react-bootstrap";
import TextToSpeech from "../components/TextToSpeech";
import { useAuth } from "../contexts/AuthContext";

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [images, setImages] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [reviews, setReviews] = useState([]);

  const { currentUser, addToHistory } = useAuth();
  if (currentUser) {
    addToHistory(currentUser, id);
  }

  const language = currentUser?.language || "en";

  useEffect(() => {
    TMDBService.getMovieDetails(id, language)
      .then((response) => setMovie(response))
      .catch((error) => console.error(error));

    TMDBService.getMovieImages(id, language)
      .then((response) => setImages(response.backdrops))
      .catch((error) => console.error(error));

    TMDBService.getMovieRecommendations(id, language)
      .then((response) => setRecommendations(response.results))
      .catch((error) => console.error(error));

    TMDBService.getReviews(id, language)
      .then((response) => setReviews(response.results))
      .catch((error) => console.error(error));
  }, [id]);

  return (
    <div>
      {movie && <MovieDetails movie={movie} />}
      {images && <ImageGallery images={images} />}
      <Container>
        <h2>Similar Movies</h2>
        <Row className='d-flex flex-row flex-nowrap overflow-auto'>
          {recommendations.map((movie) => (
            <Col xs={6} md={4} lg={3} key={movie.id}>
              <MovieCard movie={movie} />
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <div key={review.id}>
            <TextToSpeech text={review.content} />
            <p>{review.content}</p>
          </div>
        ))}
      </Container>
    </div>
  );
};

export default MovieDetailsPage;
