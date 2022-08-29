import React from 'react'
import { OutlineButton } from '../Components/Button/Button.jsx';

import HeroSlide from '../Components/Hero-Slide/Hero-Slide.jsx';
import MovieList from '../Components/MovieList/MovieList.jsx';

import { Link } from 'react-router-dom';

import { category, movieType, tvType } from '../api-configs/tmdbapi.js';





const Home = () => {
  return (
   <>
    <HeroSlide />

    
    
      

      <div className="container">
        <div className="section mb-3">
          <div className="section__header mb-2">
              <h2>Trending</h2>
              <Link to="/movie">
                <OutlineButton className="small">
                  Load More
                </OutlineButton>
              </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular}/>
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
              <h2>Best Rated</h2>
              <Link to="/movie">
                <OutlineButton className="small">
                  Load More
                </OutlineButton>
              </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated}/>
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
              <h2>Trending Series</h2>
              <Link to="/tv">
                <OutlineButton className="small">
                  Load More
                </OutlineButton>
              </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular}/>
        </div>

        <div className="section mb-3">
          <div className="section__header mb-2">
              <h2>Top Series</h2>
              <Link to="/movie">
                <OutlineButton className="small">
                  Load More
                </OutlineButton>
              </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated}/>
        </div>

      </div>
   
   
   
   
   </>
  );
}

export default Home;