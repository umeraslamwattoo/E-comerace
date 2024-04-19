import React  from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function Header() {
  const { cartCount } = useCart();
 
  const handleScrollToColdProducts = () => {
    const coldProductsRef = document.getElementById('COLDPRO'); // Update to match the ID in the UserView component
    console.log(coldProductsRef); // Add this line for debugging
    if (coldProductsRef) {
      coldProductsRef.scrollIntoView({ behavior: 'smooth' });
    }
  };  
  return (
    <div>

<div className='d-flex' id='navmainforfix'>

<nav className="navbar navbar-expand-lg navbar-light ">
  <Link className="navbar-brand" to="/">
    <img id='logo1' src="logo.png" alt="" />
  </Link>
  <button
    className="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <Link className="nav-link" id="navelink" to="#" onClick={handleScrollToColdProducts}>
          Services
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" id='navelink' to="/contectus">
          Help/Contact
        </Link>
      </li>
    </ul>
    <ul className="navbar-nav ">
      <li className="nav-item">
        <Link to="/userlogin" className='nav-link' >
          <button className='btn btn-outline-success'>
            <b><i className="fa-solid fa-user"></i> Login</b>
          </button>
        </Link>
      </li>
      <li className="nav-item">
        <Link to="/usersignup" className='nav-link' >
          <button id='icon1' className='btn btn-outline-warning '>
            <b><i className="fa-solid fa-right-to-bracket"></i> SignUp</b>
          </button>
        </Link>
      </li>
    </ul>
  </div>
</nav>
<div className="btn-group dropleft">
  <div class="dropdown-menu">
  </div>
</div>
<div className='d-flex'>
  <div id='carticons'>
  <Link to="/addtocart">
    <i id="shopingcart" className="fa-solid fa-cart-shopping">
      <span id='spancart' className="cart-count">{cartCount}</span>
    </i>
  </Link>
  </div>
  <div id='idforcount'>
  </div>
</div>
</div>
    </div>
  );
}

export default Header;
