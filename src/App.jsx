import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NewsDetails from './Pages/NewsDetails';
import NavBar from './Components/NavBar';
import NewsCard from './Components/NewsCard';



function App() {


  return (
    <div className="App">
       <NavBar />
    <>
    <Routes>
      
       <Route path="/" element={<Home />}></Route>
        <Route path="/details/:id" element={<NewsDetails />} />

    </Routes>

    </>
    </div>
  )
}

export default App
