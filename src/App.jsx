import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <Container fluid className="bg-light">
        <Header />
      </Container>
    </div>
  );
}

export default App;
