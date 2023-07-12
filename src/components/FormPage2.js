import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from './Input'

function FormPage2({changeHandler, inputs}) {
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
        <Col md="auto">
          <Input 
            name="Favorite language" 
            onChange={changeHandler} 
            minLength="2" 
            inputs={inputs}
            >
          </Input>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Input 
            name="Favorite genre" 
            options={["comedy", "drama"]}
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
