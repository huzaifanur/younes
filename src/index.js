import React from "react";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import Order from "./pages/Order";
import SpecialRequests from "./pages/SpecialRequests";
import Cart from "./pages/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import './index.css'
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Menu" element={<Menu />}></Route>
          <Route path="/SpecialRequests" element={<SpecialRequests />}></Route>
          <Route path="/Order" element={<Order />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
