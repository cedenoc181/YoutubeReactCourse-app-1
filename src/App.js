import './App.css';
import {useEffect, useState} from "react";
import SearchIcon from "./search.svg";
import MovieCard from "./MovieCard.jsx"

// my api key 191e2350

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=191e2350"


const testMovie = {
  "Poster" : 
"https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
"Title" : 
"Batman Begins",
"Type" : 
"movie",
"Year" : 
"2005",
"imdbID" : 
"tt0372784"
}


function App() {

  const [movieData, setMovieData] = useState([]);


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
      const data = await response.json();


      setMovieData(data.Search);
  }

  
  

useEffect(() => {
    searchMovies('batman')
}, []);

  return (
    <div className="app">
        <h1>Moview hub</h1> 
        <div className="search">
            <input 
            placeholder="search for movies"
            value="superman"
            onChange={() => {}}
            />
            <img 
            src={SearchIcon}
            alt="search"
            onClick={() => {}}
            />
        </div>

            {
              movieData.length > 0 
              ?
              (
                <div className="container">
                <MovieCard testMovie={testMovie}/> 
            </div>
              ) : (
                <div className="empty">
                  <h2> No movie found </h2>
                  </div>
              )
            }



       




    </div>
  );
}

export default App;
