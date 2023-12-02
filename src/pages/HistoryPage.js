import { useEffect, useState, useCallback } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import TMDBService from "../services/TMDBService";
import MovieCard from "../components/MovieCard";
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import { sortItems } from "../services/TMDBService";
import GenreFilter from "../components/GenreFilter";
import SortDropdown from "../components/SortDropdown";

function HistoryPage() {
  const [movies, setMovies] = useState([]);
  const [filterMovies, setFilterMovies] = useState("all");
  const [sortMovies, setSortMovies] = useState("viewDate");
  const [genres, setGenres] = useState([]);

  const { currentUser, readUser, removeHistory } = useAuth();

  let history = null;
  let language = "en";

  const navigate = useNavigate();
  if (!currentUser) {
    navigate("/login?redirect=/history");
  } else {
    history = readUser(currentUser.username).history;
    language = currentUser.language;
  }

  const loadMovies = useCallback(async () => {
    const newMovies = [];
    const newGenres = [];

    for (const movie in history) {
      const response = await TMDBService.getMovieDetails(movie, language);

      response.genres.forEach((genre) => {
        if (!newGenres.find((existingGenre) => existingGenre.id === genre.id)) {
          newGenres.push(genre);
        }
      });

      response.viewDate = history[movie];

      newMovies.push(response);
    }

    setGenres(newGenres);
    setMovies(newMovies);
  }, [history, language]);

  useEffect(() => {
    loadMovies();
  }, [loadMovies, currentUser]);

  function removeMovie(e, id) {
    e.preventDefault();
    removeHistory(currentUser, id);
    history = readUser(currentUser.username).history;
    loadMovies();
  }

  const filteredMovies =
    filterMovies === "all"
      ? movies
      : movies.filter(
          (movie) =>
            movie.genres.filter((g) => g.id === filterMovies).length > 0
        );

  const sortedMovies = sortItems(filteredMovies, sortMovies);

  return (
    <Container>
      <div className='d-flex justify-content-between align-items-center mb-1'>
        <h2 className='my-3'>History</h2>
        <SortDropdown
          sort={sortMovies}
          setSort={setSortMovies}
          items={movies}
          setItems={setMovies}
          hasViewDate
        />
      </div>
      <GenreFilter
        genres={genres}
        filter={filterMovies}
        setFilter={(filter) => setFilterMovies(filter)}
      />
      {filteredMovies.length > 0 ? (
        <>
          <Row md='5' className='mb-3'>
            <Button
              onClick={() => {
                removeHistory(currentUser);
                setMovies([]);
              }}
            >
              Erase history
            </Button>
          </Row>
          <Row>
            {sortedMovies.map((movie) => (
              <Col xs={12} sm={6} md={4} lg={3} key={movie.id}>
                <MovieCard
                  movie={movie}
                  eraseFunction={(e) => removeMovie(e, movie.id)}
                />
              </Col>
            ))}
          </Row>
        </>
      ) : (
        <p>No movies found.</p>
      )}
    </Container>
  );
}

export default HistoryPage;
