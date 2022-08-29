import React from 'react'

import { useParams } from 'react-router-dom';

import PageHeader from '../Components/PageHeader/PageHeader';

import { category as cate } from '../api-configs/tmdbapi'
import MovieGrid from '../Components/MovieGrid/MovieGrid';







const Catalog = () => {


  const {category} = useParams();


  return (
    <>
      <PageHeader>
        {
          category === cate.movie ? 'Movies' : 'TV Series'
        }
      </PageHeader>
      <div className="container">
        <div className="section mb-3">
          <MovieGrid category={category}/>

        </div>

      </div>
    
    
    
    
    
    
    </>
  )
}

export default Catalog;