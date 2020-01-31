import React from 'react';
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
class HelloWorld extends React.Component {
    constructor(props) {
      super(props);
  
      const { playerName } = props;
  
      this.state = {
        playerName
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

export default HelloWorld;