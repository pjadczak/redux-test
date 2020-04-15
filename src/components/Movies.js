import React from "react";
import { connect } from "react-redux";

const Movies = ({ movies }) => (
  <ul>
    {movies.map((movie, index) => (
      <li key={index}>{movie}</li>
    ))}
  </ul>
);

const mapStateToProps = (state) => ({ movies: state.reducerMovies.movies });

export default connect(mapStateToProps, {})(Movies);
