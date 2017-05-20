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
store.dispatch('pause'); // state.isPlaying => false

store.dispatch('play'); // state.isPlaying => true
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
