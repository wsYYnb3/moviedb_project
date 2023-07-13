import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';  // <- Import Router here
import Header from './components/Header';
import AppRoutes from './AppRoutes';
import {AuthProvider} from './contexts/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>
          <Header />
          <Container>
            <AppRoutes />
          </Container>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
