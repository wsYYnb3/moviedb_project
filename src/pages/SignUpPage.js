import React from 'react';
import { Container } from 'react-bootstrap'
import FormPage1 from '../components/FormPage1'
import FormPage2 from '../components/FormPage2'
import FormPage3 from '../components/FormPage3'
import FormPage4 from '../components/FormPage4'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import { useState, useRef } from 'react'

function SignUpPage() {
  const [inputs, setInputs] = useState({
    1: {
      'Username': {name: 'Username', minLength: 2, value: '', error: '', required: true},
      'Password': {name: 'Password', value: '', error: '', required: true},
      'Confirm password': {name: 'Confirm password', value: '', error: '', required: true, validation: confirmPassword}
    },
    2: {
      'Favorite language': {value: '', error: ''},
      'Favorite genre': {value: '', error: ''},
    },
    3: {
      'What do you want to see in the home page?': {value: '', error: ''},
    },

    4: {
      'Choose a voice for screen reader': {value: '', error: ''},
    }
  });
  const [page, setPage] = useState(1);

  function confirmPassword(){
    if(inputs[1]["Password"].value!=this.value)
      return 'Password confimation must match Password value.'
    return ''
  }

  function formSubmit(event){
    event.preventDefault()
    setInputs({})
    event.target.reset()
  }

  function reportValidity(){
    for(const key in inputs[page]){
      const i = validate(inputs[page][key])
      if(i){
        const newInputs = {...inputs}
        newInputs[page][key].error = i
        setInputs(newInputs)
        return false
      }
    }
    return true
  }

  function validate(input){
    if(input.required && !input.value){
      return 'This field cannot be empty'
    }

    if(input.minLength && input.value.length<input.minLength){
      return `This field has to be larger than ${input.minLength}. It now has a length of ${input.value.length}`
    }

    if(input.validation){
      return input.validation()
    }
    return ''
  }

  function changePage(event, step=1){
    if(reportValidity()){
      setPage(parseInt(page)+step)
    }
  }

  function selectPage(p){
    if(reportValidity()){
      setPage(p)
    }
  }

  function changeHandler(event) {
    const newInputs = {...inputs}
    const name = event.target.name
    newInputs[page][name].value = event.target.value
    newInputs[page][name].error = validate(newInputs[page][name])
    setInputs(newInputs)
  }

  return (
    <Container className="mt-4">
      <Form onSubmit={formSubmit} onInvalid={changeHandler}>
        <Tabs
          defaultActiveKey="1"
          variant="pills"
          className="mb-3 justify-content-md-center"
          activeKey={page}
          inputs={inputs}
          onSelect={selectPage}
        >
          <Tab eventKey="1" title="Login info">
            <FormPage1 changeHandler={changeHandler} inputs={inputs} />
          </Tab>
          <Tab eventKey="2" title="Movies preferences">
            <FormPage2 changeHandler={changeHandler} inputs={inputs} />
          </Tab>
          <Tab eventKey="3" title="Main page preferences">
            <FormPage3 changeHandler={changeHandler} inputs={inputs} />
          </Tab>
          <Tab eventKey="4" title="Screen reader preferences">
            <FormPage4 changeHandler={changeHandler} inputs={inputs} />
          </Tab>
        </Tabs>
        <Row className="justify-content-md-center">
          <Col md="auto">
            {page>1?(
              <Button 
                onClick={(e)=>changePage(e,-1)}
                className="m-1"
              >
                Previous page
              </Button>
            ):null}
          </Col>
          <Col md="auto">
            {page>1?(
              <Button 
                type="submit"
                className="m-1"
              >
                Submit
              </Button>
            ):null}
          </Col>
          <Col md="auto">
            {page<4?(
              <Button 
                onClick={(e)=>changePage(e)}
                className="m-1"
              >
                Next page
              </Button>
            ):null}
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default SignUpPage;
