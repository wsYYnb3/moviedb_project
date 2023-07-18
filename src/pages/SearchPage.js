import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';
import TMDBService from '../services/TMDBService';
import MovieCard from '../components/MovieCard';
import GenreFilter from '../components/GenreFilter';
import SortDropdown from '../components/SortDropdown';
import { useAuth } from '../contexts/AuthContext';
import { sortItems } from '../services/TMDBService';
import CustomPagination from '../components/CustomPagination';

const useQuery = () => new URLSearchParams(useLocation().search);

const SearchPage = () => {
  const query = useQuery().get('q');
  const [searchResults, setSearchResults] = useState([]);
  const [filterMovies, setFilterMovies] = useState('all');
  const [genres, setGenres] = useState([]);
  const [sortMovies, setSortMovies] = useState('');

  const [totalPages, setTotalPages] = useState(0);
  const [page, setPage] = useState(1);

  const { currentUser } = useAuth();
  const language = currentUser?.language || 'en';


  useEffect(() => {
    TMDBService.getMovieGenres(language)
      .then((response) => setGenres(response.genres))
      .catch((error) => console.error(error));
  }, []);

  
  useEffect(() => {
    if (query) {
      TMDBService.searchMovies(query, language, page)
        .then((response) => {
          setSearchResults(response.results);
          setTotalPages(response.total_pages);  
        })
        .catch((error) => console.error(error));
    }
  }, [query, page]);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setPage(pageNumber);
    }
  };


  const filteredMovies =
    filterMovies === 'all'
      ? searchResults
      : searchResults.filter((movie) => movie.genre_ids.includes(parseInt(filterMovies)));

  const sortedMovies = sortItems(filteredMovies, sortMovies);

 
  return (
    <Container fluid className="mt-3">
      <Row>
        <Col>
          <div className="d-flex justify-content-between align-items-center mb-1">
            <h2>Search results for "{query}"</h2>
            <SortDropdown sort={sortMovies} setSort={setSortMovies} items={searchResults} setItems={setSearchResults} />
          </div>
          <GenreFilter genres={genres} filter={filterMovies} setFilter={(filter) => { setFilterMovies(filter); setPage(1); }} />
          {filteredMovies.length > 0 ? (
            <Row>
              {sortedMovies.map((movie) => (
                <Col xs={12} sm={6} md={4} lg={3} className="overflow-auto" key={movie.id}>
                  <MovieCard movie={movie} />
                </Col>
              ))}
            </Row>
          ) : (
            <p>No movies found.</p>
          )}
        </Col>
      </Row>
      <CustomPagination 
        currentPage={page}
        totalPages={totalPages}
        handlePageChange={handlePageChange}
      />
    </Container>
  );
};

export default SearchPage;
