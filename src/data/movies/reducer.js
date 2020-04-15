//import App from "./index";
import initialData from "./data";
import actions from "./actions";

const shuffle = arr => {
  var i,
    j,
    temp;
  for (i = arr.length - 1; i > 0; i--) {
    j = Math.floor(Math.random() * (i + 1));
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  return arr;
};

const reducerMovies = (state = initialData, action) => {
  switch (action.type) {
    /*
     * Add new movie
     */
    case actions.ADD_MOVIE:
      if (action.name.trim() === "") {
        return state;
      }
      return {
        ...state, movies: [...state.movies, action.name]
      };
      /*
       * Change movie
       */
    case actions.CHANGE_MOVIE:
      const foundIndex = state.movies.indexOf(action.name);
      if (action.newName.trim() === "" || foundIndex < 0) {
        return state;
      }
      state.movies[foundIndex] = action.newName;
      return {
        ...state, movies: state.movies
      };
      /*
       * reset movies
       */
    case actions.RESET_MOVIES:
      return initialData;
      /*
       * random movies
       */
    case actions.RANDOM_MOVIES:
      return {
        ...state, movies: shuffle(state.movies)
      };
      /*
       * Clear movies
       */
    case actions.CLEAR_MOVIES:
      return {
        label: state.label, movies: []
      };
    default:
      return state;
  }
};

export default reducerMovies;