import React from "react";
import "./Nexttab.css";
import { FaCode, FaPencilAlt, FaPaperPlane, FaCheck } from "react-icons/fa";

function Services() {
  return (
    <>
      <div className="logo-strip-wrap">
        <h3 className="logo-strip-heading">
          Our <span>Services</span>
        </h3>
      </div>

      <div className="services-section">
        <div className="service-card">
          <FaCode className="service-icon" />
          <h3>Software Design & Development</h3>
          <div className="underline"></div>
          <p>We offer our various partners software designs and development.</p>
        </div>

        <div className="service-card">
          <FaPencilAlt className="service-icon" />
          <h3>Web Developments</h3>
          <div className="underline"></div>
          <p>
            We also develop web applications and e-commerce websites for our
            customers.
          </p>
        </div>

        <div className="service-card">
          <FaPaperPlane className="service-icon" />
          <h3>Maintaining IT Systems</h3>
          <div className="underline"></div>
          <p>
            Various businesses employ our services to oversee their technology
            systems.
          </p>
        </div>

        <div className="service-card">
          <FaCheck className="service-icon" />
          <h3>Solving IT Problems</h3>
          <div className="underline"></div>
          <p>
            Whether software or hardware, we are depended upon to troubleshoot
            and resolve issues.
          </p>
        </div>
      </div>
    </>
  );
}

export default Services;
