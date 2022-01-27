import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Contactus.css';

const Contactus = () => {
    return (
        <div>
            <Header />
            <section className="contactus mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <img className="img-fluid p-4" src="https://www.kindpng.com/picc/m/393-3938892_get-in-touch-get-in-touch-png-transparent.png" alt="" />
                        </div>
                        <div className="col-sm-6 py-3">
                            <div>
                                <h2>CONTACT US</h2>
                            </div>
                            <form method="" data-form-title="CONTACT US">
                                <input type="hidden" data-form-email="true" />
                                <div className="form-group">
                                    <input type="text" className="form-control" name="name" required="" placeholder="Name*" data-form-field="Name" />
                                </div>
                                <div className="form-group">
                                    <input type="email" className="form-control" name="email" required="" placeholder="Email*" data-form-field="Email" />
                                </div>
                                <div className="form-group">
                                    <input type="tel" className="form-control" name="phone" placeholder="Phone" data-form-field="Phone" />
                                </div>
                                <div className="form-group">
                                    <textarea className="form-control" name="message" placeholder="Message" rows="7" data-form-field="Message"></textarea>
                                </div>
                                <div>
                                    <span type="" className="btn btn-lg btn-danger mt-3">CONTACT US</span>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Contactus;