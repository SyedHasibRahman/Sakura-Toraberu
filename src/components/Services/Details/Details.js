import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useServices from '../../../hooks/useServices';
import { useForm } from "react-hook-form";
import './Details.css';
import Header from '../../Shared/Header/Header';
import Footer from '../../Shared/Footer/Footer';

const Details = () => {
    let { _id } = useParams();
    // const dId = parseFloat(_id)
    const [services] = useServices();
    const [detail, setDetail] = useState({});
    const { user } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();
    const redirect_uri = location.state?.from || '/Dashboard/MyOrders';
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        data.email = user.email;
        data.img = detail.img;
        data.name = detail.name;
        data.price = detail.price;
        data.discription = detail.discription;
        data.status = "pending"
        axios.post('https://still-bastion-57482.herokuapp.com/orders', data)
            // axios.post('https://still-bastion-57482.herokuapp.com/orders', { ...data, img, name, price, discription })
            .then(res => {
                console.log(res)
                if (res.data.insertedId) {
                    alert('Order Successful!');
                    navigate(redirect_uri);
                }
            })
    };
    // console.log(detail?.name);

    useEffect(() => {
        const foundDetails = services.find(service => service._id === _id)
        setDetail(foundDetails);
    }, [services, _id]);
    return (
        <div>
            <Header />
            <div className="container">
                <div className="row pt-5">
                    <div className="col-md-6 mt-4">
                        <hr className="border-info border-3" />
                        <hr className="border-info border-3" />
                        <img className="img-fluid" src={ detail?.img } alt="" />
                    </div>
                    <div className="col-md-6 border-top-0 border border-info border-bottom-0  d-flex align-items-center">
                        <div>
                            <h2 className=" "> Package Name: </h2>
                            <h2 className="text-secondary"> { detail?.name }  </h2>
                            <h2 className="text-success"> ${ detail?.price }  </h2>
                            <hr className="border-info border-3" />
                            <hr className="border-info border-3" />
                            <p>{ detail?.discription }</p>
                            <div className="row">
                                {/* <div className="col-md-6 mb-3">
                            <button className="btn btn-info text-white ">Visiting Fee: ${detail?.price}</button></div> */}
                                <div className="col-md-12">
                                    <Link to="/Products"><button className="btn btn-danger text-white ">Back to All Products </button></Link>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};



export default Details;