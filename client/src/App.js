import React, { useState } from 'react';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList'
import Movie from './Movies/Movie'
import { Route } from "react-router-dom"


const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      {/* <div>Replace this Div with your Routes</div> */}
      <Route path="/" exact component={MovieList} />
      <Route path="/movies/id" component={Movie} />
      {/* <Route path={`/Movies/1`} component={Movie} /> */}

    </div>
  );
};

export default App;
