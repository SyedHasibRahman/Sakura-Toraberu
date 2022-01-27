import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    let location = useLocation();
    // console.log(admin);
    if (isLoading) {
        return <img src="https://jthemes.net/themes/html/medservices/files/images/loader.gif" alt="" />
    }
    if (user.email && admin) {
        return children;
    }
    return <Navigate to="/login" state={ { from: location } } />;

};

export default AdminRoute;