import React, { useEffect, useState } from 'react';
import '../CSS/headStyle.css';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function HotPRoducts() {
    const { addToCart } = useCart();


    const [data, setData] = useState([]);
    // Function for Fetch Api
    var fetchhotpro = async () => {
        var response = await fetch("http://localhost:5001/showhotpro");
        var value = await response.json();
        setData(value);
    };


    useEffect(() => {
        fetchhotpro();
    }, []);
    const handleAddToCart = (item) => {
        addToCart(item);
    };
    return (
        <div>


            <div className='container'>
                <div id='mainhead'>
                    <div id='topdicname1'>
                        <p id='hedtextmain1'>HOT-PRODUCT</p> <div id='span1'><i class="fa-solid fa-angles-right"></i></div>
                    </div>
                    <div id='topdicname2'>
                        <p id='hedtextmain2' >Top Sale up to 60% of</p>
                    </div>
                </div>

            </div>
            <div className='container' id='maincarddiv'>
                <div className='row'>
                    {data.map((item) => (
                        <div className='col-md-4 col-6' id='card1'>
                            <div className="card">
                                <img id='imagehotpro' src={`http://localhost:5001/showhotpro/${item.image}`} className="card-img-top img-fluid" alt="..." />
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
    )
}

export default HotPRoducts

