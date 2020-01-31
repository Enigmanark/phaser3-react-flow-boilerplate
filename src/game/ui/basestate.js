
class BaseState {
  constructor() {
    this.callbacks = {};

    this.eventID = 0;
  }

  emit(event, data) {
    if (!this.callbacks[event]) return;
    
    this.callbacks[event].forEach((ev) => ev.callback(data));
  }

  on(event, callback) {
    this.eventID = this.eventID + 1;

    if (this.callbacks[event]) {
      this.callbacks[event].push({
        id: this.eventID,
        callback
      });
    } else {
      this.callbacks[event] = [];
      this.callbacks[event].push({
        id: this.eventID,
        callback
      })
    }

    return this.eventID;
  }

  off(eventID) {
    for (const key in this.callbacks) {
      this.callbacks[key].forEach((value, index) => {
        if (value.id === eventID) this.callbacks[key].slice(index, 1);
      })
    }
  }
}

export default BaseState;