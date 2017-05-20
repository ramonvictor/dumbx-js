class Dumbx {
  constructor(store = {}) {
    this.subscribers = [];
    this.state = store.state || {};
    this.setters = store.setters || {};
  }

  getState() {
    return this.state;
  }

  dispatch(action, payload) {
    if (typeof action != 'string') {
      throw new Error('Dumbx/dispatch: undefined/invalid action name!');
    }

    if (!this.setters.hasOwnProperty(action)) {
      throw new Error('Dumbx/dispatch: undefined action!');
    }

    this.setters[action].call(null, this.state, payload);
    this.subscribers.forEach((callback) => callback());
  }

  subscribe(callback) {
    this.subscribers.push(callback);

    return () => {
      let index = this.subscribers.indexOf(callback);
      this.subscribers.splice(index, 1);
    };
  }
}

module.exports = Dumbx;
