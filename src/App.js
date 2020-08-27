import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Experience from "./pages/Experience";
import Education from "./pages/Education";
import Skills from "./pages/Skills";
import Interests from "./pages/Interests";
import Awards from "./pages/Awards";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-fluid p-0">
        <Home />
        <Experience />
        <Education />
        <Skills />
        <Interests />
        <Awards />
      </div>
    </React.Fragment>
  );
}

export default App;
