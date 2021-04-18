import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AllOrders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [orders, setOrders] = useState([]);
    const [isAdmin, setIsAdmin] = useState(false);


    // Load Orders Data
    useEffect(() => {
        fetch(`https://aqueous-beach-52481.herokuapp.com/orders?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [loggedInUser.email])


    // Check Admin
    useEffect(() => {
        fetch('https://aqueous-beach-52481.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])


    // Change orders status from database
    const ordersStatus = (id) => {
        const status = document.getElementById("status").value;
        const updateInfo = { id, status };

        fetch(`https://aqueous-beach-52481.herokuapp.com/updateStatus/${id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updateInfo)
        })
            .then(res => res.json())
            .then(data => {
                data && alert('Successfully Updated')
            })
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar />
                <div className="col-md-10 p-4">
                    {orders.length > 0 ?
                        <>
                            <h3 className="py-2 text-center">All orders</h3>

                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col"> # SL</th>
                                        <th scope="col">order Name</th>
                                        <th scope="col">Price</th>
                                        {
                                            isAdmin ?
                                                <>
                                                    <th scope="col">Ordered By</th>
                                                    <th scope="col">Status</th>
                                                </>
                                                :
                                                <th scope="col">Status</th>
                                        }
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        orders.map((order, index) => <tr key={order._id}>
                                            <td>{index + 1}</td>
                                            <td>{order.name}</td>
                                            <td>${order.price}</td>
                                            {
                                                isAdmin ?
                                                    <>

                                                        <td>{order.user}</td>
                                                        <td>
                                                            <select onChange={() => ordersStatus(order._id)} id="status" class="form-select mb-3">
                                                                <option selected>{order.status}</option>
                                                                <option value="Pending">Pending</option>
                                                                <option value="In-progress">In-progress</option>
                                                                <option value="Done">Done</option>
                                                            </select>
                                                        </td>
                                                    </>
                                                    :
                                                    <td>{order.status}</td>
                                            }
                                        </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </>
                        :
                        <h3 className="py-2 text-center">You have no orders</h3>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllOrders;