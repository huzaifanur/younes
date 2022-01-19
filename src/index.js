import React from "react";
import Main from "./pages/Main";
import Menu from "./pages/Menu";
import SpecialRequests from "./pages/SpecialRequests";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import './index.css'
import Order from "./pages/Order/Order";
import Cart from "./pages/Cart/Cart";
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
