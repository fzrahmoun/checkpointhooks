import React from 'react'
import {Routes, Route, Link } from "react-router-dom";
import MovieDetails from './MovieDetails';
import MovieList from "./MovieList";

//Movie card component 

function MovieCard({id,title,description,posterURL,rating}) {
  return (
    <div>
       
       <h3> {title} </h3>
       <p> {description} </p>
       <nav><ul> <li><Link to={`/moviedetails/${id}`}>{posterURL}</Link>  </li></ul></nav>
       <p> Rating : {rating}</p>
      
    </div>
    
  )
}

export default MovieCard