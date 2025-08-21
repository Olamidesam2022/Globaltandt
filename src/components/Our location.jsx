import React from "react";
import { FaHome, FaGoogle, FaPhone } from "react-icons/fa";
import "./Our location.css";

function OurLocation() {
  const cards = [
    {
      icon: <FaPhone />,
      title: "Phone",
      detail: "+2348183467818",
      color: "black-card",
    },
    {
      icon: <FaHome />,
      title: "Office Location",
      detail: "28, Mobolaji Bank Anthony Way, Ikeja, Lagos",
      color: "blue-card",
    },
    {
      icon: <FaGoogle />,
      title: "Corporate Email",
      detail: "admin@globaltandt.com.ng",
      color: "black-card",
    },
  ];

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
        {cards.map((card, index) => (
          <div key={index} className="flip-card">
            <div className={`flip-card-inner ${card.color}`}>
              {/* Front Side */}
              <div className="flip-card-front">
                <div className="icon-circle">{card.icon}</div>
                <h4>{card.title}</h4>
              </div>
              {/* Back Side */}
              <div className="flip-card-back">
                <p>{card.detail}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default OurLocation;
