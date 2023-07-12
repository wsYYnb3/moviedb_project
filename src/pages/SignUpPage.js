import React from 'react';
import { Container } from 'react-bootstrap';
import Input from '../components/Input'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Alert'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

function SignUpPage() {
  const [inputs, setInputs] = useState({});
  const [errors, setErrors] = useState({});

  function formSubmit(event){
    event.preventDefault()
    setErrors({})
    setInputs({})
    event.target.reset()
  }

  function handleChange(event) {
    event.preventDefault()
    const name = event.target.name
    const value = event.target.value
    if(event.target.willValidate){
      setErrors({...errors, [name]: event.target.validationMessage})
    } else {
      setErrors({...errors, [name]: ''})
    }
    setInputs({...inputs, [name]: value})
  }

  return (
      <Container className="mt-4">
        <Row>
          <div className="text-center">
            <h1>Sign up</h1>
            <p>1 - Login info</p>
          </div>
          <hr />
        </Row>
        <Form onSubmit={formSubmit} onInvalid={handleChange}>
          <Row>
            <Col className="md-5">
              <Input 
                name="Username" 
                onChange={handleChange} 
                minlength="2" 
                errors={errors}
                required>
              </Input>
            </Col>
            <Col className="md-2"></Col>

            <Col className="md-5">
              <Input 
                name="Email" 
                type="email"
                onChange={handleChange} 
                errors={errors}
                required>
              </Input>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input 
                type="textarea" 
                name="Address" 
                onChange={handleChange} 
                placeholder="Street, number, city, zip" 
                minlength="10" 
                errors={errors}
                required>
              </Input>
            </Col>
          </Row>
          <Row>
            <Col className="md-5">
              <Input 
                name="Course" 
                options={['Node','React','Agriculture']}
                errors={errors}
                onChange={handleChange} 
                required>
              </Input>
            </Col>
            <Col className="md-2"></Col>

            <Col className="md-5">
              <Input 
                name="Gender" 
                type="radio" 
                options={['Female','Male','Other']}
                errors={errors}
                onChange={handleChange} 
                required>
              </Input>
            </Col>
          </Row>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
  );
}

export default SignUpPage
