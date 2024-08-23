import React from 'react';
import './App.css';

const HomePage = () => {
    return (
        <div>
            
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta content="Basic Music Portfolio." property="og:description" />
  <title>Media Portfolio</title>
  <link rel="stylesheet" href="./css/main.css" />
  <link rel="heart icon" href="./img/heart.ico" />
  <h1>Portfolio of media I like.</h1>
  <h2>Menu:</h2>
  <ul>
    <li>
      <a href="Gaming">
      <i className="fa-solid fa-gamepad"/>
        Games
      </a>
    </li>
    <li>
      <a href="Music">
        <i className="fa-solid fa-music" />
        Music
      </a>
    </li>
    <li>
      <a href="Anime">
        <i className="fa-solid fa-video" />
        Anime
      </a>
    </li>
  </ul>
  <table>
    <tbody>
      <tr>
        <th>Gaming</th>
        <td>3</td>
      </tr>
      <tr>
        <th>Music</th>
        <td>3</td>
      </tr>
      <tr>
        <th>Anime</th>
        <td>3</td>
      </tr>
    </tbody>
  </table>
  <form>
    <label htmlFor="Joke">Funny Joke:</label>
    <br />
    <input type="text " id="text" name="Funny Joke" />
    <br />
    <label htmlFor="Answer">Answer:</label>
    <br />
    <input type="answer" id="Answer" name="Answer" />
    <br />
    <input type="[submit]" defaultValue="Submit" readOnly="" />
  </form>
        </div>
    );
};

export default HomePage;
