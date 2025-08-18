import React, { useState, useEffect } from "react";
import "./Herosection.css";

const slides = [
  {
    image: "/slide1.jpg",
    text: "Welcome to Global T&T",
    description:
      "We provide top-notch digital and business solutions to help your brand thrive in today’s competitive market.",
  },
  {
    image: "/slide2.jpg",
    text: "We Build Creative Solutions",
    description:
      "From concept to execution, we deliver innovative ideas tailored to your unique needs.",
  },
  {
    image: "/slide3.jpg",
    text: "Your Satisfaction Comes First",
    description:
      "We are committed to exceeding expectations and building long-lasting relationships.",
  },
  {
    image: "/slide4.jpg",
    text: "Let’s Work Together",
    description:
      "Partner with us to bring your vision to life through creative and impactful solutions.",
  },
];

function Herosection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [slideIn, setSlideIn] = useState(true);

  const goToNext = () => {
    setFade(false);
    setSlideIn(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
      setFade(true);
      setSlideIn(true);
    }, 100);
  };

  useEffect(() => {
    const interval = setInterval(goToNext, 5000);
    return () => clearInterval(interval);
  }, []);

  const alignClass = currentIndex % 2 === 0 ? "align-left" : "align-right";

  return (
    <div id="home">
      <div
        className={`hero-slide ${fade ? "fade-slide" : ""}`}
        style={{
          backgroundImage: `url(${slides[currentIndex].image})`,
        }}
      >
        <div className={`overlay ${alignClass}`}>
          <div className={`text-content ${slideIn ? "all-slide-in" : ""}`}>
            <h1>{slides[currentIndex].text}</h1>

            <p className="hero-description">
              {slides[currentIndex].description}
            </p>

            <div id="butt" className="hero-buttons">
              <button className="hero1">Contact Us</button>
              <button className="hero2">About Us</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Herosection;
