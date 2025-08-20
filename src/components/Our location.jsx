import React from "react";
import { FaHome, FaGoogle, FaPhone } from "react-icons/fa";
import "./Our location.css";

function OurLocation() {
  return (
    <>
      <section className="location text-center py-5">
        <h3 className="location__title">
          Our <span id="span">Location</span>
        </h3>
        <div className="location__underline" />
        <p className="location__description">
          We are located at 28, Mobolaji Bank Anthony Way, Ikeja, Lagos. Feel
          free to reach out to us through the contact details below.
        </p>
        <br />
        <br />
      </section>
      <div className="cards-container">
        <div className="card black-card">
          <div className="icon-circle">
            <FaPhone />
          </div>
          <h4>Phone</h4>
          <p>+2348183467818</p>
        </div>
        <div className="card blue-card">
          <div className="icon-circle">
            <FaHome />
          </div>
          <h4>Office Location</h4>
          <p>28, Mobolaji Bank Anthony Way, Ikeja,Lagos</p>
        </div>
        <div className="card black-card">
          <div className="icon-circle">
            <FaGoogle />
          </div>
          <h4>Corporate Email</h4>
          <p>admin@globaltandt.com.ng</p>
        </div>
      </div>
    </>
  );
}

export default OurLocation;
