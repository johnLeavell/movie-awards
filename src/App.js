import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      movieTitle: '',
    }
  }

  searchMovie = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  submitMovie = e => {
    e.preventDefault();

  }

  render(){
    return (
      <div>
      <form onSubmit={this.searchMovie}>
        <label htmlFor='movieTitle'>
          <strong>Search for Movie by Title:</strong>

            <input>
              <input>

              </input>
            </input>
        </label>
      </form>
    
      </div>
    );
  }
  
}

export default App;
