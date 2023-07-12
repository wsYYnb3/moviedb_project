import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from './Input'

function FormPage3({changeHandler, inputs}) {
  return (
    <>
      <Row>
        <div className="text-center">
          <h1>Sign up</h1>
          <p>3 - Main page preferences</p>
        </div>
        <hr />
      </Row>
      <Row>
        <Col>
          <Input 
            name="What do you want to see in the home page?" 
            options={["Most popular", "Something else"]}
            onChange={changeHandler} 
            inputs={inputs}
            >
          </Input>
        </Col>
      </Row>
    </>
  );
}
export default FormPage3;
