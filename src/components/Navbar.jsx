// import React from 'react'
import logo from "../logo/Logo.png";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="flex border space-x-8 items-center pl-5 py-4 ">
      <img className="w-[30px]" src={logo} alt="" />
      <Link className=" text-2xl" to="/">
        Movies
      </Link>
      <Link className=" text-2xl" to="/Watchlist">
        Watchlist
      </Link>
    </div>
  );
};

export default Navbar;
