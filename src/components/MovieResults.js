import React from 'react';
import './style.css'
const MovieResults = (props) => {
    console.log(props)
    const items = props.movieInfo.map((item, index) =>
        <li key={index}>
            <div>
            {item.Title} 
            </div>
            <div>
            Year Released: {item.Year}
            <br/>
            <button onClick={props.addToFavorites}>add to nominees</button>
            </div>
        </li>);

        return (
            <div>
                {!{items} ? "please try again" : <ul>{items}</ul>}
            </div>
        )
}

export default MovieResults;