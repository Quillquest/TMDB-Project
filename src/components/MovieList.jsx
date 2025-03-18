import React, {useState, useEffect} from 'react';
import { useNavigate, NavLink } from "react-router";
const BASE_URL = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";

const BEARER_TOKEN = import.meta.env.VITE_BEARER_TOKEN

const MovieList = () => {

    const [movies, setMovies] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const navigation = useNavigate();

  useEffect(() => {
  
      function fetchMovies() {
        fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${pageNumber ? pageNumber : 1}&sort_by=popularity.desc`, 
          {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${BEARER_TOKEN}`,
          }
        }).then(res => res.json())
        .then(data => setMovies(data.results));
      };
  
      fetchMovies();
    }, [pageNumber]);
  
  
    console.log(movies);
  
    return (
      <>
        <h2 className='heading'>movies</h2>
        <input placeholder='Enter a value for page number.' value={pageNumber} className='page_number' type="number" onChange={(e) => setPageNumber(e.target.value)} />
        <div  className="movie__container">
          
          {movies.map((movie, index) => (
            <div onClick={() => navigation(`/movies/${movie.id}`)}  key={movie.id} className="movie__card">
              <img src={IMAGE_BASE_URL + movie.poster_path} alt="" />
            </div>
          ))}
        </div>
      </>
    )
}

export default MovieList;
