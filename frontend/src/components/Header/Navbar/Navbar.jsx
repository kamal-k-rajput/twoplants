import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to="/">Homepage</Link>

      <span className="article-read-notification" style={{ color: "yellow" }}>
        Read an article help us to plant a tree as well as help you to improve
        yourself
      </span>
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
