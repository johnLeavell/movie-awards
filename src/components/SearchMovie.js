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
            currentItem: {
                text: '',
                key: ''
            }
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
    addItem = e => {
        e.preventDefault();
        const newItem = this.state.currentItem;
        if(newItem.text !=="") {
            const data = [...this.state.movieData, newItem];
            this.setState({
                movieData: data,
                currentItem:{
                    text: '',
                    key: '',
                }
            })
        }
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
                        placeholder='Search for movie..'
                        onChange={this.handleMovieTitleChange}
                    />
                    <button className='button' type='submit'>Search</button>
                </form>
                <div>
                    <MovieResults movieInfo={this.state.movieData} addItem={this.addItem}/>
                </div>
            </div>
        )
    }
}
