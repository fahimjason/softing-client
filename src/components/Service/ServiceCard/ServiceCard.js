import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './ServiceCard.css'

const ServiceCard = ({ service }) => {
    const history = useHistory();

    // Handle single service ID
    const serviceInfo = (serviceId) => {
        history.push(`booking/${serviceId}`);

    }
    return (
        <div className="col-md-3 p-2">
            <div className="card text-center service-card" >
                <img className="img-fluid p-4" src={`data:image/jpeg;base64,${service.image.img}`} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{service.name}</h5>
                    <p className="card-text">{service.description}</p>
                    <div className="d-flex justify-content-between align-items-center py-2">
                        <h5 className="pe-2">Price: ${service.price}</h5>
                        <Link to="#" onClick={() => serviceInfo(service._id)} className="btn btn-dark text-white ps-2">Book Service</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;