import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Input from './Input'

function FormPage4({changeHandler, inputs}) {
  return (
    <>
      <Row>
        <div className="text-center">
          <h1>Sign up</h1>
          <p>4 - Screen reader preferences</p>
        </div>
        <hr />
      </Row>
      <Row>
        <Col>
          <Input 
            name="Choose a voice for screen reader" 
            options={["English", "Spanish"]}
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
