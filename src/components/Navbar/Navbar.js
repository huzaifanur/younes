
    import cart from '../../images/cart.jpg'
    import logowood from '../../images/logowood.jpeg'
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="nav-wrapper">
        <div className="nav-left">
        <a href="/" className="nav-logo-link" aria-label="Main" ><img src={logowood} width={85} alt="" className="logo-image" /></a>
        </div>
        <div classname="nav-center">
         <span className='nav-logo'>
            Yunes
           
           </span>
          </div>
        <div className="nav-right">
          <div className="nav-menu-item">
          <a href='/Menu'>Menu</a>
          </div>
          <div className="nav-menu-item">
          <a href='/Order'>Orders</a>
          </div><div className="nav-menu-item">
          <a href='/SpecialRequests"'>Special Requests</a>
          </div><div className="nav-menu-item">
          <a href='/Cart'> <img src={cart} width={'25px'} /> Cart </a>
          </div>
          <div className="nav-menu-item"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
