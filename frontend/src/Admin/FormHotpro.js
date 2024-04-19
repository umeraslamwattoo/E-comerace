import React, {  useState } from 'react'
import '../CSS/AdminSight.css';
import { useNavigate } from 'react-router-dom';
import Adminasidemenu from './Adminasidemenu';

function FormHotpro() {
    const Navigate = useNavigate();
    const empty = {
        tital: "",
        price: "",
        pricecut: "",
        image: "",
    };

    const [handle, setHandle] = useState(empty);
    const [fileData, setFileData] = useState(empty);
    // Function For handle input 
    const handlefile = (e) => {
        setFileData(e.target.files[0]);

    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setHandle({ ...handle, [name]: value });

    }

    const handleFormData = async () => {
        const formData = new FormData();
        formData.append("tital", handle.tital);
        formData.append("price", handle.price);
        formData.append("pricecut", handle.pricecut);
        formData.append("image", fileData);

        await fetch("http://localhost:5001/hotproduct", {
            method: "POST",
            body: formData,
        });

        // Reset the form and fileData
        setHandle(empty);
        setFileData(empty);
        alert("Hot product Added Successfully")
        Navigate("/showhotpro")
    };



    return (

        <div>
            <div className='d-flex'>
                <div>
                    <Adminasidemenu/>
                </div>
                <div id='main-container'>
                    <h2 className='text-center-mainheading '>ADD NEW HOT PRODUCT</h2>
                    <div id='mainbox'>
                        <div id='contaierhotpro'>
                            <div className='row' id='row-mainformhot'>
                                    <div className='form-group'>
                                        <label><b>Tital</b></label>
                                        <input name='tital' type='text' onChange={handleInput} value={handle.tital} className='form-control' />
                                    </div>
                                    <div className='form-group'>
                                        <label><b>Price</b></label>
                                        <input name='price' type='number' onChange={handleInput} value={handle.price} className='form-control' />
                                    </div>
                                    <div className='form-group'>
                                        <label><b>Price Cut</b></label>
                                        <input name='pricecut' type='number' onChange={handleInput} value={handle.pricecut} className='form-control' />
                                    </div>
                                    <div className='form-group'>
                                        <label><b>Image</b></label><br />
                                        <input id='imageinput' name='image' onChange={handlefile} type='file' />
                                    </div>
                                    <button onClick={handleFormData} id='mainbtnhotcoldadd' className=' btn btn-primary mt-3'><b>Add New</b></button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>

    )
}

export default FormHotpro