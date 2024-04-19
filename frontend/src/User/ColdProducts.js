import React, { useEffect, useRef, useState } from 'react';
import '../CSS/headStyle.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function ColdProducts() {
  const { addToCart } = useCart();
  const coldProductsRef = useRef(); 
  const [data, setData] = useState([]);
  const [searchbar, setSearchbar] = useState("");

  // CREATE Cold producers
  var fetchcoldpro = async () => {
    var response = await fetch("http://localhost:5001/showcoldpro");
    var value = await response.json();
    setData(value);
  };

  useEffect(() => {
    fetchcoldpro();
  }, []);

  // Function to handle Search Bar
  const handlesearch = (e) => {
    const { value } = e.target;
    setSearchbar(value);
  };

  const InputFieldname = data.filter((item) => item.tital.toLowerCase().includes(searchbar.toLowerCase()));

  const handleAddToCart = (item) => {
    addToCart(item);
  };
  return (
    <div  ref={coldProductsRef}>
      <div className='container'>
        <div id='mainhead'>
          <div id='topdicname1'>
            <p id='hedtextmain1'>Just For U!</p>
          </div>
          <div id='SERACHID'>
            
              <form className="form-inline my-2 my-lg-0">
                <input onChange={handlesearch} className="form-control" type="search" placeholder="Search" aria-label="Search" />
              </form>
         
          </div>
        </div>
      </div>
      <div className='container' id='maincarddiv'>
          <div className='row'>
            {InputFieldname.map((item) => (
              <div key={item.id} className='col-md-4 col-6'  id='card1'>
                  <div className="card">
                  <img id='imagehotpro'  src={`http://localhost:5001/showcoldpro/${item.image}`} className="card-img-top img-fluid"  />
                    
                    <div id="card-body">
                                    <h5 id="card-title">{item.tital}</h5>
                                    <div id='price'>
                                        <div>
                                        <p>{item.price} </p>
                                        </div>
                                        <div id='mainpkr'> 
                                            <p id='p1pricecut'>{item.pricecut}</p>PKr
                                        </div>
                                    </div>

                                    <button id="addtocartbrn" className="btn btn-primary" onClick={() => handleAddToCart(item)} >
                                        <i class="las la-cart-plus"></i>
                                        <p>Add to Cart</p>
                                    </button>
                                </div>
                  </div>
               
              </div>
            ))}
          </div>
        </div>
    </div>
  );
}

export default ColdProducts;
