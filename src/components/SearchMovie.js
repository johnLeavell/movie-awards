import React, { Component } from 'react'
import MovieResults from './MovieResults';


const OMDB_API = process.env.REACT_APP_OMDB_API_KEY

export default class SearchMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieTitle: '',
            movieData: [],
            nominations: [],
        }
    }

    handleMovieTitleChange = e => {
        this.setState({
          movieTitle: e.target.value.trim()
        })
    }
     
    handleSubmit = e => {
        e.preventDefault();
        
        fetch(OMDB_API+`${this.state.movieTitle}`)
        .then(resp => resp.json())
        .then(movie => {
            if(!movie.Search){
                this.setState({ movieData: []});
                return alert("Unable to find a match. Please try again");
                
            }
            this.setState({
                movieTitle: this.state.movieTitle,
                movieData: movie.Search
            })
        })
        .catch(err => {
            console.log(err)
        })
    }

    
    render() {
        console.log(this.state)
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        name="movie"
                        type='text'
                        placeholder='Search for movie..'
                        onChange={this.handleMovieTitleChange}
                    />
                </form>
                <div>
                    <MovieResults movieInfo={this.state.movieData}/>
                </div>
            </div>
        )
    }
}
