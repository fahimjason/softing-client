import { faFileAlt, faGripHorizontal, faHome, faPlus, faStarHalfAlt, faTasks, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const Sidebar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://aqueous-beach-52481.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: loggedInUser.email })
        })
            .then(response => response.json())
            .then(data => setIsAdmin(data))
    }, [loggedInUser.email])

    return (
        <div className="col-md-2" style={{ overflow: 'hidden' }}>
            <div className="d-flex flex-column p-3 text-white bg-dark" style={{ width: "280px", height: "100vh" }}>
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-4">Softing</span>
                </Link>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <FontAwesomeIcon icon={faHome} /> <span className="ps-2">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/bookings" className="nav-link text-white">
                            <FontAwesomeIcon icon={faFileAlt} /> <span className="ps-2">Bookings</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/addReview" className="nav-link text-white">
                            <FontAwesomeIcon icon={faStarHalfAlt} /> <span className="ps-2">Review</span>
                        </Link>
                    </li>
                    {
                        isAdmin && <>
                            <li>
                                <Link to="/dashboard" className="nav-link text-white">
                                    <FontAwesomeIcon icon={faGripHorizontal} /> <span className="ps-2">Dashboard</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/addService" className="nav-link text-white">
                                    <FontAwesomeIcon icon={faPlus} /> <span className="ps-2">Add Services</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/manage" className="nav-link text-white">
                                    <FontAwesomeIcon icon={faTasks} /> <span className="ps-2">Manage</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="addUser" className="nav-link text-white">
                                    <FontAwesomeIcon icon={faUserPlus} /> <span className="ps-2">Make Admin</span>
                                </Link>
                            </li>
                        </>
                    }
                </ul>
                <hr />
                <div className="dropdown">
                    <Link to="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={loggedInUser.img} alt="mdo" width="32" height="32" className="rounded-circle me-2" />
                        <strong>{loggedInUser.name}</strong>
                    </Link>
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><Link className="dropdown-item" to="#">New project...</Link></li>
                        <li><Link className="dropdown-item" to="#">Settings</Link></li>
                        <li><Link className="dropdown-item" to="#">Profile</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="#">Sign out</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;