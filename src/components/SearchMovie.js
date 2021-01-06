import React, { Component } from 'react'
import MovieResults from './MovieResults';

import './style.css'

const OMDB_API = process.env.REACT_APP_OMDB_API_KEY

export default class SearchMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieTitle: '',
            movieData: [],
            favoriteMovies: [],
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
                favoriteMovies: movie.Search
            })
        })
        .catch(err => {
            console.log(err)
        })
        // clears search bar, may not be necessary
        // this.clearSearch()
    }
     // clearSearch = () => {
    //     this.setState({
    //         movieTitle: ''
    //     })
    // }

   

    render() {
        console.log(this.state)
        return (
            <div>
                <form  onSubmit={this.fetchMovieData}>
                    <input
                        value={this.state.movieTitle}
                        name="movie"
                        type='text'
                        ref={input => this.search = input}
                        placeholder='Search for movie..'
                        onChange={this.handleMovieTitleChange}
                    />
                    <button type='submit'>Search</button>
                </form>
                <div>
                    <MovieResults movieInfo={this.state.movieData} />
                   
                </div>
            </div>
        )
    }
}
