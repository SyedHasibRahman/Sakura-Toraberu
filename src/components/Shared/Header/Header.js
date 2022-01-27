import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css';

const Header = () => {

    const { user, logOut } = useAuth();
    return (
        <div className="header mb-4 p-3">
            <div className="container">
                <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                    <div className="container">
                        <Link className="navbar-brand" to="/">
                            {/* <img src="https://www.logolynx.com/images/logolynx/66/66e22a265f3c8d3bb480befae728f835.jpeg" alt="" />
                             */}
                            <h5>Sakura Toraberu</h5>
                        </Link>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Products">Blogs</Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Blogs">Blog's</Link>
                                </li> */}
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/AboutUs">About Us</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link active" aria-current="page" to="/Contactus">Contact Us</Link>
                                </li>
                                <li className="nav-item dropdown">
                                    { user?.email ?
                                        <div>
                                            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                Dashboard
                                            </Link>
                                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">

                                                <li className="nav-item">
                                                    { user?.email ?
                                                        <Link className="nav-link active" aria-current="page" to="/Dashboard">Dashboard</Link> :
                                                        ''
                                                    }
                                                </li>
                                                <li className="nav-item">
                                                    { user?.email ?
                                                        <button onClick={ logOut } className="btn btn-light">LogOut</button> :
                                                        <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
                                                    }
                                                    <span className="text-danger">
                                                        <small>{ user?.displayName }</small>
                                                    </span>
                                                </li>
                                            </ul>
                                        </div> :
                                        ''
                                    }
                                </li>
                                <li className="nav-item">
                                    { user?.email ?
                                        '' :
                                        <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
                                    }
                                </li>


                            </ul>
                        </div>
                    </div>
                </nav>
                <div>
                </div>
            </div>
        </div>
    );
};

export default Header;