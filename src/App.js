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
      isNominee: false
    }
  }
  
  handleChange = (e) => {
    this.setState({ movieTitle: e.target.value})
  }

  addToNomineeList = movie => {
    this.setState(prevState => {
      return {nomineeList: [...prevState.nomineeList, movie], isNominee: true}
    })
    
  }

  deleteFromNomineeList = movie => {
    this.setState(prevState => {
      return {
        nomineeList: prevState.nomineeList.filter(movieEle => movieEle !== movie),
        isNominee: false
      }
    })
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
    console.log(this.state);
    const { movieTitle, movies, isNominee } = this.state;

    return (
      <>
        <Search 
          movieTitle={movieTitle} 
          movies={movies}
          isNominee={isNominee}
          handleChange={this.handleChange} 
          fetchMovieData={this.fetchMovieData}
          addToNomineeList={this.addToNomineeList}
          deleteFromNomineeList={this.deleteFromNomineeList}
        />
      </>
    );
  }
  
}

export default App;
