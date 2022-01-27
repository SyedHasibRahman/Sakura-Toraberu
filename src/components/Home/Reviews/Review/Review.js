import React from 'react';
import Rating from 'react-rating'

const Review = (props) => {
    const { rating, title, info, img, userName } = props.ratings;
    return (
        <div className="card-group review">
            <div className="card text-center">
                <img src={ img } className="card-img-top" alt="Mom/Dad" />
                <div className="card-body">
                    <h5 className="card-title">{ title }</h5>
                    <p className="card-text"> { info }</p>
                </div>
                <div className="card-footer">
                    <p className="text-info"> { userName }</p>
                    <small className="text-muted">
                        <Rating
                            initialRating={ rating }
                            readonly
                            emptySymbol="fa fa-star-o fa-2x icon-color"
                            fullSymbol="fa fa-star fa-2x icon-color"
                        >
                        </Rating >
                    </small>
                </div>
            </div>
        </div>
    );
};

export default Review;