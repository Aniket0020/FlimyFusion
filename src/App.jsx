import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Movies from "./components/Movies";
import Watchlist from "./components/Watchlist";

import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router";



const App = () => {

  let [watchlist, setWatchList] = useState([]);


  let AddToWatchlist = (movieObj) => {
    let NewWatchList = [...watchlist, movieObj];
    localStorage.setItem('movies', JSON.stringify(NewWatchList))
    setWatchList(NewWatchList)
    console.log(NewWatchList);
  }

  let RemoveWatchList = (moviesObj) => {
    let filteredWatchlist = watchlist.filter((movie) => {
      return movie.id !== moviesObj.id
    })
    setWatchList(filteredWatchlist)
    localStorage.setItem('movies', JSON.stringify(filteredWatchlist))
  }


  useEffect(() => {
    let moviesFromLocalStorage = localStorage.getItem('movies')
    if (!moviesFromLocalStorage) {
      return
    }
    setWatchList(JSON.parse(moviesFromLocalStorage))

  }, [])

  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route
            path="/FlimyFusion"
            element={
              <>
                {/* <Banner /> */}
                <Movies watchlist={watchlist} AddToWatchList={AddToWatchlist} RemoveWatchList={RemoveWatchList} />
              </>
            }
          />
          <Route path="/Watchlist" element={<Watchlist watchlist={watchlist} setWatchList={setWatchList} RemoveWatchList={RemoveWatchList} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
