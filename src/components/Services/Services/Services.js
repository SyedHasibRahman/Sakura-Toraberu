import React from 'react';
import useServices from '../../../hooks/useServices';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div className="Our-Services">
            <Header />
            <div className="container ">
                <h2 className="py-4">Our Blogs</h2>
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                    {
                        services.map(service => <Service
                            key={ service._id }
                            service={ service }></Service>)
                    }


                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Services;