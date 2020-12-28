import React, { Component } from 'react'
import MovieCard from './MovieCard';

const OMDB_API = process.env.REACT_APP_OMDB_API_KEY

export default class SearchMovie extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieTitle: '',
            movieData: []
        }
    }

    handleChange = e => {
        this.setState({
          movieTitle: e.target.value
        })
      }
    
      
    handleSubmit = e => {
        e.preventDefault();
        
        fetch(OMDB_API+`${this.state.movieTitle}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data.Search)
            this.setState({
                movieData: data})
        })
        .catch(err => {
            console.log(err)
        })
        // this.resetSearch()
    }

    // resetSearch = () => {
    //     this.setState({
    //         movieTitle: '',
    //     })
    // }


    render() {

        const { movieData } = this.state.movieData
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='movieTitle' />
                        <strong>Search for Movie by Title:</strong>
                    <input type='text' name='movieTitle' value={this.state.movieTitle} onChange={this.handleChange} />
                    <input type='submit' value='submit'/>
                </form>
                <ul>
                    {movieData && movieData.length > 0 ? movieData.map(movie => <MovieCard movieData={movieData} handleSubmit={this.handleSubmit} key={movie.imdbID}>{movie.Title}</MovieCard>) :
                    "Loading..."}
                </ul>
            </div>
        )
    }
}
