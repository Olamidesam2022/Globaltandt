import React, { useState, useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navbarRef = useRef(null);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        isOpen &&
        navbarRef.current &&
        !navbarRef.current.contains(e.target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <nav
      ref={navbarRef}
      className="navbar navbar-expand-lg navbar-dark fixed-top py-3"
    >
      <div className="container-fluid">
        <div className="d-flex flex-column align-items-center me-3">
          <img src="/logo3.png" alt="Logo" className="navbar-logo" />
        </div>

        <button className="navbar-toggler" type="button" onClick={handleToggle}>
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarContent"
        >
          <ul className="navbar-nav mx-auto gap-3">
            {[
              { name: "Home", to: "home" },
              { name: "About Us", to: "about" },
              { name: "Why Choose Us?", to: "differences" },
              { name: "Our Solutions", to: "portfolio" },
              { name: "Contact", to: "contact" },
            ].map((item) => (
              <li className="nav-item" key={item.to}>
                <Link
                  className="nav-link"
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={handleClose}
                >
                  {item.name}
                </Link>
              </li>
            ))}
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
