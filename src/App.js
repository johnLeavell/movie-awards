import React from 'react';
import Header from './components/Header';
import SearchMovie from './components/MovieSearch';

class App extends React.Component {
  
  
  render(){
    return (
      <div>
        <Header />
        <SearchMovie />
      </div>
    );
  }
  
}

export default App;
