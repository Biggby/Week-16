import React from 'react';
import './App.css';
import gamingImg1 from './img/gaming/gaming.jpg';
import gamingImg2 from './img/gaming/gaming2.jpg';
import gamingImg3 from './img/gaming/gaming3.jpg';


const Gaming = () => {
    return (
        <div>
          
<meta charSet="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Gaming</title>
<link rel="stylesheet" href="r/css/main.css" />
    <h3>
      [<a href="landing">Back</a>]
    </h3>
    <h2>Games that I have played:</h2>
      <ul>
        <li>
          <a href="r/valorant.html">
          <img height={300} alt="Valorant" src={gamingImg1} />
          </a>
        </li>
        <li>
          <a href="r/rl.html">
          <img height={300} alt="Rocket League" src={gamingImg2} />
          </a>
        </li>
        <li>
          <a href="r/Minecraft">
          <img height={300} alt="Minecraft" src={gamingImg3} />
          </a>
        </li>
      </ul>
  </div>
    );
};

export default Gaming;
