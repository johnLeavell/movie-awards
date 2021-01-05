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
            filteredMovies: [],
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
                filteredMovies: movie.Search
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

    handleSearch = e => {
        //iterate through all movies and filter out the ones whose names include the search term

        let newMovies = this.filterThruMovies(e.target.value)
        
        //gat a list of just the new movies that match the search term and set it to fliteredMovies
        this.setState({ movieTitle: e.target.value, filteredMovies: newMovies })
    }

    filterThruMovies = movieTitle => {
        return this.state.movieData.filter((movie) => {
            return movie.Title.includes(movieTitle)
        })
    }
   

    render() {
        console.log(this.state)
        return (
            <div>
                <form className='form' onSubmit={this.fetchMovieData}>
                    <input
                        value={this.state.movieTitle}
                        className='input'
                        name="movie"
                        type='text'
                        ref={input => this.search = input}
                        placeholder='Search for movie..'
                        onChange={this.handleMovieTitleChange}
                    />
                    <button className='button' type='submit'>Search</button>
                </form>
                <div>
                    <MovieResults search={this.handleSearch} movieInfo={this.state.movieData} />
                   
                </div>
            </div>
        )
    }
}
