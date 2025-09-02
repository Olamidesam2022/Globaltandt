import React, { useState, useEffect, useRef } from "react";
import "./WhyChooseUs.css";

const Counter = ({ end, duration, startCount }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCount) return; // don’t start until section is visible

    let start = 0;
    const increment = end / (duration * 60); // 60fps
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [end, duration, startCount]);

  return <span>{count.toLocaleString()}</span>;
};

const WhyChooseUs = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 43, label: "PROJECT COMPLETE" },
    { number: 13300, label: "SUPPORT TICKET" },
    { number: 50, label: "GLOBAL CLIENTS" },
    { number: 24, label: "LIVE SUPPORT (HOURS)" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // trigger only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div id="differences">
      <section className="why-choose-us" ref={sectionRef}>
        <div className="why-left">
          <h2>WHY CHOOSE US</h2>
          <p>
            Not many people are fully aware of the nature of the services
            offered by us on a day-to-day basis. Below are some of the reasons
            why people choose us.
          </p>
          <div className="stats-container">
            {stats.map((item, index) => (
              <div key={index} className="stat-box">
                <h3>
                  <Counter
                    end={item.number}
                    duration={2.5}
                    startCount={startCount}
                  />
                </h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="why-right">
          <img src="/why.jpg" alt="Team working on technology" loading="lazy" />
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
