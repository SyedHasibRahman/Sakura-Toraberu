import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'

const Footer = () => {
    return (
        <div>
            {/* <!-- Footer --> */ }
            <footer
                className="text-center text-lg-start "
            >


                {/* <!-- Section: Links  --> */ }
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* <!-- Grid row --> */ }
                        <div className="row mt-3 pt-5">
                            {/* <!-- Grid column --> */ }
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* <!-- Content --> */ }
                                <h6 className="text-uppercase fw-bold"> Sakura Toraberu</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto cus-hr"

                                />
                                <p>
                                    This website has been featured on major media sites time and time again because it’s the best budget advice out there. Our system here works. We’re going to make you a smarter traveler.
                                </p>
                            </div>
                            {/* <!-- Grid column --> */ }

                            {/* <!-- Grid column --> */ }
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */ }
                                <h6 className="text-uppercase fw-bold">Menu</h6>
                                <hr />
                                <p>
                                    <Link to="/Blogs" className="text-black">Blogs </Link>
                                </p>
                                <p>
                                    <Link to="/AboutUs" className="text-black">AboutUs</Link>
                                </p>
                                <p>
                                    <Link to="/Contactus" className="text-black">Contactus </Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-black">Home</Link>
                                </p>
                            </div>
                            {/* <!-- Grid column -->  */ }

                            {/* <!-- Grid column --> */ }
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* <!-- Links --> */ }
                                <h6 className="text-uppercase fw-bold">Links</h6>
                                <hr />
                                <p>
                                    <Link to="/" className="text-black">Terms</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-black">Refund</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-black">How to Cancel</Link>
                                </p>
                                <p>
                                    <Link to="/" className="text-black">How to Order</Link>
                                </p>
                            </div>
                            {/* <!-- Grid column --> */ }

                            {/* <!-- Grid column --> */ }
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* <!-- Links --> */ }
                                <h6 className="text-uppercase fw-bold">Contact</h6>
                                <hr />
                                <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                                <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                                <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                            </div>
                            {/* <!-- Grid column --> */ }
                        </div>
                        {/* <!-- Grid row --> */ }
                    </div>
                </section>
                {/* <!-- Section: Links  --> */ }

                {/* <!-- Copyright --> */ }
                <div
                    className="text-center p-3 copy-right"
                >
                    © 2021 Copyright:
                    <Link className="text-danger" to={ { pathname: "https://www.linkedin.com/in/syedhasibrahman/" } } target="_blank" >Syed Hasibur Rahman</Link>

                </div>
                {/* <!-- Copyright --> */ }
            </footer>
        </div>
    );
};

export default Footer;