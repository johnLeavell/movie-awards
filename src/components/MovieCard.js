import React, { Component } from 'react'

class MovieCard extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieData: this.props.movieData
        }
    }

    componentDidMount(){
        this.props.handleSubmit()
    }
    

    render() {
        const {
            Title,
            Released,
            imdbRating
        } = this.movieData;
        
        return (
            <div>
                <div>
                    <h2>Movie Details</h2>
                <div>
                    <h1>{Title}</h1>
                    <small>Released Date: {Released}</small>
                </div>
                    <h4>Rating: {imdbRating} / 10</h4>
                </div>
            </div>
        )
    }
}

export default MovieCard;
