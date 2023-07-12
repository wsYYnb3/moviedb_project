import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';



const GenreFilter = ({ genres, filter, setFilter }) => {

    const selectedGenre = genres.find(genre => genre.id === parseInt(filter));

  return (
    <Dropdown className="mb-3 bc: #242424" onSelect={(eventKey) => setFilter(eventKey)}>
      <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor: '#242424', borderColor: '#8b1804'}}>
        <FontAwesomeIcon icon={faFilter} /> Filter by Genre: {selectedGenre ? selectedGenre.name : 'All'}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item eventKey='all'>All</Dropdown.Item>
        {genres.map(genre => (
          <Dropdown.Item eventKey={genre.id} key={genre.id}>{genre.name}</Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default GenreFilter;
