import React from 'react'

import { Route, Routes } from 'react-router';

import Home from '../pages/Home.jsx';
import Details from '../pages/Details/Details.jsx';
import Catalog from '../pages/Catalog.jsx';



const RoutePaths = () => {
  return (
    <Routes>
      <Route 
      path="/:category/search/:keyword"
      element={<Catalog/>}
      />
       <Route 
      path="/:category/id"
      element={<Details/>}
      />
       <Route 
      path="/:category/"
      element={<Catalog/>}
      />
       <Route 
      path="/"
      element={<Home/>}
      />
      
    </Routes>
  )
}

export default RoutePaths;