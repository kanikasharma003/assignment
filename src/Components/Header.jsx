import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar">
      <h2>Communion App</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/events">Events</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
};

export default Header;
