import React from "react";
import Product from "../components/Product";
import data from "../components/data";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar/Navbar";

export default function Order(props) {
  return (
    <main className="block col-2">
      <h2>Products</h2>
      <Navbar />
      <div className="row"></div>
      <div>
        <Contact />
      </div>
    </main>
  );
}
