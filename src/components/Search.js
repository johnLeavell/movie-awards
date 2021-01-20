import React from 'react';

const Search =(props)=> {

    return (
      <div>
        <div>
          <form onSubmit={props.handleSubmit}>
            <label>Search for Movie</label>
            <br />
            <input 
              type='text'
              value={props.input}
              name='movieInput'
              onChange={props.handleChange}
            />
          </form>
        </div>
      </div>
    )
}

export default Search;