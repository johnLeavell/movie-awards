import React, { Component } from 'react'

const OMDB_API = process.env.REACT_APP_OMDB_API_KEY

export default class SearchMovie extends Component {
    constructor(){
        super();
        this.state = {
            movieTitle: '',
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
            console.log(data)
        })
        .catch(err => {
            console.log(err)
        })
        this.resetSearch()
    }

    resetSearch = () => {
        this.setState({
            movieTitle: '',
        })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor='movieTitle' />
                        <strong>Search for Movie by Title:</strong>
                    <input type='text' name='movieTitle' value={this.state.movieTitle} onChange={this.handleChange} />
                    <input type='submit' value='submit'/>
                </form>
            </div>
        )
    }
}
