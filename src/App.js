import React from 'react';
import { Button, Container } from 'react-bootstrap';
import PlayerCard from './Components/PlayerCards/PlayerCard'
import './App.css';

function App() {
  return (
    <div>
      <Container>
        Lets Start!
      <Button variant="primary">Hello</Button>

        <PlayerCard />
      </Container>

    </div>
  );
}

export default App;
