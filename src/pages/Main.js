import React from "react";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar/Navbar";
const Main = () => {
  return (
    <div>
      <Navbar />
      <Welcome />
      <About />
      <Contact />
    </div>
  );
};

export default Main;
