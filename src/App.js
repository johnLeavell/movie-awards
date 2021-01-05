import React from 'react';
import Header from './components/Header';
import SearchMovie from './components/SearchMovie';

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
