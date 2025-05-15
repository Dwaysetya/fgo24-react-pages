import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex w-full min-h-[60px] place-content-between bg-cyan-950 opacity-100 items-center fixed top-0 z-50 shadow-md">
      <div className="px-[10%] flex justify-center items-center gap-1">
        <h1 className="text-3xl text-white mask-l-from-neutral-800">
          Raderinc
        </h1>{" "}
        <span className="text-xs self-end py-1 text-white">.com</span>
      </div>
      <ul className="flex flex-row gap-20 px-[10%] ">
        <li>
          <Link to="/">
            <p className="text-white hover:text-amber-300">Home</p>
          </Link>
        </li>
        <li>
          <Link to="/Aboute">
            <p className="text-white hover:text-amber-300">Aboute</p>
          </Link>
        </li>
        <li>
          <Link to="/contactus">
            <p className="text-white hover:text-amber-300">Contact Us</p>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
