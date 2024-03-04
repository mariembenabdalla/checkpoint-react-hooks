import React from "react";
import { useParams } from "react-router-dom";

const MovieDetails = ({ movieData }) => {
  const { movieId } = useParams();
  const parsedMovieId = parseFloat(movieId);

  const findsMovie = movieData.find((movie) => movie.id === parsedMovieId);
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <h1>{findsMovie.title}</h1>
      <img src={findsMovie.posterUrl} alt="" />
      <p>{findsMovie.description}</p>
      <p>{findsMovie.rating}</p>
    </div>
  );
};

export default MovieDetails;
