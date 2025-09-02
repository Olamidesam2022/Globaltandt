import React, { useRef, useState, useEffect } from "react";
import CountUp from "react-countup";
import "./WhyChooseUs.css";

const WhyChooseUs = () => {
  const [startCount, setStartCount] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { number: 43, label: "PROJECT COMPLETE" },
    { number: 13300, label: "SUPPORT TICKET" },
    { number: 50, label: "GLOBAL CLIENTS" },
    { number: 24, label: "LIVE SUPPORT (HOURS)" }, // replaced NaN
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStartCount(true);
          observer.disconnect();
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
                  {startCount ? (
                    <CountUp
                      start={0}
                      end={item.number}
                      duration={2.5}
                      separator=","
                    />
                  ) : (
                    "0"
                  )}
                </h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="why-right">
          <img src="/why.jpg" alt="Tech background" />
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;
