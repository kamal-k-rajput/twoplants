import React from "react";
import "./Header.css";
import { Navbar } from "./Navbar/Navbar";
export const Header = () => {
  return (
    <div>
      <div className="header-container">
        <span>News, Stories</span>
        <span>What we do?</span>
        <span>How we do?</span>
        <span>Our Data</span>
        <span>Trees planted:</span>
      </div>
      <Navbar />
    </div>
  );
};
