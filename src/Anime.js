import React from 'react';
import './App.css';
import animeImg1 from './img/anime/anime.jpg';
import animeImg2 from './img/anime/anime2.jpg';
import animeImg3 from './img/anime/anime3.jpg';


const Anime = () => {
    return (
        <div>
          
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Anime</title>
    <link rel="stylesheet" href="r/css/main.css" />
        <h3>
          [<a href="landing">Back</a>]
        </h3>
        <h2>Anime I have seen:</h2>
          <ul>
            <li>
              <a href="r/weathering.html">
              <img height={300} alt="Weathering With You" src={animeImg1} />
              </a>
            </li>
            <li>
              <a href="r/naruto.html">
              <img height={300} alt="Naruto / Shippuden" src={animeImg2} />
              </a>
            </li>
            <li>
              <a href="r/kaito.html">
              <img height={300} alt="Magic Kaito 1412" src={animeImg3} />
              </a>
            </li>
          </ul>
  </div>
    );
};

export default Anime;
