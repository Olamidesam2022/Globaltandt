import React from "react";
import "./RotatingCube.css";

function RotatingCube() {
  return (
    <div className="cube-container">
      <div className="cube">
        <div className="face front">Welcome</div>
        <div className="face back">Innovation</div>
        <div className="face right">Quality</div>
        <div className="face left">Support</div>
        <div className="face top">Global T&T</div>
        <div className="face bottom">Let's Grow</div>
      </div>
    </div>
  );
}

export default RotatingCube;
