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
        .then(movie => {
            this.setState({
                movieTitle: this.state.movieTitle,
                movieData: movie.Search
            })
            console.log(movie.Search)
        })
        .catch(err => {
            console.log(err)
        })
    }



    render() {
        console.log(this.state)
        const items = this.state.movieData.map((item) =>
        <ul>
            <li key={item.imdbDB}>{item.Title} Year Released: {item.Year}</li>
        </ul>
       )
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type='text'
                        placeholder='Search for movie..'
                        onChange={this.handleChange}
                    />
                </form>
                <div>
                    <MovieCard movieInfo={this.state.movieData}/>
                    {items}
                </div>
            </div>
        )
    }
}


// {/* <form onSubmit={this.handleSubmit}>
//                     <label htmlFor='movieTitle' />
//                         <strong>Search for Movie by Title:</strong>
//                     <input type='text' name='movieTitle' value={this.state.movieTitle} onChange={this.handleChange} />
//                     <input type='submit' value='submit'/>
//                 </form>
//                 <ul>
//                 </ul> */}