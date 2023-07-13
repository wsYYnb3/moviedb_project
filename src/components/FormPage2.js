import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from './Input'
import TMDBService from '../services/TMDBService.js'
import { useEffect, useState } from 'react';

function FormPage2({changeHandler, inputs}) {
  const [genres, setGenres] = useState([])
  const [languages, setLanguages] = useState([])
  useEffect(() => {
    TMDBService.getMovieGenres()
      .then((response) => setGenres(response.genres))
      .catch((error) => console.error(error));
    TMDBService.getLanguages()
      .then((response) => setLanguages(response))
      .catch((error) => console.error(error));
  }, [])
  return (
    <>
      <Row>
        <div className="text-center">
          <h1>Sign up</h1>
          <p>2 - Movies preferences</p>
        </div>
        <hr />
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto" className="signup-form-field">
          <Input 
            name="Favorite language" 
            onChange={changeHandler} 
            inputs={inputs}
            type="autocomplete"
            options={languages}
            >
          </Input>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto" className="signup-form-field">
          <Input 
            name="Favorite genre" 
            options={genres}
            onChange={changeHandler} 
            inputs={inputs}
            >
          </Input>
        </Col>
      </Row>
    </>
  );
}
export default FormPage2;
