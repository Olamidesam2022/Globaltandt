import React, { useEffect, useState } from "react";
import { FaTwitter, FaLinkedinIn, FaGoogle, FaSkype } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src="/logo3.png" alt="Global T&T Logo" />
      </div>

      <h2 className="footer-title">
        GLOBAL <span>T & T</span>
      </h2>

      <div className="footer-socials">
        <a href="#">
          <FaGoogle />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaSkype />
        </a>
        <a href="#">
          <FaLinkedinIn />
        </a>
      </div>

      <p className="footer-copy">
        © Copyright {new Date().getFullYear()} 💙 Global T&T New Solutions Ltd.
      </p>

      {/* scroll to top button */}
      {showScroll && (
        <button
          id="scrollTopBtn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </button>
      )}
    </footer>
  );
};

export default Footer;
