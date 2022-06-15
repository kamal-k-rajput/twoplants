import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">Homepage</Link>
      <Link to="/quotes">quotes</Link>
      <Link to="/articles">Article</Link>
      <div>
        <button>Signup</button>
        <button>Login</button>
        <button>Donate</button>
      </div>
    </div>
  );
};
