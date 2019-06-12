import { createStore } from "redux";
import rootReducer from "./../reducers/index";
const store = createStore(rootReducer);

// Log the initial state
//console.log("DEBUG --> ", store.getState());

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
//const unsubscribe = store.subscribe(() => console.log(store.getState()));

// Stop listening to state updates
//unsubscribe();

export default store;
