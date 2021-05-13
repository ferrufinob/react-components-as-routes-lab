import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const links = {
    color: "white",
    background: "grey",
    textDecoration: "none",
    width: "100px",
    padding: "12px",
  };
  return (
    <div className="navbar">
      <NavLink
        to="/"
        exact
        style={links}
        activeStyle={{ background: "darkgrey" }}
      >
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={links}
        activeStyle={{ background: "darkgrey" }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={links}
        activeStyle={{ background: "darkgrey" }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={links}
        activeStyle={{ background: "darkgrey" }}
      >
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;
