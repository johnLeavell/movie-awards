import React from 'react'
import MovieList from './MovieList';
import './style.css'
const Search = (props) => {
  console.log(props);

  const {movies, isNominee} = props;

  return (
    <div>
      <form onSubmit={props.fetchMovieData}>
        <label>Search For Movie</label>
        <br />
        <input
          className='search-bar'
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
      <MovieList 
        movies={movies}
        isNominee={isNominee} 
        addToNomineeList={props.addToNomineeList}
        deleteFromNomineeList={props.deleteFromNomineeList}
        />
    </div>
  )
}

export default Search;