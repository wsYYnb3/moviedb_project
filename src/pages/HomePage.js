import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import TMDBService from "../services/TMDBService";
import MovieCard from "../components/MovieCard";
import { useAuth } from "../contexts/AuthContext";

function HomePage() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [genreMovies, setGenreMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  const { currentUser } = useAuth();

  const favoriteGenre = currentUser?.favoriteGenre || null;
  const sortOrder = currentUser?.sortOrder || "upcoming";
  const language = currentUser?.language || "en";

  useEffect(() => {
    TMDBService.getPopularMovies(language)
      .then((response) => setPopularMovies(response.results))
      .catch((error) => console.error(error));

    TMDBService.getTopRatedMovies(language)
      .then((response) => setTopRatedMovies(response.results))
      .catch((error) => console.error(error));
    if (favoriteGenre) {
      TMDBService.getMoviesByGenre(favoriteGenre, language)
        .then((response) => setGenreMovies(response.results))
        .catch((error) => console.error(error));
    }
    TMDBService.getUpcomingMovies(language)
      .then((response) => setUpcomingMovies(response.results))
      .catch((error) => console.error(error));
  }, [favoriteGenre, currentUser, language]);

  const renderMovies = (movies, title) => (
    <>
      <h2 className='my-3'>{title}</h2>
      <Row>
        {movies.map((movie) => (
          <Col xs={12} sm={6} md={4} lg={3} key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </>
  );

  const moviesToRender = () => {
    let sortOrderMovies;
    switch (sortOrder) {
      case "popular":
        sortOrderMovies = renderMovies(popularMovies, "Popular Movies");
        break;
      case "top_rated":
        sortOrderMovies = renderMovies(topRatedMovies, "Top Rated Movies");
        break;
      case "upcoming":
        sortOrderMovies = renderMovies(upcomingMovies, "Upcoming Movies");
        break;
      default:
        sortOrderMovies = <></>;
    }

    const favoriteGenreMovies = renderMovies(
      genreMovies,
      "Favorite Genre Movies"
    );

    return (
      <>
        {sortOrderMovies}
        {favoriteGenreMovies}
      </>
    );
  };

  return (
    <Container>
      {currentUser
        ? moviesToRender()
        : renderMovies(upcomingMovies, "Upcoming Movies")}
    </Container>
  );
}

export default HomePage;
