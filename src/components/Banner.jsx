import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <header className="banner">
      <div className="banner__contents">
        <h1 className="banner__title">Movie Title</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          This is a brief description of the movie...
        </h1>
      </div>
      
      <div className="banner--fadeBottom"></div>
      
      
      
      {/* <div className= " Background-img">
        <img
        src='https://gtwallpaper.org/sites/default/files/wallpaper/246844/netflix-background-246844-2224599-6408439.png'
        alt = "background"
        />
</div>  */}

        


    </header>
  );
}

export default Banner;
