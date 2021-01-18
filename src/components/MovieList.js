import React from 'react';
// import { MdFavorite, MdFavoriteBorder } from 'react-icons/md';
import MovieNominees from './MovieNominees';

const MovieList = (props) => {

  console.log(props);


  const movies = props.movies.map((movie, index) => {
    return(
        <li key={index}>
          <div>{movie.Title}</div>
          <div>{movie.Year}</div>
          {
            props.isNominee ? 
            <button onClick={()=> props.deleteFromNomineeList(movie.Title)}>Remove from Nominees</button> :
            <button onClick={()=> props.addToNomineeList(movie.Title)}> Add to Nominees</button>
          }
        </li>
    )
  });

  return (
    <div>
      <ul>{movies}</ul>
      <div>
        <MovieNominees />
      </div>
    </div>
  )
}

export default MovieList;


// {/* <button onClick={() => props.toggleUpdateNominee()}> Add to Nominees</button> */}