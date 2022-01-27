import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div>
            <h2 className="text-danger p-3">Ops Look Like you are lost</h2>
            <Link to="/"><button className="btn btn-danger">Back to Home</button>  </Link>
            <br />
            <Link to="/"><img className="img-fluid" src="https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif" alt="" /></Link><br />
            <Link to="/"><button className="btn btn-danger">Back to Home</button>  </Link>
        </div>
    );
};

export default PageNotFound;