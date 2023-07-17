import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from './Input'
import TMDBService from '../services/TMDBService.js'
import { useEffect, useState } from 'react';

function FormPage2({changeHandler, inputs, setScreenReaders}) {
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

  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: 'block', textAlign: 'left' }}>{item.english_name}/{item.name} ({item.iso_639_1})</span>
      </>
    )
  }

  const handleOnSelect = (item) => {
    inputs[2]["Favorite language"].value=item.iso_639_1
    setScreenReaders(window.responsiveVoice.getVoices().filter((e)=>e.name.includes(item.english_name)))
  }

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
            inputs={inputs[2]}
            type="autocomplete"
            onSelect={handleOnSelect}
            setScreenReaders={setScreenReaders}
            formatResult={formatResult}
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
            inputs={inputs[2]}
          >
          </Input>
        </Col>
      </Row>
    </>
  );
}
export default FormPage2;
