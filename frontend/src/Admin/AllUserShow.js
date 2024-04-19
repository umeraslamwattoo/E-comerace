import React, { useEffect, useState } from 'react';
import AdminView from './AdminView';
import Adminasidemenu from './Adminasidemenu';

function AllUserShow() {
    const [searchbar, setSearchbar] = useState("");
    const [data, setData] = useState([]);


    // Function for Delete Admion
    var deleteAdmion = async (id) => {
        try {
            var response = await fetch(`http://localhost:5001/user/${id}`, {
                method: "DELETE"
            });
            if (response.ok) {
                fetchApi();  // Fetch data again after successful deletion
                // Optionally, handle the response data if needed
                // const data = await response.json();
            } else {
                console.error("Failed to delete admin:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting admin:", error);
        }
    };


    // Function to get data from the database

    var fetchApi = async () => {
        var response = await fetch("http://localhost:5001/user");
        var value = await response.json();
        setData(value);
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
                    <Adminasidemenu/>
                    <div className='container'>
                        <h2 className='text-center-mainheading'>SHOW ALL USERS</h2>
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
                                                    <td>
                                                        <button className='btn btn-outline-danger' onClick={() => deleteAdmion(item._id)}>
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

export default AllUserShow