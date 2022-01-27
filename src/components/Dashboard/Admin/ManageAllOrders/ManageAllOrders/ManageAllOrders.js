import React, { useEffect, useState } from 'react';
// import useServices from '../../../hooks/useServices';
import './ManageAllOrders';

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [status, setStatus] = useState('');

    useEffect(() => {
        fetch('https://still-bastion-57482.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, []);
    // Status  

    // Delete a products
    const handleStatus = e => {
        setStatus(e.target.value);

    }

    const handleDelete = id => {
        const deleteMassege = window.confirm("Delete the item?");
        if (deleteMassege) {
            const url = `https://still-bastion-57482.herokuapp.com/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        const remaining = orders.filter(product => product._id !== id);
                        setOrders(remaining);
                    }

                })
        }

    }
    const handleUpdate = id => {
        fetch(`https://still-bastion-57482.herokuapp.com/updateStatus/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ status })
        })
    }
    // console.log(status);


    // -------------Delete Confirmation  
    return (
        <div className="mt-5 MyOrders container">
            <div className="container">
                <div className="row">
                    <h2 className="mt-5">Welcome to Manage All Order</h2>
                    <div className="row row-cols-1 row-cols-md-4 row-cols-lg-4 g-4">
                        {
                            orders.map(order => <div className="p-2 border border-info"
                                key={ order._id }
                            >
                                <div className="card-group review">
                                    <div className="card text-center">
                                        <img src={ order.img } className="card-img-top" alt="Mom/Dad" />
                                        <div className="card-body">
                                            <h5 className="card-title">{ order.name }</h5>
                                            <p className="card-title"> Order ID: { order._id }</p>
                                            <p className="card-title text-success">Order By: { order.userName }</p>
                                            <p className="card-text"> { order.discription }</p>
                                            <input type="text"
                                                defaultValue={ order.status }
                                                onBlur={ handleStatus }
                                            ></input>
                                            {/* <form>
                                                <select>
                                                    <option defaultValue={ order.status }>Penging</option>
                                                    <option defaultValue={ order.status }>Shiped</option>
                                                </select>
                                            </form> */}
                                            <button onClick={ () => handleUpdate(order._id) } className="btn-light">Update</button>
                                        </div>
                                        <div className="card-footer">

                                            <small className="text-muted">
                                                <button onClick={ () => handleDelete(order._id) } className="btn-danger">Delete</button>
                                            </small>
                                        </div>
                                    </div>
                                </div>

                            </div>)
                        }

                    </div>
                </div>
            </div>
            <div className="col-md-6">
            </div>

        </div >
    );
};

export default ManageAllOrders;
