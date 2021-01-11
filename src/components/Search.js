import React from 'react'
import MovieList from './MovieList';

const Search = (props) => {
  console.log(props);

  const {movies} = props;
  
  return (
    <div>
      <form onSubmit={props.fetchMovieData}>
        <label>Search For Movie</label>
        <br />
        <input
          type='text'
          value={props.movieTitle}
          name="movieTitle"
          onChange={props.handleChange}
          ></input>
          <br />
          <button type='submit'>
            Submit
          </button>
      </form>
      <MovieList movies={movies} />
    </div>
  )
}

export default Search;