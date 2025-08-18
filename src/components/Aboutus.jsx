import React, { useState } from "react";
import "./Aboutus.css";
import {
  FaCheckCircle,
  FaLifeRing,
  FaPaperPlane,
  FaRocket,
} from "react-icons/fa";

const Aboutus = () => {
  const [activeTab, setActiveTab] = useState("welcome");

  const tabContent = {
    welcome: `Our global virtual hearing solution delivers optimal flexibility and scalability 
              according to requirements. The Global T&T Global Virtual Hearing solution is currently 
              in use in Lagos State, Nigeria's commercial capital, with over 170 high and magistrate courts.`,

    about: `Global T&T New Solutions Limited is an innovative information technology company 
            specializing in Legaltech solutions. We provide our clients with cutting-edge systems, 
            sustainable processes, and forward-thinking strategies that enable them to remain competitive 
            in an ever-evolving business world. Our expertise spans technology implementation, long-term 
            project maintenance, and real-time client support, ensuring our partners can rely on us for 
            every stage of their digital transformation journey.`,
  };

  return (
    <>
      <section className="aboutus text-center py-5">
        <h2 className="aboutus__title">
          ABOUT <span>US</span>
        </h2>
        <div className="aboutus__underline" />
        <p className="aboutus__description">
          Global T&T New Solutions Limited “Global T&T” is an information
          technology Company with focus on Legaltech Solutions. Global T&T New
          Solutions Limited offers innovative solutions that provides relevant
          information to give its clients, businesses, companies and government
          departments a strategic advantage in a competitive business world.
        </p>
        <br />
        <br />
        <p className="aboutus__mission">
          <strong>Our Mission:</strong>{" "}
          <em>
            To empower legal professionals with innovative technology solutions
            that enhance efficiency and accessibility.
          </em>
        </p>
      </section>

      <section className="welcome-section">
        <div className="welcome-section__image">
          <img src="solutions.jpg" alt="Circuit board" />
        </div>

        <div className="aboutus-card">
          <div className="tabs">
            <button
              className={activeTab === "welcome" ? "active" : ""}
              onClick={() => setActiveTab("welcome")}
            >
              WELCOME
            </button>
            <button
              className={activeTab === "about" ? "active" : ""}
              onClick={() => setActiveTab("about")}
            >
              ABOUT US
            </button>
          </div>

          <p className="main-text">{tabContent[activeTab]}</p>

          {activeTab === "welcome" && (
            <div className="features-wrapper">
              <div className="features-grid">
                <div className="feature-card">
                  <FaCheckCircle className="icon" />
                  <div>
                    <h4>Super Technology</h4>
                    <p>
                      We make use of latest technology when providing solutions
                      to our customers.
                    </p>
                  </div>
                </div>

                <div className="feature-card">
                  <FaLifeRing className="icon" />
                  <div>
                    <h4>Live Support</h4>
                    <p>
                      We provide 24/7 live support for solutions already
                      dispatched to our clients.
                    </p>
                  </div>
                </div>

                <div className="feature-card">
                  <FaPaperPlane className="icon" />
                  <div>
                    <h4>Fast Delivery</h4>
                    <p>
                      Contrary to popular belief, we keep to proposed timeframe
                      allowing us meet deadlines.
                    </p>
                  </div>
                </div>

                <div className="feature-card">
                  <FaRocket className="icon" />
                  <div>
                    <h4>Maintenance</h4>
                    <p>
                      We also provide our clients with long term maintenance of
                      already delivered projects/solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Aboutus;
