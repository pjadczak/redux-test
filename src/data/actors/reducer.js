//import App from "./index";
import initialData from "./data";
import actions from "./actions";

const reducerActors = (state = initialData, action) => {
  switch (action.type) {
    /*
     * Add new movie
     */
    case actions.ADD_ACTOR:
      if (action.name.trim() === "") {
        return state;
      }
      return {
        ...state, actors: [...state.actors, action.name]
      };
      /*
       * Change movie
       */
    case actions.CHANGE_ACTOR:
      const foundIndex = state.actors.indexOf(action.name);
      if (action.newName.trim() === "" || foundIndex < 0) {
        return state;
      }
      state.actors[foundIndex] = action.newName;
      return {
        ...state, actors: state.actors
      };
      /*
       * reset movies
       */
    case actions.RESET_ACTORS:
      return initialData;
      /*
       * Clear movies
       */
    case actions.CLEAR_ACTORS:
      return {
        label: state.label, actors: []
      };
    default:
      return state;
  }
};

export default reducerActors;