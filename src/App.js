import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div id="wrapper">
      <Navbar />
      <div className="container-fluid p-0">
        <Home />
        <Skills />
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
