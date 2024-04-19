import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Footer from './Footer';

function ADDTOCART() {
  const { cartItems, removeFromCart, deleteFromCart, addToCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.qty * item.price, 0);
  const shipment = total > 20000 ? 5000 : 0;
  const grandTotal = total + shipment;


  const Navigate = useNavigate();
  const [sessiondata, setSessiondata] = useState("");

  const getsessiondata = () => {
    setSessiondata(sessionStorage.getItem("firstName"));
  }
  useEffect(() => {
    getsessiondata();
  }, []);

  const onAdd = (item) => {
    addToCart(item);
  };

  const onDelete = (item) => {
    removeFromCart(item);
  };

  const onRemove = (item) => {
    deleteFromCart(item);
  };

  return (
    <div>
      {sessiondata ? (
        <div>
          <nav className="navbar navbar-expand-lg navbar-light " id='logoforaddtocart'>
            <Link className="navbar-brand" to="/">
              <img id='logo1' src="logo.png" alt="" />
            </Link>
          </nav>
         <div id='maindivtotalprice2'>
         <div id='totalpricemaindiv'>
         <div  id='cartbtnmain1'>
                  <div className='d-flex'>
                    <div id='lastprice1'><h4 id='price2cart'>All Product Price :</h4></div>
                    <div id='lastprice2'><h4 id='price2cart'>{total}</h4></div>
                    <div id='lastprice3'> <p id='pkr1'> Pkr.</p></div>
                  </div>
                  <div className='d-flex'>
                    <div id='lastprice1'><h4 id='price2cart'>Shipment Charges :</h4></div>
                    <div id='lastprice2'><h4 id='price2cart'> {shipment}</h4></div>
                    <div id='lastprice3'> <p id='pkr1'> Pkr.</p></div>
                  </div>
                  <div className='d-flex'>
                    <div id='lastprice1'><h4 id='price2cart'>Total Price :</h4></div>
                    <div id='lastprice2'><h4 id='price2cart'> {grandTotal}</h4></div>
                    <div id='lastprice3'> <p id='pkr1'> Pkr.</p></div>
                  </div>
                </div> 
         </div>
          </div>
     
          {cartItems.map((item) => (
            <div className='container' id='lastconaddtocart'>
            <div id='containeraddtocart' >
              <div className="row" id='cartmain1'>
                <div id='cartimagemain' className="col-md-5 col-sm-12"><img id='addtocartimage' src={`https://backendumernode.cyclic.app/showcoldpro/${item.image}`} onError={(e) => { e.target.src = `https://backendumernode.cyclic.app/showhotpro/${item.image}`; }} alt='' /></div>
                <div id='cartdetailmain' className="col-md-7 col-sm-12">
                  <div>
                    <h5>Product Name :</h5>
                    <h6>{item.tital}</h6>
                    <h5>Price  :</h5>
                    <div className='d-flex' id='forprice'><h5>Rs.</h5> <>&nbsp;</><>&nbsp;</><>&nbsp;</><>&nbsp;</> <p id='cartdetailp1'>{item.price}</p>
                    </div>
                    <div className='d-flex'><>&nbsp;</><>&nbsp;</><del>{item.pricecut}</del> <>&nbsp;</><>&nbsp;</><p>-20%</p></div>
                  </div>
                  <div className='row mt-2' id='divforresponsivesize'>
                    <div id='divforsize' className='col-md-3 col-sm-4'><button id='btnsize1' className='btn btn-outline-light'>XS</button></div>
                    <div id='divforsize' className='col-md-3 col-sm-4'><button id='btnsize1' className='btn btn-outline-light'>S</button></div>
                    <div id='divforsize' className='col-md-3 col-sm-4'><button id='btnsize1' className='btn btn-outline-light'>M</button></div>
                    <div id='divforsize' className='col-md-3 col-sm-4'><button id='btnsize1' className='btn btn-outline-light'>L</button></div>
                    <div id='divforsize' className='col-md-3 col-sm-4'><button id='btnsize1' className='btn btn-outline-light'>XL</button></div>
                    <div id='divforsize' className='col-md-3 col-sm-4'><button id='btnsize1' className='btn btn-outline-light'>XXL</button></div>
                  </div>
                </div>
              </div>
              <div className="row" id='cartmain2'>
                
                <div className="col-md-12" id='cartbtnmain2'>
                  <div id='quantitybtn'>
                    <div id='deletebtn'><button onClick={() => onDelete(item)} className='btn btn-outline-danger'><b>-</b></button></div>
                    <div id='qunatityvaluemain'>{item.qty}</div>
                    <div id='addbtn'><button onClick={() => onAdd(item)} className='btn btn-outline-warning'><b>+</b></button></div>
                  </div>
                  <div id='btnbuycartmain'>
                    <button id='btnbuyaddtocart' className='btn btn-outline-light'>BUY NOW</button>
                  </div>
                </div>
              </div>
            </div>
            </div>
          ))}
          
          <div id='addtocartfooter'>
            <Footer/>
          </div>
        </div>
      ) : (Navigate("/userlogin"))
      }
    </div>
  );
}

export default ADDTOCART;
