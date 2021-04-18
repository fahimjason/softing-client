import React, { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const [serviceInfo, setServiceInfo] = useState({});
    const [file, setFile] = useState(null);

    const handleBlur = e => {
        const newServiceInfo = { ...serviceInfo };
        newServiceInfo[e.target.name] = [e.target.value];
        setServiceInfo(newServiceInfo);
    }


    const handleFileUpload = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = (e) => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', serviceInfo.serviceName);
        formData.append('price', serviceInfo.servicePrice);
        formData.append('description', serviceInfo.serviceDescription);

        fetch('https://aqueous-beach-52481.herokuapp.com/addService', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data) {
                    alert('Successfully added')
                }
            })
            .catch(error => {
                console.error(error)
            })

        e.preventDefault()
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 p-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label className="form-label">Service Name</label>
                            <input type="text" onBlur={handleBlur} className="form-control" name="serviceName" placeholder="Service Name" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Price</label>
                            <input type="number" onBlur={handleBlur} className="form-control" name="servicePrice" placeholder="Service Price" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Upload image:</label>
                            <input type="file" onChange={handleFileUpload} className="form-control" placeholder="Image" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">Description</label>
                            <textarea type="text" onBlur={handleBlur} className="form-control" name="serviceDescription" placeholder="Service Description..." rows="3" ></textarea>
                        </div>
                        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                            <button type="submit" className="btn btn-lg btn-primary">Add Service</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddService;