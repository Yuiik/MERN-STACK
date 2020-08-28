import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <div className="container-fluid p-0">
        <Home />
        <Portfolio />
      </div>
    </React.Fragment>
  );
}

export default App;
