import React from 'react';

/* 
https://i.ibb.co/t4YFzb9/Whats-App-Image-2021-09-27-at-10-35-03-AM.jpg
https://i.ibb.co/4MR5y8D/Whats-App-Image-2021-09-27-at-10-36-22-AM.jpg
https://i.ibb.co/rQ2GQMg/Whats-App-Image-2021-09-27-at-10-37-03-AM.jpg

*/

const Slider = () => {
    return (
        <div>

            <div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img height="650px" src="https://i.ibb.co/dDjzLHb/nature-1.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img height="650px" src="https://i.ibb.co/P4vp4zc/nature-2.jpg" className="d-block w-100" alt="..." />
                        </div>
                        <div className="carousel-item">
                            <img height="650px" src="https://i.ibb.co/0rzrpg9/nature-3.jpg" className="d-block w-100" alt="..." />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;