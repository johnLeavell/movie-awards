import React, { Component } from 'react'
import MovieResults from './MovieResults';


const OMDB_API = process.env.REACT_APP_OMDB_API_KEY

export default class SearchMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieTitle: '',
            movieData: [],
        }
    }

    handleMovieTitleChange = e => {
        this.setState({
          movieTitle: e.target.value.trim()
        })
    }
     
    fetchMovieData = (e) =>{
        e.preventDefault();
        fetch(OMDB_API+`${this.state.movieTitle}`)
        .then(resp => resp.json())
        .then(movie => {console.log(movie.Search)
            this.setState({
                movieData: movie.Search,
                movieTitle: ''
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
                <form onSubmit={this.fetchMovieData}>
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
