import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './Components/Header/Header.jsx';
import Footer from './Components/Footer/Footer.jsx';

import RoutePaths from './routing/Routes.jsx';

import Home from './pages/Home.jsx';
import Details from './pages/Details/Details';
import Catalog from './pages/Catalog.jsx';






function App() {
  return (

    <>

    <Header />
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
  <Footer />

  </>
  );
}

export default App;
