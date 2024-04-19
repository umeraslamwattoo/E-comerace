import React, { useEffect } from 'react';
import Header from './Header';
import Corsol from './Corsol';
import HotProducts from './HotPRoducts';
import '../CSS/headStyle.css';
import ColdProducts from './ColdProducts';
import Footer from './Footer';
import MainFooter from './MainFooter';

function UserView() {


  return (
    <div>
      <div id='headerfile1'>
        <Header />
      </div>
      <Corsol />
      <div className='container'>
        <HotProducts />
        <div id="COLDPRO">
          <ColdProducts />
        </div>
      </div>
      <MainFooter />
      <Footer />
    </div>
  );
}

export default UserView;