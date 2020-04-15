import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./data/reducers";

const store = createStore(allReducers, composeWithDevTools());
window.store = store;

export default store;
