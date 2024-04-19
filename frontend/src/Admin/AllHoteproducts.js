import React, { useEffect, useState } from 'react'
import Adminasidemenu from './Adminasidemenu';

function AllHoteproducts() {
    const [searchbar, setSearchbar] = useState("");
    const [data, setData] = useState([]);

    // Function to get data from the database
    var deletehotpro = async (id) => {
        try {
            var response = await fetch(`http://localhost:5001/hotdelete/${id}`, {
                method: "DELETE"
            });
    
            console.log('Response:', response);
    
            if (response.ok) {
                fetchhotpro(); 
            } else {
                console.error("Failed to delete ", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting HOT PRODUCTS:", error);
        }
    };
    
    // CREATE Hot producers
    var fetchhotpro = async () => {
        var response = await fetch("http://localhost:5001/showhotpro");
        var value = await response.json();
        setData(value);
    };
    useEffect(() => {
        fetchhotpro();
    }, []);

    // Fuction for handle Search Bar

    const handlesearch = (e) => {
        const { value } = e.target;
        setSearchbar(value)
    }
    const InputFieldname = data.filter((item) => item.tital.toLowerCase().includes(searchbar.toLowerCase()))
    return (
        <div>
            <div className='d-flex'>
                <Adminasidemenu />
                <div className='container'>
                    <h2 className='text-center-mainheading'>SHOW ALL HOT-PRODUCTS</h2>
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
                                            <th>Tital</th>
                                            <th>Image</th>
                                            <th>Price</th>
                                            <th>Price-Cut</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                    {InputFieldname.map((item) => (
                                                <tr>
                                                    <td>{item.tital}</td>
                                                    <td><img src={`http://localhost:5001/showhotpro/${item.image}`} style={{ maxHeight :"80px"} } /></td>
                                                    <td>{item.price}</td>
                                                    <td>{item.pricecut}</td>
                                                    <td>
                                                        <button  className='btn btn-outline-danger'onClick={() => deletehotpro(item._id)}>
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

export default AllHoteproducts