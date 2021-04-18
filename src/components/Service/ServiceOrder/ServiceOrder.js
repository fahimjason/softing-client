import React from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';
import ProcessOrder from '../../Order/ProcrssOrder/ProcessOrder';

const ServiceOrder = () => {
    const [service, setService] = useState({});
    const { serviceID } = useParams();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    // Load single service info
    useEffect(() => {
        fetch(`https://aqueous-beach-52481.herokuapp.com/service/${serviceID}`)
            .then(res => res.json())
            .then(data => setService(data))
    }, [serviceID])


    const handlePayment = paymentID => {
        const orderInfo = {
            user: loggedInUser.name,
            email: loggedInUser.email,
            name: service.name,
            price: service.price,
            quantity: 1,
            paymentID,
            status: 'pending',
            orderDate: new Date()
        }

        // Order Service
        fetch(`https://aqueous-beach-52481.herokuapp.com/addOrder`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(data => {
                data && alert('Order Successfully Added');
            })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-5 p-4">
                    <h3 className="py-2">Please Pay</h3>
                    <div className="mb-3">
                        <label className="form-label">Service Name</label>
                        <input type="text" className="form-control" Value={service.name} placeholder="New user name" rows="3" readOnly />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Price: $</label>
                        <input className="form-control" value={service.price} rows="3" readOnly />

                    </div>
                    <div className="mb-3">
                        <label className="form-label"><h5 className="py-2">Payment card information:</h5></label>
                        <ProcessOrder handlePayment={handlePayment} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceOrder;