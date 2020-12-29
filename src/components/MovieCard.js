import React, { Component } from 'react'

class MovieCard extends Component {
    
    render(){
        console.log(this.props.movieInfo);

        const items = this.props.movieInfo.map((item) =>
        <li key={item.imdbDB}>{item.Title} 
            <br/>Year Released: {item.Year}
        </li>);

        return (
            <div>
                {!{items} ? "please try again" : <ul>{items}</ul>}
            </div>
        )
    }   
}

export default MovieCard;
