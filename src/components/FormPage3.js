import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Input from "./Input";

function FormPage3({ changeHandler, inputs }) {
  return (
    <>
      <Row>
        <div className='text-center'>
          <h1>Sign up</h1>
          <p>3 - Main page preferences</p>
        </div>
        <hr />
      </Row>
      <Row className='justify-content-md-center'>
        <Col md='auto' className='signup-form-field'>
          <Input
            name='What do you want to see in the home page?'
            options={[
              { id: "popular", name: "Popular" },
              { id: "top_rated", name: "Top Rated" },
              { id: "upcoming", name: "New arrivals" },
            ]}
            onChange={changeHandler}
            inputs={inputs}
          ></Input>
        </Col>
      </Row>
    </>
  );
}
export default FormPage3;
