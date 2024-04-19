import React from 'react'
import { Link } from 'react-router-dom';
import '../CSS/headStyle.css';

function MainFooter() {
  return (
    <div id='footermain1'>
     <div className='container'>
        <div className='row'>
          <div className='col-md-4'>
            <div id='footerlogo1'>
              <img id='footerlogo2' src='footer-logo.png'  alt ='' />
            </div>
          </div>
          <div id='footercustumer' className='col-md-4'>
            <div id='footercustumer1'>
            <h3 id='footertext2' className='mt-3 '> CUSTOMER CARE</h3>
            <ul className='navbar-nav ml-2'> 
              <li className="nav-item mt-1">
              SHIPPING & HANDLING
              </li>
              <li className="nav-item mt-2">
              EXCHANGE POLICY
              </li>
              <li className="nav-item mt-2">
              ORDER CANCELLATION
              </li>
              <li className="nav-item mt-2">
              SHIPPING & HANDLING
              </li>
              <li className="nav-item mt-2">
              POLICY
              </li>
              <li className="nav-item mt-2">
              PRIVACY POLICY
              </li>
              <li className="nav-item mt-2">
              TERMS OF USE
              </li>
              <li className="nav-item mt-2">
              FAQ'S
              </li>
            </ul>
            </div>
          </div>
          <div className='col-md-4'>
            <div id='footersocial1'>
              <div id='footersocialicons1'>
                <div className='text-center'><h3  id='footertext3'>Social</h3></div>
                <div id='footerlogo5'>
                <div id='logofooter4' >
                  <div id='logofooter2'>
                     <Link> <img id='footerlogo3' src='Footerlogo/facebook.png' alt='' /></Link>
                  </div>
                  <div id='logofooter2'>
                     <Link> <img id='footerlogo3' src='Footerlogo/instagram.png' alt='' /></Link>
                  </div>
                  <div id='logofooter2'>
                     <Link> <img id='footerlogo3' src='Footerlogo/video.png' alt='' /></Link>
                  </div>
                  <div id='logofooter2'>
                      <Link><img id='footerlogo3' src='Footerlogo/whatsapp.png' alt='' /></Link>
                  </div>
                </div>
                </div>
              </div>
              <div id='footersocialicons1'>
              <div className='text-center'> <h3 id='footertext2'>WE ACCEPT</h3></div>
              <div id='footerlogo5'>
                <div id='logofooter4' >
                  <div id='logofooter2'>
                     <Link> <img id='footerlogo3' src='Footerlogo/payment-method.png' alt='' /></Link>
                  </div>
                  <div id='logofooter2'>
                  <Link> <img id='footerlogo3' src='Footerlogo/visa.png' alt='' /></Link>
                  </div>
                  <div id='logofooter2'>
                  <Link> <img id='footerlogo3' src='Footerlogo/01.png' alt='' /></Link>
                  </div>
                  <div id='logofooter2'>
                      <Link><img id='footerlogo3' src='Footerlogo/card.png' alt='' /></Link>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
     </div>
    </div>
  )
}

export default MainFooter; 