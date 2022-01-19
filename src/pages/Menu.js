import React from "react";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar/Navbar";
import YMB from "../images/YMB.jpg";
const Menu = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div
        className="menuhead"
        style={{ backgroundColor: "rgba(211, 11, 11, 0.623)" }}
      >
        <h1 style={{ marginTop: "80px", textAlign: "center" }}>Menu</h1>
      </div>
      <img src={YMB} />
      <div className="menubody" style={{ textAlign: "center" }}>
        <div className="Breads">
          {" "}
          <h2>
            <i> Breads</i>
          </h2>
          <p>
            Pita Bread
            <br />
            Brown Pita Bread
            <br />
            Markuk
            <br />
            Tannour
            <br />
            Oat Bread
            <br />
            Whole Grain Bread
            <br />
            Wheat Bread
            <br />
            Corn Bread
            <br />
            Baguette
            <br />
            Iraqi Sammoon
            <br />
            Pain au lait
            <br />
            White Bread Loaf
            <br />
            Brown Bread Loaf
            <br />
            Burger Buns
            <br />
            Ciabatta
            <br />
            Focaccia
          </p>
        </div>
        <div className="Cakes">
          {" "}
          <h2>
            <i>Cakes</i>
          </h2>
          <p>
            Loaf Cake (Chocolate, Vanilla)
            <br />
            Fuit Filled Layered Cake
            <br />
            Chocolate Cortina Cake
            <br />
            Cupcake (Chocolate, Vanilla)
            <br />
            Mini-cake/Cake pieces
          </p>
        </div>
        <div className="Pasteries">
          {" "}
          <h2>
            <i>Pasteries</i>
          </h2>
          <p>
            Petits Fours
            <br />
            Fuit Filled Layered Cake
            <br />
            Cupcake (Chocolate, Vanilla)
            <br />
            Mini-cake/Cake pieces
            <br />
            Croissant
            <br />
            Donut/Long John
            <br />
            Sablet
            <br />
            Eclairs
            <br />
            Choux
            <br />
            Pies (Cheese, Thyme, Spinach, Meat)
          </p>
        </div>
        <div className="ArabSweets">
          {" "}
          <h2>Arab Sweets</h2>
          <p>
            Baklawa
            <br />
            Maddat (Ashta/ Dates/ Nuts)
            <br />
            Shaabiyat
            <br />
            Sfouf
            <br />
            Mafrouka
            <br />
            Nammoura
            <br />
            Mshabak
            <br />
            Floaties
            <br />
            Katayef
            <br />
            Cheese Rolls
            <br />
            Kunafa
          </p>
        </div>
        <div className="Manakeesh">
          {" "}
          <h2>
            <i>Manakeesh</i>
          </h2>
          <p>
            Cheese
            <br />
            Thyme
            <br />
            Cocktail
            <br />
            Keshk
            <br />
            Harhoura
            <br />
            Spinach
            <br />
            Meat
            <br />
            Cheese and Mortadella
            <br />
            Cheese and Sausage
            <br />
            Cheese and Corn
            <br />
            Wide Spread Cheese
            <br />
            Wide Spread Thyme
            <br />
            Cascaval
            <br />
            Thyme and Vegetables
            <br />
            Jrish(Cheese, Thyme)
          </p>
        </div>
        <div className="Pizza">
          {" "}
          <h2>
            <i>Pizza</i>
          </h2>
          <p>
            Cheese
            <br />
            Vegetables
            <br />
            Pepperoni
            <br />
            Sausage
            <br />
            Marguerita
          </p>
        </div>
        <div className="Snacks">
          {" "}
          <h2>
            <i>Snacks</i>
          </h2>
          <p>
            Toasted Flavored bits
            <br />
            Thyme sticks
          </p>
        </div>

        <div className="SeasonalSpecials">
          {" "}
          <h2>
            <i>Seasonal Specials</i>
          </h2>
          <p>
            Ice Cream
            <br />
            Veakentine's Day Cakes
            <br />
            Christmas Cakes
            <br />
            New Year's Cakes
            <br />
            Mother's Day Cakes
            <br />
            Father's Day Cakes
            <br />
            Kaak al Abbas
            <br />
            Mashatih
          </p>
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default Menu;
