import React from "react";
import { Link } from "react-router-dom";
import "./SustainableGoals.css";
export const SustainableGoals = () => {
  return (
    <div className="sustainable-goals-container">
      <h2>
        The 17 sustainable development goals (SDGs) to transform our world:
      </h2>
      <div className="all-goals">
        <Link to="no-poverty">GOAL 1: No Poverty</Link>
        <Link to="zero-hunger">GOAL 2: Zero Hunger</Link>
        <Link to="good-health-and-well-being">
          GOAL 3: Good Health and Well-being
        </Link>
        <Link to="quality-education">GOAL 4: Quality Education</Link>
        <Link to="gender-Equality">GOAL 5: Gender Equality</Link>
        <Link to="clean-Water-and-sanitation">
          GOAL 6: Clean Water and Sanitation
        </Link>
        <Link to="affordable-and-clean-energy">
          GOAL 7: Affordable and Clean Energy
        </Link>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2960092495542092"
     crossorigin="anonymous"></script>
        <Link to="decent-work-and-economic-growth">
          GOAL 8: Decent Work and Economic Growth
        </Link>
        <Link to="industry-innovation-and-infrastructure">
          GOAL 9: Industry, Innovation and Infrastructure
        </Link>
        <Link to="reduced-inequality">GOAL 10: Reduced Inequality</Link>
        <Link to="sustainable-cities-and-communities">
          GOAL 11: Sustainable Cities and Communities
        </Link>
        <Link to="responsible-consumption-and-production">
          GOAL 12: Responsible Consumption and Production
        </Link>
        <Link to="climate-action">GOAL 13: Climate Action</Link>
        <Link to="life-below-water">GOAL 14: Life Below Water</Link>
        <Link to="life-on-land">GOAL 15: Life on Land</Link>
        <Link to="peace-and-justice-strong-institutions">
          GOAL 16: Peace and Justice Strong Institutions
        </Link>
        <Link to="partnerships-to-schieve-the-goal">
          GOAL 17: Partnerships to achieve the Goal
        </Link>
      </div>
    </div>
  );
};
