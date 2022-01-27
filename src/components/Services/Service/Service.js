import React from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = (props) => {
    const { _id, name, discription, img, price, star } = props.service;
    // console.log(props.service);
    return (
        <div>
            <div className="col service-card mb-5">
                <div className="card">
                    <img height="250px" src={ img } className="card-img-top p-3" alt="..." />
                    <div className="card-body">
                        <h6>03 February, 2022</h6>
                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">{ discription }</p>
                        <div className='d-flex justify-content-between'>
                            <div className=' d-flex'>
                                <span className='eyes'><svg class="svg-icon" viewBox="0 0 20 20">
                                    <path d="M10,6.978c-1.666,0-3.022,1.356-3.022,3.022S8.334,13.022,10,13.022s3.022-1.356,3.022-3.022S11.666,6.978,10,6.978M10,12.267c-1.25,0-2.267-1.017-2.267-2.267c0-1.25,1.016-2.267,2.267-2.267c1.251,0,2.267,1.016,2.267,2.267C12.267,11.25,11.251,12.267,10,12.267 M18.391,9.733l-1.624-1.639C14.966,6.279,12.563,5.278,10,5.278S5.034,6.279,3.234,8.094L1.609,9.733c-0.146,0.147-0.146,0.386,0,0.533l1.625,1.639c1.8,1.815,4.203,2.816,6.766,2.816s4.966-1.001,6.767-2.816l1.624-1.639C18.536,10.119,18.536,9.881,18.391,9.733 M16.229,11.373c-1.656,1.672-3.868,2.594-6.229,2.594s-4.573-0.922-6.23-2.594L2.41,10l1.36-1.374C5.427,6.955,7.639,6.033,10,6.033s4.573,0.922,6.229,2.593L17.59,10L16.229,11.373z"></path>
                                </svg></span>
                                <span>11.3K</span>
                            </div>
                            <div className=' d-flex'>
                                <span className='eyes'><svg class="svg-icon" viewBox="0 0 20 20">
                                    <path d="M18.303,4.742l-1.454-1.455c-0.171-0.171-0.475-0.171-0.646,0l-3.061,3.064H2.019c-0.251,0-0.457,0.205-0.457,0.456v9.578c0,0.251,0.206,0.456,0.457,0.456h13.683c0.252,0,0.457-0.205,0.457-0.456V7.533l2.144-2.146C18.481,5.208,18.483,4.917,18.303,4.742 M15.258,15.929H2.476V7.263h9.754L9.695,9.792c-0.057,0.057-0.101,0.13-0.119,0.212L9.18,11.36h-3.98c-0.251,0-0.457,0.205-0.457,0.456c0,0.253,0.205,0.456,0.457,0.456h4.336c0.023,0,0.899,0.02,1.498-0.127c0.312-0.077,0.55-0.137,0.55-0.137c0.08-0.018,0.155-0.059,0.212-0.118l3.463-3.443V15.929z M11.241,11.156l-1.078,0.267l0.267-1.076l6.097-6.091l0.808,0.808L11.241,11.156z"></path>
                                </svg></span>
                                <span>11.3K</span>
                            </div>
                        </div>
                        <Rating
                            initialRating={ star }
                            readonly
                            emptySymbol="fa fa-star-o fa-2x icon-color"
                            fullSymbol="fa fa-star fa-2x icon-color"

                        >
                        </Rating >
                        <h4>${ price }</h4>
                        <Link className="btn btn-info " to={ `/Details/${_id}` }>View Details</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Service;