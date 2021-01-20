import React from 'react'

const MovieList = ({ movies }) => {
  
  return (
    <div>
      <ul>
      { movies.map( movie =>{
        return(
          <li key={movie.imdbID}>
            <div>{movie.Title}</div>
            <div>{movie.Year}</div>
          </li>
        )
      })
      }
      </ul>
    </div>
  )
}
export default MovieList;