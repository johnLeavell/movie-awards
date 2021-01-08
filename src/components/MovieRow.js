import React, { Component } from 'react';
// import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai';

// const OMDB_API = process.env.REACT_APP_OMDB_API_KEY;
// const url = `http://www.omdbapi.com/?&apikey=`;

export default class MovieRow extends Component {

  constructor(props){
    super(props);
    this.state = {
      isNominee: this.props.isNominee,
      nomineeList: this.props.nomineeList

    }
  }

  // addToNominees = () => {
  //   this.setState({
  //     isNominee: true,
  //   })
    
  // //   const nominatedMovie = `${url}+${OMDB_API}+&i=+this.props.`
  // // }




  render() {
    return (
      <div>
        
      </div>
    )
  }
}
