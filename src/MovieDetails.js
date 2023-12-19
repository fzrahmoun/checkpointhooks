import React from 'react';
import { useParams } from 'react-router-dom';
import movieData from "./data"

function MovieDetails() {

  const { id } = useParams();
  const selectedMovieId = parseInt(id, 10);
  const selectedMovie = movieData.find(movie => movie.id === selectedMovieId);


  if (!selectedMovie) {
    return <div>Error: details not found</div>;
  }

  return (
    <div>
      <p>{selectedMovie.description}</p>
      <p>{selectedMovie.trailer}</p>

    </div>
  );
}

export default MovieDetails;
