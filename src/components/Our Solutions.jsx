import React from "react";
import "./Our Solutions.css";
import { FaSearch } from "react-icons/fa";

function OurSolutions() {
  const legalTechProjects = [
    {
      title: "LCIS",
      description:
        "The web platform for the Criminal Justice Information System",
      img: "/lcis.jpg",
    },
    {
      title: "Case Manager",
      description: "Lagos State Ministry of Justice case management system.",
      img: "/images/case-manager.jpg",
    },
    {
      title: "Court Automation",
      description: "Court workflow and case tracking system.",
      img: "/images/court.jpg",
    },
    {
      title: "E-Legal Docs",
      description: "Document automation and e-filing solution.",
      img: "/images/e-docs.jpg",
    },
  ];

  const globalTechProjects = [
    {
      title: "Gravitas Solicitors",
      description: "A web platform for Gravitas Solicitors law firm.",
      img: "/images/gravitas.jpg",
    },
    {
      title: "Tech Hub",
      description: "Global digital solutions for businesses.",
      img: "/images/techhub.jpg",
    },
    {
      title: "AI Analytics",
      description: "Data analytics and AI integration system.",
      img: "/images/ai.jpg",
    },
    {
      title: "Cloud Sync",
      description: "Cloud storage and synchronization solution.",
      img: "/images/cloud.jpg",
    },
  ];

  return (
    <div id="portfolio">
      <h3 className="logo-strip-heading text-center">
        Our <span>Solutions</span>
      </h3>
      <div className="ourSolutions-wrapper">
        <div className="ourSolutions-column">
          <h3 className="ourSolutions-heading">
            Our Legal <span id="spann">Tech Solutions</span>
          </h3>
          <div className="ourSolutions-projects">
            {legalTechProjects.map((project, index) => (
              <div className="ourSolutions-card" key={index}>
                <div className="ourSolutions-image">
                  <img src={project.img} alt={project.title} />
                  <button
                    onClick={() =>
                      (window.location.href = "https://globaltandt.com.ng")
                    }
                  >
                    <div className="ourSolutions-overlay">
                      <FaSearch className="ourSolutions-icon" />
                    </div>
                  </button>
                </div>
                <h5>{project.title}</h5>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="ourSolutions-column">
          <h3 className="ourSolutions-heading">
            Our Global <span id="spann">Tech Solutions</span>
          </h3>
          <div className="ourSolutions-projects">
            {globalTechProjects.map((project, index) => (
              <div className="ourSolutions-card" key={index}>
                <div className="ourSolutions-image">
                  <img src={project.img} alt={project.title} />
                  <button
                    onClick={() =>
                      (window.location.href = "https://globaltandt.com.ng")
                    }
                  >
                    <div className="ourSolutions-overlay">
                      <FaSearch className="ourSolutions-icon" />
                    </div>
                  </button>
                </div>
                <h5>{project.title}</h5>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurSolutions;
