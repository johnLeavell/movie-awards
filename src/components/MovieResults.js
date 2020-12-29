import React from 'react';

const MovieResults = (props) => {
    
    const items = props.movieInfo.map((item) =>
        <li key={item.imdbDB}>{item.Title} 
            <br/>Year Released: {item.Year}
        </li>);

        return (
            <div>
                {!{items} ? "please try again" : <ul>{items}</ul>}
            </div>
        )
}

export default MovieResults;