import React from 'react';
import Container from 'react-bootstrap/Container';
import Header from './components/Header.jsx';

function App() {
  return (
    <div className="App overflow-hidden">
      <Container fluid className="bg-light vh-100 d-flex flex-column">
        <Header />
      </Container>
    </div>
  );
}

export default App;
