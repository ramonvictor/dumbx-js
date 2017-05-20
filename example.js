// Usage example
const Dumbx = require('./dumbx');

const store = new Dumbx({
  state: {
    isPlaying: false
  },
  setters: {
    pause(state) {
      state.isPlaying = false;
    },
    play(state) {
      state.isPlaying = true;
    }
  }
});

// Component render example
const render = () => {
  console.log(store.getState().isPlaying);
};

// Subscribe render returns unsubscribe function
const unsubscribe = store.subscribe(render);

// Dispatching actions
store.dispatch('pause'); // state.isPlaying => false

store.dispatch('play'); // state.isPlaying => true

// On component destroy you can unsubscribe
unsubscribe();
