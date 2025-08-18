import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Navbar.css";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top py-3">
      <div className="container-fluid">
        <div className="d-flex flex-column align-items-center me-3">
          <img src="/logo3.png" alt="Logo" className="navbar-logo" />
        </div>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav mx-auto gap-3">
            <li className="nav-item">
              <a className="nav-link" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/Aboutus.jsx">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#differences">
                Why Choose Us?
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                Our Solutions
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>

          <div className="d-lg-flex justify-content-lg-end mt-3 mt-lg-0 gap-3 navbar-social">
            <a
              href="https://twitter.com"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://linkedin.com"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://whatsapp.com"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
