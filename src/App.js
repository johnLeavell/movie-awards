import React from 'react';
import Search from './components/Search';
import MovieList from './components/MovieList';

const OMDB_API = process.env.REACT_APP_OMDB_API_KEY;
const URL = `http://www.omdbapi.com/?&apikey=`;

class App extends React.Component {
  state = {
    input: '',
    movies: []
  }

  handleChange = (e) => {
    this.setState({ input: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let movieTitle = this.state.input;

    fetch(URL+OMDB_API+'&s='+movieTitle)
    .then(resp => resp.json())
    .then(movieData => 
      this.setState({
        movies: movieData.Search,
      }))
    .catch(err => console.log(err))
  }

  render() {
    console.log(this.state);
    const { input, movies } = this.state;

    return (
      <div>
        <Search 
          input={input}
          movies={movies}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <MovieList 
          movies={movies}
        />
      </div>
    )
  }
}

export default App;