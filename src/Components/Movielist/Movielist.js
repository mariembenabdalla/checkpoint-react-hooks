import MovieCard from "../MovieCard/MovieCard";
import "./Movielist.css";

const Movielist = ({ filterMovie }) => {
  return (
    <div className="movie-list">
      {filterMovie.map((movie, index) => {
        return <MovieCard movie={movie} index={index} />;
      })}
    </div>
  );
};

export default Movielist;
