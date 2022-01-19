import React from "react";
import CartCounter from "../components/CartCounter";
import Navbar from "../components/Navbar/Navbar";

const Cart = () => {
  return (
    <div>
      <Navbar />
      <div style={{ marginTop: "80px", marginLeft: "600px" }}>
        <h2 style={{ marginLeft: "50px" }}>Cart Items</h2>
      </div>
      <div className="cartbox"></div>
    </div>
  );
};

export default Cart;
