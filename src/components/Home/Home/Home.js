import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Reviews from '../Reviews/Reviews/Reviews';
import ServicesForHome from '../ServicesForHome/ServicesForHome';
import Slider from '../Slider/Slider';
import Why from '../Why/Why';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Why></Why>
            <ServicesForHome />
            {/* <Testimonial></Testimonial> */ }
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;