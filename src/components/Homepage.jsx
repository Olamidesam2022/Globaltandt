import React from "react";
import RotatingCube from "./RotatingCube";
import "./Homepage.css";

function HomeIntro({ onStart }) {
  return (
    <div className="home-intro" style={{ backgroundImage: `url("back.jpg")` }}>
      <div className="intro-left">
        <img src="/logo.jpg" alt="Company Logo" className="company-logo" />
        <h1 className="company-name">Global T&T</h1>
        <h2>Welcome to Global T&T</h2>
        <p className="intro-text">
          — where innovation meets quality. We strive to deliver the best
          solutions for your business needs, empowering you to grow and succeed.
        </p>
        <button className="cssbuttons-io-button" onClick={onStart}>
          Get started
          <div className="icon">
            {/* <svg
              height={24}
              width={24}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path
                d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                fill="currentColor"
              />
            </svg> */}
          </div>
        </button>
      </div>
      <div className="intro-right">
        <RotatingCube />
      </div>
    </div>
  );
}

export default HomeIntro;
