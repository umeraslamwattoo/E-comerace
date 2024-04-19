import React from 'react'
import '../CSS/headStyle.css';


function Corsol() {
  return ( 
    <div><div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item item active">
      <div className="cursor-carousel-container1">
          <div className="background-image3">
            <div id='textmain'>
              <div className="text-container"><p id='coursoltext'>Do you believe in love at first click? Or should I keep scrolling?</p></div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
        <div className="cursor-carousel-container1">
          <div className="background-image2">
            <div id='textmain'>
              <div className="text-container"><p id='coursoltext'>Are you a product on sale? Because my heart says "Buy Now."</p></div>
            </div>
          </div>
        </div>
      </div>
      <div class="carousel-item">
      <div className="cursor-carousel-container1">
          <div className="background-image1">
          <div id='textmain'>
          <div className="text-container"><p id='coursoltext'>The beauty of nature is  hidden in details.</p></div>
          </div>
          </div>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}

export default Corsol