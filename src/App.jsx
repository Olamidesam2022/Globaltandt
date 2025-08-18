import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import Nexttab from "./components/Nexttab";
import OurSolutions from "./components/Our Solutions";
import Aboutus from "./components/Aboutus";
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
          <Nexttab />
          <OurSolutions />
        </>
      ) : (
        <Homepage onStart={() => setStarted(true)} />
      )}
    </div>
  );
}

export default App;
