import React, { useState } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [toogle, setToggle] = useState(false);
  return (
    <header className={`header ${toogle ? "open" : ""} container`}>
      <div className="container">
        <div className="navbar">
          <NavLink to={"/"}>
            <h2>LOGO</h2>
          </NavLink>
          <ul className="navbar__list">
            <li>
              <NavLink className="navbar__link" to={"/"}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to={"/admin"}>
                Admin
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar__link" to={"/register"}>
                Login
              </NavLink>
            </li>
          </ul>
          <div className="header__menu-burgers">
            <button
              className="header__menu"
              id="menu-burger"
              onClick={() => setToggle(!toogle)}
            >
              <span className="header__menu-span"></span>
              <span className="header__menu-span"></span>
              <span className="header__menu-span"></span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
