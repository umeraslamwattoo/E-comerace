import React, { useEffect, useState } from 'react'
import '../CSS/AdminSight.css';
import Adminasidemenu from './Adminasidemenu';


function AdminView() {
  const [searchbar, setSearchbar] = useState("");
  const [data, setData] = useState([]);
  // Function to get data from the database

  var fetchApi = async () => {
    var response = await fetch("http://localhost:5001/helpcenter");
    var value = await response.json();
    setData(value);
  };
  // Function for Delete Admion
  var deleteuserhelp = async (id) => {
    try {
      var response = await fetch(`http://localhost:5001/helpcenter/${id}`, {
        method: "DELETE"
      });
      if (response.ok) {
        fetchApi();
      } else {
        console.error("Failed to delete admin:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting admin:", error);
    }
  };



  useEffect(() => {
    fetchApi();
  }, []);
  // Fuction for handle Search Bar

  const handlesearch = (e) => {
    const { value } = e.target;
    setSearchbar(value)
  }
  const InputFieldname = data.filter((item) => item.firstName.toLowerCase().includes(searchbar.toLowerCase()))
  return (
    <div>
      <div className='d-flex'>
        <Adminasidemenu />
        
          <div className='container'>
            <h2 className='text-center'>USERS PROBLEMS</h2>
            <div id='showparentbox'>
              <div id='showchildbox' className="scrollable-container">
                <div id='searchbar'>
                  <form className="form-inline my-2 my-lg-0">
                    <input onChange={handlesearch} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                  </form>
                </div>
                <div className='container'>
                  <table className='table table-bordered '>
                    <thead>
                      <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>User Problem</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {InputFieldname.map((item) => (
                        <tr>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.phone}</td>
                          <td>{item.email}</td>
                          <td>{item.discorporation}</td>
                          <td>
                            <button className='btn btn-outline-danger' onClick={() => deleteuserhelp(item._id)}>
                              DELETE
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
    
      </div>
    </div>
  )
}

export default AdminView