import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const navigate = useNavigate(); 
  const [searchParams, setSearchParams] = useSearchParams()
  const redirect = searchParams.get("redirect")

  const handleLogin = (e) => {
    e.preventDefault();

    if(login(username, password)){
      setUsername('');
      setPassword('');
      if(redirect){
        navigate(redirect)
      } else {
        navigate(-1); 
      }
    } else {
      setError('Incorrect password or username')
    }

  };

  return (
    <Container className="login-container">
      <div className="login-wrapper">
        <h1 className="text-center my-4">Login</h1>
        <Form onSubmit={handleLogin} className="login-form">
          <Form.Group>
            <Form.Label>Username</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Enter username" 
              value={username} 
              onChange={e => setUsername(e.target.value)} 
              required 
            />
            <FontAwesomeIcon icon={faUser} className="form-icon" />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control 
              type="password" 
              placeholder="Password" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
            />
            <FontAwesomeIcon icon={faLock} className="form-icon" />
            <Form.Text className="text-danger">
              {error}
            </Form.Text>
          </Form.Group>

          <Button variant="outline-success" type="submit" className="login-btn">
            Login
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default LoginPage;
