import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import MovieCard from './MovieCard'

// component to render each 'card' for each movie
// using the 'match' props feature of react-router, grab the id from the params of the component
// use that id to make a API call using dynamic url to specific displayed movie
// using the useState hook, set the state of movie, to that of the data received from API
// return a component displaying movie data

const Movie = (props) => {
  const [movie, setMovie] = useState(null);
  
 
  useEffect(() => {
    const id = props.match.params.id;
    // change ^^^ that line and grab the id from the URL
    // You will NEED to add a dependency array to this effect hook

       axios
        .get(`http://localhost:5000/api/movies/${id}`)
        .then(response => {
          setMovie(response.data);
          console.log('movie.js api call:', response.data)
        })
        .catch(error => {
          console.error(error);
        });
        
  },[]);
  
  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = () => {
  //   const addToSavedList = props.addToSavedList;
  //   addToSavedList(movie)
  // }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  return (
    <div className="save-wrapper">
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
      <div className="save-button">Save</div>
    </div>
    // <MovieCard key={movie.id} title={movie.title} director={movie.director} metascore={movie.metascore} stars={movie.stars}></MovieCard>
  );
}

export default Movie;
