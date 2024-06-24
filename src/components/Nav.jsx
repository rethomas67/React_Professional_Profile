//import { useState, useEffect } from "react";
// Bringing in the required import from 'react-router-dom'
import { NavLink, Link } from "react-router-dom";
import Navbar from "./UI/Navbar";

export default function Nav() {
  /*const [navActive, setNavActive] = useState(false);
  const toggleNav = () => {
    setNavActive(!navActive);

  };*/
  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <NavLink
          //exact
          key={1}
          className={({ isActive }) => {
            return isActive ? "nav-link text-info " : "nav-link text-light ";
          }}
          to="/"
        >
          About Me
        </NavLink>,
        <NavLink
          key={2}
          className={({ isActive }) => {
            return isActive ? "nav-link text-info" : "nav-link text-light";
          }}
          //selected
          to="portfolio"
        >
          Portfolio
        </NavLink>,
      ]}
    />
  );
}
