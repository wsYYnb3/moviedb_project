import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router } from 'react-router-dom';  // <- Import Router here
//import Header from './components/Header';
import AppRoutes from './AppRoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Container>
          <AppRoutes />
        </Container>
      </Router>
    </div>
  );
        //<Header />
}

export default App;
