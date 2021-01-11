import React from 'react';

const MovieList = (props) => {

  console.log(props);

  const movies = props.movies.map((movie, index) => {
    return(
        <li key={index}>
          <div>{movie.Title}</div>
          <div>{movie.Year}</div>
        </li>
    )
  });
  
  return (
    <div>
      <ul>{movies}</ul>
    </div>
  )
}

export default MovieList;