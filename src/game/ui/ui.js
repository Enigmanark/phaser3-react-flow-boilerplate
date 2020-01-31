import BaseState from "./basestate"

import ModalState from "./state";

class State extends BaseState{
  constructor() {
    super();
    this.modals = [];
  }

  toggleAuth() {
    this.toggleModal('auth')
  }

  toggleModal(modal) {
    const index = this.modals.findIndex((m) => m.id === modal.id);

    if (index === -1) {
      modal.state = new ModalState();
      this.modals.push(modal)

      this.emit('modalToggled', this.modals);
      return modal.state;
    }

    this.modals.splice(index, 1)
    this.emit('modalToggled', this.modals);
  }
}

export default new State();