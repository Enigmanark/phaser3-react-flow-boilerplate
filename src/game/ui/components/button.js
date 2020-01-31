//@flow

import styled from "styled-components";
import React from "react";

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const ButtonC = styled.button`
    margin-top: 320px;
    margin-left: 46%;
`;

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    
        this.sm = props.sm;
    
        this.clicked = this.clicked.bind(this)
    }

    render() {
        return(
            <Container>
              <ButtonC onClick={this.clicked}>Play</ButtonC>
            </Container>
        );
    }

    clicked() {
        console.log("Clicked");
        this.sm.emit('startGame');
    }
}