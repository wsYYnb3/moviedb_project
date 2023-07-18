import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const sortMap = {
    default: 'Default',
    popular: 'Popular',
    topRated: 'Top Rated',
    mostVoted: 'Most Voted',
    alphabetical: 'A-Z',
    chronological: 'New arrivals',
};

const SortDropdown = ({ sort, setSort }) => (
  <Dropdown onSelect={(eventKey) => setSort(eventKey)}>
    <Dropdown.Toggle variant="success" id="dropdown-basic" style={{backgroundColor: '#242424', borderColor: '#8b1804'}}>
        <FontAwesomeIcon icon={faSort} /> Sort by: {sortMap[sort]}
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item eventKey='default'>Default</Dropdown.Item>
      <Dropdown.Item eventKey='popular'>Popular</Dropdown.Item>
      <Dropdown.Item eventKey='topRated'>Top Rated</Dropdown.Item>
      <Dropdown.Item eventKey='mostVoted'>Most Voted</Dropdown.Item>
      <Dropdown.Item eventKey='alphabetical'>A-Z</Dropdown.Item>
      <Dropdown.Item eventKey='chronological'>New arrivals</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default SortDropdown;