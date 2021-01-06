import React from 'react';
import './style.css'
const MovieResults = (props) => {
    
    const items = props.movieInfo.map((item, index) =>
        <li key={index}>
            {item.Title} 
            <br/>Year Released: {item.Year}
            <button>add to nominees</button>
        </li>);

        return (
            <div>
                {!{items} ? "please try again" : <ul>{items}</ul>}
            </div>
        )
}

export default MovieResults;