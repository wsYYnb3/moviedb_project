import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from './Input'

function FormPage1({changeHandler, inputs}) {
  return (
    <>
      <Row>
        <div className="text-center">
          <h1>Sign up</h1>
          <p>1 - Login info</p>
        </div>
        <hr />
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Input 
            name="Username" 
            onChange={changeHandler} 
            minLength="2" 
            inputs={inputs}
            required>
          </Input>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Input 
            name="Password" 
            type="password"
            onChange={changeHandler} 
            inputs={inputs}
            required>
          </Input>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <Input 
            name="Confirm password" 
            type="password"
            onChange={changeHandler} 
            inputs={inputs}
            required>
          </Input>
        </Col>
      </Row>
    </>
  );
}
export default FormPage1;
