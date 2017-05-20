# dumbx-js
A very dumb way of using some Redux principles

# Usage

First of all, instantiate the store:

```js
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
```

Then, on the UI component, subscribe for store updates:

```js
// Component render example
const render = () => {
	console.log(store.getState().isPlaying);
};

// Subscribe render returns unsubscribe function
const unsubscribe = store.subscribe(render);
```

Dispatch actions on user interactions (example):

```js
// Dispatching actions
const pauseBtn = document.querySelector('#pause');
const playBtn = document.querySelector('#play');

pauseBtn.addEventListener('click', () => {
	store.dispatch('pause'); // store.getState().isPlaying => false
});

playBtn.addEventListener('click', () => {
	store.dispatch('play'); // store.getState().isPlaying => true
});
```

Optionally, unsubscribe whenever component is distroyed:

```js
const destroy = () => {
	unsubscribe();
};
```

# Testing locally

Run the example file with:

```
$ node example.js
```
