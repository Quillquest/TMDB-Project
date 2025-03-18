import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'


const BASE_URL = "https://api.themoviedb.org/3/movie/movie_id?language=en-US";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original/";


const BEARER_TOKEN = import.meta.env.VITE_BEARER_TOKEN;

const MovieDetail = () => {


    const [movie, setMovie] = useState({});

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        // fetch data from API
        function fetchData() {
            fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${BEARER_TOKEN}`,
                },
            }).then(res => res.json())
            .then(data => setMovie(data))
        }

        fetchData();
    }, [])

    console.log(movie);

    

  return (
    <div className='movie__detail'>
      <img className='movie__detail__image' src={IMAGE_BASE_URL + movie.backdrop_path} alt="" />
      <div className="movie__detail__content">
        <div className='movie__detail__title'> <span>Title: </span> {movie.original_title}</div>
        <div className='movie__detail__info'><span>Description: </span>  {movie.overview}</div>
      </div>
      
    </div>
  )
}

export default MovieDetail
