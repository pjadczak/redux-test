import React from "react";
import { connect } from "react-redux";
import actions from "../data/movies/actions";

const MoviesForm = (props) => {
  const movieInput = React.createRef();
  const addMovie = (e) => {
    e.preventDefault();
    props.add(movieInput.current.value);
    // console.log("form", movieInput.current.value);
  };
  return (
    <form onSubmit={addMovie}>
      <input ref={movieInput} />
      <button>Add Movie</button>
    </form>
  );
};

const mapsDispatchToProps = (dispatch) => ({
  add: (movie) => dispatch(actions.add(movie)),
});

export default connect(null, mapsDispatchToProps)(MoviesForm);
