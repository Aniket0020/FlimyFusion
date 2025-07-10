function MovieCard({
  movieObj,
  poster_path,
  name,
  AddToWatchList,
  RemoveWatchList,
  watchlist,
}) {
  function doesContain(movieObj) {
    for (let i = 0; i < watchlist.length; i++) {
      if (watchlist[i].id === movieObj.id) {
        return true;
      }
    }
    return false;
  }

  return (
    <div
      className="h-[40vh] w-[200px]  rounded-xl  bg-center bg-cover hover:scale-110 duration-300  flex flex-col justify-between items-end my-4"
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${poster_path})`,
      }}
    >
      {doesContain(movieObj) ? (
        <div
          onClick={() => RemoveWatchList(movieObj)}
          className=" flex justify-center items-center m-2 h-8 w-8 hover:cursor-pointer bg-gray-900/60 rounded-lg text-green-500 font-bold"
        >
          {/* &#10060; */}&#x2713;
        </div>
      ) : (
        <div
          onClick={() => AddToWatchList(movieObj)}
          className=" flex justify-center items-center m-2 h-8 w-8 hover:cursor-pointer bg-gray-900/60 rounded-lg"
        >
          &#128150;
        </div>
      )}

      <div className="text-white text-xl text-center w-full p-2 bg-gray-900/60 rounded-b-lg ">
        {name}
      </div>
    </div>
  );
}

export default MovieCard;
