import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { CartProvider } from './User/CartContext'

import UserLogin from './User/UserLogin'
import UserSignup from './User/UserSignup'
import Adminlogin from './Admin/Adminlogin'
import UserView from './User/UserView'
import AdminView from './Admin/AdminView'
import AdminSignup from './Admin/AdminSignup'
import AllAdminShow from './Admin/AllAdminShow'
import AllUserShow from './Admin/AllUserShow'
import FormHotpro from './Admin/FormHotpro'
import AllHoteproducts from './Admin/AllHoteproducts'
import FormColdpro from './Admin/FormColdpro'
import AllColdproducts from './Admin/AllColdproducts'
import HELPCENTER from './User/HELPCENTER'
import ADDTOCARTC from './User/ADDTOCARTC'


function App() {


  return (
    <CartProvider>
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<UserView />} />
          <Route path="/userlogin" element={<UserLogin />} />
          <Route path='/usersignup' element={<UserSignup />} />
          <Route path='/adminlogin' element={<Adminlogin />} />
          <Route path='/contectus' element={<HELPCENTER/>}/>

          <Route path='/admin' element={<AdminView/>} />
          <Route path='/adminsignup' element={< AdminSignup/>} />
          <Route path='/admindateshow' element={<AllAdminShow/>}/>
          <Route path='/userdatashoew' element={<AllUserShow/>}/>
          <Route path='/creathotpro' element={<FormHotpro/>}/>
          <Route path='/showhotpro' element={<AllHoteproducts/>}/>
          <Route path='/creatcoldpro' element={<FormColdpro/>}/>
          <Route path='/showcoldpro' element={<AllColdproducts/>}/>
          <Route path='/addtocart' element={<ADDTOCARTC/>}/>
         </Routes>
      </Router>
    </div>
    </CartProvider>
  )
}

export default App
