import React, { useState } from 'react';
import { Navbar, Nav, FormControl, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faSearch, faTv, faUser } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchClick = () => {
    const searchQuery = query.trim();
    if (searchQuery !== '') {
      setQuery('');
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="mb-3">
      <Navbar.Brand as={Link} to="/">
        <FontAwesomeIcon icon={faFilm} /> Movie Database
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
        <Nav.Link as={Link} to="/movies">
            <FontAwesomeIcon icon={faFilm} /> Movies
          </Nav.Link>
          <Nav.Link as={Link} to="/login">
            <FontAwesomeIcon icon={faSignInAlt} /> Login
          </Nav.Link>
          <Nav.Link as={Link} to="/signup">
            <FontAwesomeIcon icon={faUser} /> Signup
          </Nav.Link>
          <Nav.Link as={Link} to="/history">
            <FontAwesomeIcon icon={faHistory} /> History
          </Nav.Link>
        </Nav>
        <div className="d-flex">
          <FormControl
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <Button variant="outline-success" onClick={handleSearchClick} style={{ marginLeft: '10px' }}>
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
