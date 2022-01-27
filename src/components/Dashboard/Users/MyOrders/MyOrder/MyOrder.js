import React from 'react';
import { Link } from 'react-router-dom';
import './MyOrder.css'

const MyOrder = (props) => {

    const { id, name, discription, img, price } = props.service;
    return (
        <div>
            <div className="col service-card mb-5">
                <div className="card">
                    <img height="250px" src={ img } className="card-img-top p-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">{ discription }</p>
                        <h4>${ price }</h4>
                        <Link className="btn btn-info " to={ `/Details/${id}` }>View Details</Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyOrder;