import React from 'react';
import Search from './components/Search';

const OMDB_API = process.env.REACT_APP_OMDB_API_KEY;
const URL = `http://www.omdbapi.com/?&apikey=`;

class App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      movieTitle: '',
      movies: [],
      nomineeList: [],
      isNominee: false,
    }
  }

  handleChange = (e) => {
    this.setState({ movieTitle: e.target.value})
  }
  
  toggleIsNominee = () => {
    this.state.isNominee
    ? this.setState({ isNominee: true })
    : this.setState({ isNominee: true });
  }

  fetchMovieData = (e) => {
    e.preventDefault();

    let movieTitle = this.state.movieTitle;

    fetch(URL+OMDB_API+'&s='+movieTitle)
    .then(resp => resp.json())
    .then(movieData => 
      this.setState({
        movies: movieData.Search,
      }))
    .catch(err => console.log(err))
  }

  render(){

    const { movieTitle, movies, isNominee } = this.state;

    return (
      <>
        <Search 
          movieTitle={movieTitle} 
          movies={movies}  
          isNominee={isNominee} 
          handleChange={this.handleChange} 
          fetchMovieData={this.fetchMovieData}
        />
      </>
    );
  }
  
}

export default App;
