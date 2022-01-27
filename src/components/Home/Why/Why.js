import React from 'react';
import { Link } from 'react-router-dom';
import './Why.css';

const Why = () => {
    return (
        <div className="why-bg">
            <div className="container">
                <h2 className="py-4">About ABI</h2>
                <div className="row row-cols-1 row-cols-md-2 g-4 pt-3  d-flex align-items-center">
                    <div className="col">
                        <img className="img-fluid why-img" src="https://www.sobujpatagroup.com/assets/sojib/main/img/tourABD.png" alt="" />
                    </div>
                    <div className="col">
                        <div>
                            <h2 className="fw-bold text-info">Sakura Toraberu Provide best quality of products</h2>
                            <hr />
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    <li> First & Reliable</li>
                                    <li> Tracking Service</li>
                                    <li> Worldwide Service</li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li> B2B Exchange</li>
                                    <li> Transparent Pricing</li>
                                    <li>20/5 Support</li>
                                </ul>
                            </div>
                        </div>
                        <hr />
                        <Link className="btn btn-info" to="/Aboutus">About Us</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Why;