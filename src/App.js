//@flow

import React from 'react';
import styled from "styled-components";
import './App.css';
import Modals from "../src/game/ui/modals";
import Game from "../src/game/Game";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
`
const GameContainer = styled.div`
  position: relative;
`
export default class App extends React.Component {
  render() {
    return (
      <Container>
        <GameContainer id="phaserContainer">
          <Modals/>
        </GameContainer>
      </Container>
    );
  }

  componentDidMount() {
    this.game = new Game();
  }
}
