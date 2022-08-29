import React from 'react'

import { Link } from 'react-router-dom';

import './MovieCard.scss';
import Button from '../Button/Button.jsx';


import { category } from '../../api-configs/tmdbapi';
import apiConfig from '../../api-configs/apiconfig';


const MovieCard = props => {

  const item =  props.item;
  
  const link = '/' + category[props.category] + '/' + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
         <div className="movie-card" style={{backgroundImage: `url(${bg})`}}>
            <Button>
                <i className="bx bx-play"></i>
            </Button>

        </div>
        <h3>
            {
                item.title || item.name
            }
        </h3>
    
    </Link>
  )
}

export default MovieCard;