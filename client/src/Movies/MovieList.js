import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
// import MovieCard from './MovieCard'

// function to get Movie data from API using Axios
// Movie data is set to state
// 'movies' state array of objects is mapped over
// passing the data into MovieDetails component
// while also building 'Link' navigations to a custom url to 'movies/{custom}'
// custom is the value of key: id for each item in array
const MovieList = props => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovies(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
        
    }
    
    getMovies();
  }, []);

  
  return (
    <div className="movie-list">
      {movies.map((movie, index) => (
        <Link to={`movies/${movie.id}`} key={index} >
          <MovieDetails key={index} movie={movie} />
        </Link>
      ))}
    </div>
  );
}

// component to create 'card' for each movie, using data passed in from movies array
function MovieDetails({ movie }) {
  const { title, director, metascore, stars } = movie;
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <h3>Actors</h3>
      {stars.map(star => (
        <div key={star} className="movie-star">
          {star}
        </div>
      ))}
    </div>
    // <MovieCard key={movie.id} title={movie.title} director={movie.director} metascore={movie.metascore} stars={movie.stars}></MovieCard>
  );
}

export default MovieList;
