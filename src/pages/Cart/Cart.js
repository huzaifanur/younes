import "./cart.css";
import Navbar from "../../components/Navbar/Navbar";

const Cart = () => {
  const cart = [
    { id: "1", name: "Pita Bread", price: 12000, image: "", quantity: 1 },
    { id: "2", name: "Pita Bread", price: 12000, image: "", quantity: 1 },
  ];
  return (
    <>
      <Navbar />
      <div className="cart-container">
        <div className="cart-Wrapper">
          <h1 className="cart-Title">YOUR BAG</h1>
          <div className="cart-Top">
            <button className="cart-TopButton">CONTINUE SHOPPING</button>
            <div className="cart-TopTexts">
              <div className="cart-TopText">Shopping Bag(2)</div>
              <div className="cart-TopText">Your Wishlist (0)</div>
            </div>
            <div className="cart-TopButton" type="filled">
              CHECKOUT NOW
            </div>
          </div>
          <div className="cart-Bottom">
            <div className="cart-Info">
              {cart.map((product) => (
                <div key={product.id} className="cart-Product">
                  <div className="cart-ProductDetail">
                    <img
                      className="cart-Image"
                      src="https://images.pexels.com/photos/209206/pexels-photo-209206.jpeg?cs=srgb&dl=pexels-pixabay-209206.jpg&fm=jpg"
                      alt=""
                    />
                    <div className="cart-Details">
                      <span className="cart-ProductName">
                        <b>Product:</b> {product.name}
                      </span>
                    </div>
                  </div>
                  <div className="cart-PriceDetail">
                    <div className="cart-ProductAmountContainer">
                      {/* <Add /> */}
                      <div className="cart-ProductAmount">
                        <b>Qunatity:</b>
                        {product.quantity}
                      </div>
                      {/* <Remove /> */}
                    </div>
                    <div className="cart-ProductPrice">
                      L.L {product.price * product.quantity}
                    </div>
                  </div>
                </div>
              ))}

              <hr className="cart-Hr" />
            </div>
            <div className="cart-Summary">
              <h1 className="cart-SummaryTitle">ORDER SUMMARY</h1>
              <div className="cart-SummaryItem">
                <span>Subtotal</span>
                <span>$ {cart.total}</span>
              </div>

              <div className="cart-SummaryItem">
                <span>Total</span>
                <span>$ {cart.total}</span>
              </div>

              <button className="cart-Button">CHECKOUT NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
