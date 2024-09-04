import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Banner from './components/Banner';
import Row from './components/Row';

// Example movie data
const movies = [
  { id: 1, name: 'Movie 1', posterUrl: 'https://image.tmdb.org/t/p/original/yNySAgpAnWmPpYinim9E0tUzJWG.jpg' },
  { id: 2, name: 'Movie 2', posterUrl: 'https://image.tmdb.org/t/p/original/dFQytJBHxcueASNKcv97Ps2mRW0.jpg' },
  { id: 3, name: 'Movie 3', posterUrl: 'https://image.tmdb.org/t/p/original/ctB8RWoK2LHn5skqN4eUWVSvpyM.jpg' },
  { id: 4, name: 'Movie 4', posterUrl: 'https://image.tmdb.org/t/p/original/cDWW5l4NTWtQi9McwevrY3knsTd.jpg' },
];

function App() {
  return (
    <div className="app">
     <Navbar />
      <Banner />
     <Row title="Trending Now" movies={movies} />
      <Row title="Top Rated" movies={movies} />
      <Row title="Action Movies" movies={movies} />
    </div>
);
}

export default App;
