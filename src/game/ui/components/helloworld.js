import React from 'react';
import BaseComponent from "./base_component"
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`

const Text = styled.h1`
  color: white;
  padding-top: 250px;
  text-align: center;
`
export default class HelloWorld extends BaseComponent {
  constructor(props) {
    super(props);
    this.state = {
      playerName : props.playerName
    }
  }

  render() {
    return (
      <Container>
        <Text>HELLO {this.state.playerName}</Text>
      </Container>
    )
  }
}