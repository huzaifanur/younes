// import React from 'react'
// import styles from '../styles//Navbar.css'
// import cart from '../images/cart.jpg'

// export default function Navbar() {
  //   return (
    //     <nav>
    //       <ul className="list">
    //       
    //      
    //           
    //           <a href='/SpecialRequests'><li className="items">Special Requests </li></a>
    //           <a href='/Cart'> <li className="items"><img src={cart} width={'25px'} />Cart</li></a>
    //         </ul>
    //     </nav>
    //   )
    
    // }
    
    import logowood from '../../images/logowood.jpeg'
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
        <a href="/" className="logo-link" aria-label="Main" ><img src={logowood} width={85} alt="" className="logo-image" /></a>
        </div>
        <div classname="center">
         <span className='logo'>
            Yunes
           
           </span>
          </div>
        <div className="right">
          <div className="menu-item">
          <a href='/Menu'>Menu</a>
          </div>
          <div className="menu-item">
          <a href='/Menu'>Orders</a>
          </div><div className="menu-item">
          <a href='/Menu'>Special Requests</a>
          </div><div className="menu-item">
          <a href='/Menu'>Cart</a>
          </div>
          <div className="menu-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
