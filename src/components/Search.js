import React from 'react'

const Search = (props) => {
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
    </div>
  )
}

export default Search;