import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between px-7 lg:px-0 lg:justify-around items-center py-5 bg-orange-400 sm:bg-white">
      <div>
        <h1 className="font-extrabold lg:font-semibold text-3xl md:text-5xl">
          Comuner.
        </h1>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Link to="/login">
          <button className="">Sign In</button>
        </Link>
        <button className="bg-neutral-800 text-white px-4 py-2 rounded-md">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
