import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar/Navbar";
import Requests from "../components/Requests";

const SpecialRequests = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div></div>
      <Requests />
      <div>
        <Contact />
      </div>
    </div>
  );
};

export default SpecialRequests;
