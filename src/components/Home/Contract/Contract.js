import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Contract = () => {
    return (
        <section>
            <div className="container">
                <h2 className="text-center">CONTACT US</h2>
                <div className="row py-5">
                    <div className="col-md-6">
                        <h5 className="pb-3">OUR OFFICE ADDRESS</h5>
                        <div className="d-flex">
                            <h6><FontAwesomeIcon className="icon active-icon" icon={faMapMarkerAlt} /></h6>
                            <p className="ps-2">22 Baker Street,
                            <br />
                            London, United Kingdom,
                            <br />
                            W1U 3BW
                            </p>
                        </div>
                        <div className="d-flex">
                            <h6><FontAwesomeIcon className="icon active-icon" icon={faPhone} /></h6>
                            <p className="ps-2">+2025550295</p>
                        </div>
                        <div className="py-3">
                            <h6>Social Address</h6>
                            <ul className="social-media list-inline pt-4">
                                <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                                <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                                <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <h4 className="pb-3">Let's talk About Your Idea</h4>
                        <form>
                            <div class="mb-3">
                                <label class="form-label">Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Name" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" placeholder="email" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Phone Number</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" placeholder="Phone Number" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Message</label>
                                <textarea type="text" class="form-control" placeholder="Message..." rows="3" ></textarea>
                            </div>
                            <div class="d-grid gap-2">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Contract;