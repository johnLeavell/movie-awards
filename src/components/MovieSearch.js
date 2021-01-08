import React, { Component } from 'react'
import MovieResults from './MovieResults';
import MovieRow from './MovieRow';
import './style.css';

const OMDB_API = process.env.REACT_APP_OMDB_API_KEY;
const url = `http://www.omdbapi.com/?&apikey=`;

export default class MovieSearch extends Component {
    constructor(props){
        super(props);
        this.state = {
            movieTitle: '',
            movieData: [],
            nomineeList: [],
            isNominee: false,
        };
    }

    handleMovieTitleChange = e => {
        this.setState({
          movieTitle: e.target.value.trim()
        })
    }

    addToFavorites = () => {
       console.log('clicked')
       this.setState({ 
           isNominee: !this.state.isNominee 
        });
    }

    deleteFromFavorites = () => {
        console.log('deleted')
        this.setState({
            isNominee: false
        })
    }

    fetchMovieData = (e) =>{
        e.preventDefault();
        
        let movieTitle = this.state.movieTitle;
        //fetch by movie title
        fetch(url+OMDB_API+'&s='+movieTitle)
        .then(resp => resp.json())
        .then(movie => {console.log(movie.Search)
            let results = movie.Search;
            let movieRows = [];

            if (movieTitle.length > 0) {
                for(let i = results.length - 1; i >= 0; i--) {
                    const movieRow = (
                        <MovieResults
                            key={results[i].id}
                            movie={results[i]}
                        />
                    );
                    movieRows.push(movieRow);
                }
            }
            this.setState({
                movieData: movie.Search,
            });
        })
        .catch(err => {
            console.log(err);
        });
    };

    render() {
        console.log(this.state)

        const { movieTitle, movieData, nomineeList, isNominee } = this.state;
        const { fetchMovieData, handleMovieTitleChange } = this;

        return (
            <div>
                <form onSubmit={fetchMovieData}>
                    <input
                        value={movieTitle}
                        name="movie"
                        type='text'
                        placeholder='Search for movie..'
                        onChange={handleMovieTitleChange}
                    />
                    <button>Subit</button>
                </form>
                    
                <div>
                    <MovieResults 
                        movieData={movieData} 
                        isNomineee={isNominee} 
                        nomineeLIst={nomineeList} 
                    />
                </div>
                <div>
                    <MovieRow 
                        nomineeLIst={nomineeList}
                        isNomineee={isNominee} 
                    />
                    
                </div>
            </div>
        )
    }
}
