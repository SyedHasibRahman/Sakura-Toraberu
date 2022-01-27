import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const UserRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    // console.log(admin);
    if (isLoading) {
        return <img src="https://jthemes.net/themes/html/medservices/files/images/loader.gif" alt="" />
    }
    return (
        <Route
            { ...rest }
            render={ ({ location }) => user.email && !admin ? children : <Redirect
                to={ {
                    pathname: "/",
                    state: { from: location }
                } }
            ></Redirect>

            }
        >

        </Route>
    );
};

export default UserRoute;