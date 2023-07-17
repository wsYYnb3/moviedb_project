import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from './Input'

function FormPage4({changeHandler, inputs, screenReaders}) {
  return (
    <>
      <Row>
        <div className="text-center">
          <h1>Sign up</h1>
          <p>4 - Screen reader preferences</p>
        </div>
        <hr />
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto" className="signup-form-field">
          <Input 
            name="Choose a voice for screen reader" 
            options={screenReaders}
            onChange={changeHandler} 
            inputs={inputs}
            >
          </Input>
        </Col>
      </Row>
    </>
  );
}
export default FormPage4;
