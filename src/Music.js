import React from 'react';
import './App.css';
import musicImg1 from './img/music/music.jpg';
import musicImg2 from './img/music/music2.jpg';
import musicImg3 from './img/music/music3.jpg';


const Music = () => {
    return (
        <div>
          
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Music</title>
    <link rel="stylesheet" href="r/css/main.css" />
        <h3>
          [<a href="landing">Back</a>]
        </h3>
        <h2>Music I have heard:</h2>
          <ul>
            <li>
              <a href="r/cadaver.html">
              <img height={300} alt="Cadaver by Juice WRLD" src={musicImg1} />
              </a>
            </li>
            <li>
              <a href="r/creep.html">
              <img height={300} alt="Creep by Radiohead" src={musicImg2} />
              </a>
            </li>
            <li>
              <a href="r/huh.html">
              <img height={300} alt="huh by Glaive" src={musicImg3} />
              </a>
            </li>
          </ul>
  </div>
    );
};

export default Music;
