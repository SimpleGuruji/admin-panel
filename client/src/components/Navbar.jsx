import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <div className="max-w-[140rem] py-[4.2rem] px-[2.4rem] flex justify-between">
        <div>
          <a href="http://">AK MERN</a>
        </div>

        <nav>
          <ul className="flex gap-[3.2rem]">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/register">Register</NavLink>
            </li>
            <li>
              <NavLink to="/login">Login</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
