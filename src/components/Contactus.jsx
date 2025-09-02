import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import "./Contactus.css";

const Contact = () => {
  return (
    <>
      <div className="header text-center py-5">
        <h3 className="contact__title">
          Contact <span>Us</span>
        </h3>
        <div className="contact__underline" />
        <p className="contact__description">
          Coordinates for locating us. You can drop us a message here and be
          sure to get a reply from us within 24hrs.
        </p>
      </div>
      <section className="contact-section">
        <div className="contact-container">
          {/* Left: Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" rows="5" required></textarea>

            <button type="submit" className="submit-btn">
              <span>Submit</span>
              <FaPaperPlane className="icon" />
            </button>
          </form>

          {/* Right: Map */}
          <div className="contact-map">
            <iframe
              title="google-map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.810324792941!2d3.358232!3d6.431310!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b92e2fbe3fdb7%3A0xcdd0f3c5e0e2ed7b!2s28%20Mobolaji%20Bank%20Anthony%20Way%2C%20Opebi%2C%20Ikeja%20101233%2C%20Lagos!5e0!3m2!1sen!2sng!4v1693659999999"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
