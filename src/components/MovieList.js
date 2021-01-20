import React from 'react'

const MovieList = props => {
  
  const movies = props.movies.map(movie => {
    return (
      <li key={movie.imdbID}>
        <div>{movie.Title}</div>
        <div>{movie.Year}</div>
        <button>Add to Nominee List</button>
      </li>
    )
  })

  return (
    <div>
      <ul>
        {movies}
      </ul>
    </div>
  )
}
export default MovieList;