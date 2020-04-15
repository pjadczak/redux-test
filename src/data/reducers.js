import { combineReducers } from "redux";
import reducerMovies from "./movies/index";
import reducerActors from "./actors/index";

const allReducers = combineReducers({ reducerMovies, reducerActors });

export default allReducers;
