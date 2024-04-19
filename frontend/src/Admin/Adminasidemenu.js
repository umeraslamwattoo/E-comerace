import React, { useEffect, useState } from 'react'
import '../CSS/AdminSight.css';
import { Link, useNavigate, } from 'react-router-dom';

function Adminasidemenu() {
  const Navigate = useNavigate();
  const [sessiondata, setSessiondata] = useState("");

  const getsessiondata = () => {
    setSessiondata(sessionStorage.getItem("firstName"));
  }
  useEffect(() => {
    getsessiondata();
  }, []); 
  return (

    <div>
      <div>
        {sessiondata ? (
          <div className='maindiv'>
            <div className='asidmain'>
                  <div className="btn-group dropright">

                    <Link className="navbar-brand" to="/admin">
                      <img id='logo2' src="logo.png" alt="" />
                    </Link>

                    <button
                      type="button"
                      className="btn dropdown-toggle dropdown-toggle-split"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                    </button>
                    <div className="dropdown-menu mt-5">
                      <div id='btnlogout'>
                        <Link to="/" id='logout'>
                           <i class="fa-solid fa-arrow-right-from-bracket"></i> <>&nbsp;</><>&nbsp;</><>&nbsp;</> Logout Admin
                        </Link>
                      </div>
                  </div>


              </div>
              <div id='navmenue'>
                <div>
                  <div id='products'><b id='h1'> Products </b></div>
                  <div id='btn1'>
                    <Link to="/creathotpro" id='link1'>
                      <i class="fa-solid fa-fire"></i> <>&nbsp;</><>&nbsp;</><>&nbsp;</><p>Add Hote Product</p>
                    </Link>
                  </div>
                  <div id='btn1'>
                    <Link to="/showhotpro" id='link1'>
                      <i class="fa-solid fa-eye"></i>  <>&nbsp;</><>&nbsp;</><>&nbsp;</><p>All Hote Products</p>
                    </Link>
                  </div>
                  <div id='btn1'>
                    <Link to="/creatcoldpro" id='link1'>
                      <i class="fa-solid fa-cart-plus"></i> <>&nbsp;</><>&nbsp;</><>&nbsp;</><p>Add New Product</p>
                    </Link>
                  </div>
                  <div id='btn1'>
                    <Link to="/showcoldpro" id='link1'>
                      <i class="fa-solid fa-eye"></i><>&nbsp;</><>&nbsp;</> <p> Show All Products</p>
                    </Link>
                  </div>

                </div>
                <div>
                  <div id='products'><b id='h1'>Orders</b></div>
                  <div id='btn1'>
                    <Link to="" id='link1'>
                      <i class="fa-solid fa-boxes-packing"></i> <>&nbsp;</><>&nbsp;</><>&nbsp;</> <p>Show All Orders</p>
                    </Link>
                  </div>
                </div>
                <div>
                  <div id='products'><b id='h1'>Users</b></div>
                  <div id='btn1'>
                    <Link to="/userdatashoew" id='link1'>
                      <i class="fa-solid fa-users"></i> <>&nbsp;</><>&nbsp;</><>&nbsp;</>
                      <p> Show All Users</p>
                    </Link>
                  </div>
                </div>
                <div>
                  <div id='products'><b id='h1'>Admin</b></div>
                  <div id='btn1'>
                    <Link to="/adminsignup" id='link1'>
                      <i class="fa-solid fa-address-book"></i> <>&nbsp;</><>&nbsp;</><>&nbsp;</> <p> Add New Admin</p>
                    </Link>
                  </div>
                  <div id='btn1'>
                    <Link to="/admindateshow" id='link1'>
                      <i class="fa-brands fa-black-tie"></i>  <>&nbsp;</><>&nbsp;</><>&nbsp;</><p> Show All Admins</p>
                    </Link>
                  </div>
                </div>


              </div>
            </div>
          </div>
         ) : (Navigate("/adminlogin"))
        }

      </div>
    </div>
  )
}

export default Adminasidemenu