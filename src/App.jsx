import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Nexttab from "./components/Nexttab";
import OurSolutions from "./components/Our Solutions";
import Aboutus from "./components/Aboutus";
import WhyChooseUs from "./components/WhyChooseUs";
import OurLocation from "./components/Our location";
import Footer from "./components/Footer";
import "./App.css";
import Homepage from "./components/Homepage";
``;
function App() {
  const [started, setStarted] = useState(false);

  return (
    <div>
      {started ? (
        <>
          <Navbar />
          <Herosection />
          <Aboutus />
          <WhyChooseUs />
          <Nexttab />
          <OurSolutions />
          <OurLocation />
          <Footer />
        </>
      ) : (
        <Homepage onStart={() => setStarted(true)} />
      )}
    </div>
  );
}

export default App;
