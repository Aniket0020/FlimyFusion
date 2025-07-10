// import React from 'react'

import { useEffect, useState } from "react";
import genre from "../Assets/genere";

const Watchlist = ({ watchlist, setWatchList, RemoveWatchList }) => {
  const [Search, setSearch] = useState("");
  const [genreList, SetGenreList] = useState(["All Genres"]);
  const [currGenre, setCurrGenre] = useState("All Genres");

  const handleFilter = (genre) => {
    setCurrGenre(genre);
  };

  const sortInc = () => {
    let increasing = watchlist.sort((movieA, movieB) => {
      return movieA.vote_average - movieB.vote_average;
    });
    setWatchList([...increasing]);
  };

  const sortDec = () => {
    let decreasing = watchlist.sort((movieA, movieB) => {
      return movieB.vote_average - movieA.vote_average;
    });
    setWatchList([...decreasing]);
  };

  useEffect(() => {
    let temp = watchlist.map((movieObj) => {
      return genre[movieObj.genre_ids[0]];
    });
    temp = new Set(temp)
    SetGenreList(["All Genres", ...temp]);
    console.log(temp);
  }, [watchlist]);

  return (
    <>
      <div className="flex gap-4 justify-center flex-wrap m-5">
        {genreList.map((genre) => {
          return (
            <div
              onClick={() => handleFilter(genre)}
              className={
                currGenre == genre
                  ? "flex justify-center h-[3rem] w-[9rem] items-center bg-blue-400 text-white font-bold rounded-lg "
                  : "flex justify-center h-[3rem] w-[9rem] items-center bg-gray-300 text-white font-bold rounded-lg "
              }
            >
              {genre}
            </div>
          );
        })}

      </div>

      <div className=" flex justify-center my-5">
        <input
          onChange={(e) => setSearch(e.target.value)}
          value={Search}
          type="text"
          placeholder="Search Movies"
          className=" bg-gray-300 h-[3rem] w-[18rem] p-4 outline-none"
        />
      </div>

      <div className="rounded-lg overflow-hidden border border-gray-200 m-8">
        <table className="w-full text-center text-gray-600 ">
          <thead className="border-b-2">
            <tr>
              <th>Name</th>
              <th className="flex gap-4 justify-center">
                <div onClick={sortDec}>
                  <i class="fa-solid fa-caret-up"></i>
                </div>
                <div>Ratings</div>
                <div onClick={sortInc}>
                  <i class="fa-solid fa-caret-down"></i>
                </div>
              </th>

              <th>Popularity</th>

              <th>Genere</th>
            </tr>
          </thead>

          <tbody>
            {watchlist.filter((movieObj) => {
              if (currGenre == 'All Genres') {
                return true
              } else {
                return genre[movieObj.genre_ids[0]] == currGenre;
              }
            })
              .filter((movieObj) => {
                return movieObj.title
                  .toLowerCase()
                  .includes(Search.toLowerCase());
              })
              .map((movieObj) => {
                return (
                  <tr className="border-b-2 ">
                    <td className="flex items-center px-6 py-4 ">
                      <img
                        className="h-[6rem] w-[10rem] "
                        src={`https://image.tmdb.org/t/p/original/${movieObj.poster_path}`}
                      />
                      <div className="mx-7">{movieObj.title}</div>
                    </td>

                    <td>{Math.round(movieObj.vote_average * 10) / 10}</td>

                    <td>{movieObj.popularity}</td>

                    <td>{genre[movieObj.genre_ids[0]]}</td>

                    <td onClick={() => RemoveWatchList(movieObj)} className="text-red-700">Delete</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Watchlist;
