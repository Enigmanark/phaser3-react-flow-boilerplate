import React from 'react';
import styled from 'styled-components';

import Modal from './modal';

import UI from './ui';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

class Modals extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      modals: UI.modals
    }
  }

  componentDidMount() {
    this.callbackID = UI.on('modalToggled', (modals) => {
      this.setState({
        modals
      })
    })
  }

  componentWillUnmount() {
    UI.off(this.callbackID);
  }

  render() {
    return (
      <Container>
        {
          this.state.modals.map(data => {
            return <Modal data={data} />
          })
        }
      </Container>
    )
  }
}

export default Modals;