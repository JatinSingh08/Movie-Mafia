import './App.css';
import { useState } from 'react';
const movieList = {

  "Comedy": [
    {
      Name: "Dhamaal",
      image: "https://wallpapercave.com/w/wp7805336.jpg",
      youtube: "https://youtu.be/6xdRuJoEMoU"
    },
    {
      Name: "Bhool Bhulaiyaa",
      image: "https://wallpaperaccess.com/full/8264684.jpg",
      youtube: "hhttps://youtu.be/jzYxbnHHhY4"
    },
    {
      Name: "3 Idiots",
      image: "https://wallpaperaccess.com/full/3574479.jpg",
      youtube: "https://youtu.be/K0eDlFX9GMc"
    }
  ],
  
  "Romantic": [
    {
      Name: "Student Of the year",
      image: "https://wallpapercave.com/wp/wp8202310.jpg",
      youtube: "https://youtu.be/tQ0mzXRk-oM"
    },
    {
      Name: "Yeh Jawaani Hai Deewani",
      image: "https://wallpapercave.com/wp/wp6754719.jpg",
      youtube: "https://youtu.be/Rbp2XUSeUNE"
    },
    {
      Name: "Ae Dil Hai Mushkil",
      image: "https://wallpapercave.com/wp/wp6584723.jpg",
      youtube: "https://youtu.be/Z_PODraXg4E"
    }
  ],

  "Action": [
    {
      Name: "War",
      image: "https://wallpaperaccess.com/full/2330954.jpg",
      youtube: "https://youtu.be/tQ0mzXRk-oM"
    },
    {
      Name: "Don 2",
      image: "https://wallpapercave.com/wp/wp2864025.jpg",
      youtube: "https://youtu.be/_X5w-6PqoZ0"
    },
    {
      Name: "Agent Vinod",
      image: "https://stat1.bollywoodhungama.in/wp-content/uploads/2016/03/51193699.jpg",
      youtube: "https://youtu.be/g7pbAIqUR4M"
    }
  ],


  

  "Thriller": [
    {
      Name: "Drishyam",
      image: "https://i.pinimg.com/236x/96/df/27/96df272c04f944b7d90eb92bf9731d3b.jpg",
      youtube: "https://youtu.be/AuuX2j14NBg"
    },
    {
      Name: "NH 10",
      image: "https://www.filmibeat.com/ph-big/2015/02/_14231218990.jpg",
      youtube: "https://youtu.be/A9icNqWlylw"
    },
    {
      Name: "Talvar",
      image: "https://wallpapercave.com/wp/wp6987085.jpg",
      youtube: "https://youtu.be/aQNMsw8Ljjc"
    }
  ]

}
function App() {

  const [movieName, setMovieName] = useState('Comedy');

  function genreClickHandler(genre) {
    setMovieName(genre);
  }
  return (
    <div className="App">
        <header className='header'>
          <h1 className='heading'>🎬Movie Mafia🍿</h1>
          <nav className='genre'>
            {Object.keys(movieList).map(genre => 
              <li key={genre} className='genre-name' onClick={() => genreClickHandler(genre)}>{genre}</li>
            )}
          </nav>
        </header>

        <div className='divider'></div>
        <h2 className='para'>Click on the image to watch the movie.</h2>

        <main className='container'>
          {movieList[movieName].map(movie => 
            <a className='movie-info' href={movie.youtube} key={movie.number} target="_blank" rel="noreferrer">
              <img src={movie.image} alt={movie.Name} className='movie-image' />
              <span className='movie-name'>{movie.Name}</span>
            </a>
          )}
        </main>
    </div>
  );
}

export default App;


