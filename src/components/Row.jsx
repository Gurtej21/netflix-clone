import React from 'react';
import './Row.css';

function Row({ title, movies }) {
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img 
            key={movie.id} 
            className="row__poster"
            src={movie.posterUrl} 
            alt={movie.name} 
          />
        ))}
      </div>
    </div>

 
  );
}

export default Row;
