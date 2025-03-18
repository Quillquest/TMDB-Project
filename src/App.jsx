import { useState, useEffect } from 'react'
import './App.css'
import MovieList from './components/MovieList';
import { Route, Routes } from 'react-router';
import MovieDetail from './components/MovieDetail';

function App() {

  

  return (
    <>
    <Routes>
      <Route path="/" element={<MovieList />} />
      <Route path="movies/:id" element={<MovieDetail />} />
    </Routes>
    </>
  )
}

export default App
