import React from "react";
import { connect } from "react-redux";
import MoviesForm from "./MoviesForm";

const Movies = ({ movies }) => (
  <>
    <ul>
      {movies.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
    <MoviesForm />
  </>
);

const mapStateToProps = (state) => ({ movies: state.reducerMovies.movies });

export default connect(mapStateToProps, {})(Movies);
