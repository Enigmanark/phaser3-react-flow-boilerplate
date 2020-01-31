//@flow

import styled from "styled-components";
import React from "react";
import BaseComponent from "./base_component"

const Container = styled.div`
    width: 100%;
    height: 100%;
`

const ButtonC = styled.button`
    margin-top: 320px;
    margin-left: 46%;
`;

export default class Button extends BaseComponent {
    constructor(props) {
        super(props);
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
        this.sm.emit('startGame');
    }
}