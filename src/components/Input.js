import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'

function Input({type, name, placeholder, options, required, onChange, minLength, inputs}) {
  return (
    <Form.Group className="mb-3" controlId={name}>
      <InputGroup hasValidation>
        <InputGroup.Text id="basic-addon1">{name}</InputGroup.Text>  
        {
          type=="radio"?(
            <div className="btn-group">
              {options.map((o, i)=>(
                <>
                  <input 
                    type="radio"
                    key={i}
                    className="btn-check"
                    id={`radio-${i}`}
                    name={name}
                    variant="secondary"
                    onChange={onChange}
                    value={o} 
                    required={required}/>
                  <label className="btn btn-light" htmlFor={`radio-${i}`}>{o}</label>
                </>
              ))}
            </div>
          )
          :options?(
            <Form.Select 
              name={name} 
              onChange={onChange} 
              required={required}
              variant="light"
            >
              <option value="">{placeholder?placeholder:`Enter ${name}`}</option>
              {options.map((o,i)=><option key={i} value={o.id?o.id:o.name}>{o.name}</option> )}
            </Form.Select>
          ):(
            <Form.Control 
              as={type=="textarea"?type:"input"} 
              type={type} 
              name={name}
              placeholder={placeholder?placeholder:`Enter ${name}`} 
              onChange={onChange}
              variant="light"
              value={inputs[name]?.value}
              required={required}
              isInvalid={inputs[name]?.error}
              isValid={inputs[name]?.value&&inputs[name]?.error==''}
              minLength={minLength}/>
          )
        }
      </InputGroup>
      <Form.Text className="text-danger">
        {inputs[name]?.error}
      </Form.Text>
    </Form.Group>
  )

}

export default Input
