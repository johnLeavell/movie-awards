import React from 'react'
import { AiFillHeart, AiOutlineHeart} from 'react-icons/ai'
import './style.css'

const MovieResults = (props) => {
    console.log(props);

    const items = props.movieData.map((item, index) => {
        return(
            <li key={index}>
                <div>
                    {item.Title}
                </div>
                <div>
                    Year Released: {item.Year}
                <br/>
                {
                    !props.isFavorite ? <AiOutlineHeart /> : <AiFillHeart />
                }
                </div>
            </li>
        )
    });
    
          return (
              <div>
                  {<ul>{items}</ul>}
              </div>
          )
    
    }
    export default MovieResults;