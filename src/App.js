import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import PlayerCard from './Components/PlayerCards/PlayerCard'
import TeamStatistics from './Components/TeamStat/TeamStatistics'
import './App.css';

function App() {
  const [players, setPlayers] = useState([])

  const [chosenplayer, setChosenPlayer] = useState([])

  function handleSelectPlayer(player) {
    const newChosenPlayer = [...chosenplayer, player]
    setChosenPlayer(newChosenPlayer)
  }


  //Fetch Player Data
  useEffect(() => {
    let url = "playerData.json"
    fetch(url, {
      headers: {
        contentType: "application/json",
        accept: "application/json"
      }
    })
      .then(res => res.json())
      .then(data => setPlayers(data))
      .catch(err => console.log(err))
  }, [])


  return (
    <div className="app">
      <Container>
        <h1 className="display-4 bg-warning rounded" style={{
          textAlign: "center",
          padding: "20px"
        }}>Welcome to Player Auction 2021</h1>
        <Row>
          <Col className="col-md-9">
            <PlayerCard players={players} selectPlayer={handleSelectPlayer} />

          </Col>
          <Col className="col-md-3">
            <TeamStatistics chosenplayer={chosenplayer} />
          </Col>
        </Row>



      </Container>

    </div>
  );
}

export default App;
