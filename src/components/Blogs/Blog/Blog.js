import React from 'react';

const Blog = (props) => {
    const { img, name, description } = props.blog;

    // console.log(props.blog);
    return (
        <div>
            <div className="col mb-5">
                <div className="card">
                    <img src={ img } className="card-img-top p-3" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{ name }</h5>
                        <p className="card-text">{ description }</p>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Blog;