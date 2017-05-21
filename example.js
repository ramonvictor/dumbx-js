// Usage example
const Dumbx = require('./dumbx');

const store = new Dumbx({
  state: {
    isPlaying: false,
    music: ''
  },
  setters: {
    pause(state) {
      state.isPlaying = false;
    },
    play(state) {
      state.isPlaying = true;
    },
    selectMusic(state, payload) {
      state.music = payload.name;
    }
  }
});

// Component render example
const render = () => {
  console.log(store.getState());
};

// Subscribe render returns unsubscribe function
const unsubscribe = store.subscribe(render);

// Dispatching actions
store.dispatch('pause'); // state.isPlaying => false

store.dispatch('play'); // state.isPlaying => true

store.dispatch('selectMusic', { name: 'Awesome!' }); // state.music => 'Awesome!'

// On component destroy you can unsubscribe
unsubscribe();
