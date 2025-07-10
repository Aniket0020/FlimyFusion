// import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import MovieCard from "./MovieCard";
import axios from "axios";
import Pagination from "./Pagination"


const Movies = ({ AddToWatchList, RemoveWatchList, watchlist }) => {
  const [movies, setMovies] = useState([]);
  const [pageNo, setPageNo] = useState(1)

 const API_KEY = process.env.REACT_APP_TMDB_API_KEY;


  const handlePrev = () => {
    if (pageNo === 1) {
      setPageNo(pageNo)
    }
    else {
      setPageNo(pageNo - 1)
    }
  }

  const handleNext = () => {
    setPageNo(pageNo + 1)
  }

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${pageNo}`
      )
      .then(function (res) {
        setMovies(res.data.results);
      });
  }, [pageNo]);


  return (
    <div className="p-5">
      <div className="text-2xl font-bold m-5 text-center ">Trending Movies</div>

      <div className="flex justify-around flex-wrap gap-2 ">
        {movies.map((movieObj) => {
          return (
            <MovieCard
              key={movieObj.id}
              movieObj={movieObj}
              poster_path={movieObj.poster_path}
              name={movieObj.original_title}
              AddToWatchList={AddToWatchList}
              RemoveWatchList={RemoveWatchList}
              watchlist={watchlist}

            />
          );
        })}
      </div>
      <Pagination pageNo={pageNo} handleNext={handleNext} handlePrev={handlePrev} />
    </div>
  );
};

export default Movies;
