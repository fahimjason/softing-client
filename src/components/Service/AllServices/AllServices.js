import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllServices = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://aqueous-beach-52481.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [services])


    // Delete services from database
    const deleteServices = (id) => {
        fetch(`https://aqueous-beach-52481.herokuapp.com/deleteServices/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                data && alert('Successfully deleted')
            })
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 p-4">
                    <h3 className="py-2 text-center">All Services</h3>

                    <table class="table table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"> # SL</th>
                                <th scope="col">Service Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                services.map((service, index) => <tr key={service._id}>
                                    <td>{index + 1}</td>
                                    <td>{service.name}</td>
                                    <td>${service.price}</td>
                                    <td> <button className="btn btn-danger rounded" onClick={() => deleteServices(service._id)}><FontAwesomeIcon icon={faTrashAlt} /> <span className="ps-2">Delete</span></button></td>
                                </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllServices;