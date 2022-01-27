import * as React from 'react';
import './Dashboard.css';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import { Button, ButtonGroup } from '@mui/material';
import {
    Routes,
    Link,
    Route,
    Outlet
} from "react-router-dom";
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import AddAProduct from '../Admin/AddAProduct/AddAProduct';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import DashboardHome from '../DashboardHome/DashboardHome';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders/ManageAllOrders';
import PrivateRoute from '../../Auth/PrivateRoute/PrivateRoute';
import Pay from '../Users/Pay/Pay';
import Review from '../Users/Review/Review';
import MyOrders from '../Users/MyOrders/MyOrders/MyOrders';
import AdminRoute from '../../Auth/AdminRoute/AdminRoute';

const drawerWidth = 200;

function Dashboard(props) {
    const { user, logOut, admin } = useAuth();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar >
            </Toolbar >
            <Divider />
            { admin && user?.email ?
                <Box>
                    {/* For Admin */ }
                    <ButtonGroup
                        className="btn-group"
                        orientation="vertical"
                        aria-label="vertical outlined button group"
                    >
                        <h5>Admin Panel</h5>

                        <Link to="/"><Button variant="text">Back To Home</Button> </Link>
                        <Link to="/Dashboard/DashboardHome"> <Button variant="text">Dashboard</Button>  </Link>
                        <Link to={ `/Dashboard/ManageAllOrders` }> <Button variant="text">Manage All Blogs</Button> </Link>
                        <Link to={ `/Dashboard/AddAProduct` }> <Button variant="text">Add A Blogs</Button> </Link>
                        <Link to={ `/Dashboard/MakeAdmin` }> <Button variant="text">Make Admin</Button> </Link>
                        <Link to={ `/Dashboard/ManageProducts` }> <Button variant="text">Manage Blogs</Button> </Link>
                    </ButtonGroup>

                </Box>

                : <ButtonGroup
                    className="btn-group"
                    orientation="vertical"
                    aria-label="vertical outlined button group"
                >
                    {/* For User */ }
                    <h5>Use Panel</h5>

                    <Link to="/"><Button variant="text">Back To Home</Button> </Link>
                    <Link to={ `/Dashboard/DashboardHome` }> <Button variant="text">Dashboard</Button>  </Link>
                    <Link to={ `/Dashboard/Pay` }> <Button variant="text">Pay</Button> </Link>
                    <Link to={ `/Dashboard/MyOrders` }> <Button variant="text">My Orders</Button> </Link>
                    <Link to={ `/Dashboard/Review` }> <Button variant="text">Review</Button> </Link>
                </ButtonGroup>
            }
            <br />

            <>
                { user?.email ?
                    <button onClick={ logOut } className="btn btn-light">LogOut </button> :
                    <Link className="nav-link active" aria-current="page" to="/Login">Login</Link>
                }
                <span className="text-danger">
                    <br />
                    <small>{ user?.displayName }</small>
                </span>
            </>
        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={ { display: 'flex' } }>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={ {
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                } }
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={ handleDrawerToggle }
                        sx={ { mr: 2, display: { sm: 'none' } } }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Welcome Dear { user?.displayName }!!
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={ { width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
                aria-label="mailbox folders"
            >
                <Drawer
                    className="drawer-bg"
                    container={ container }
                    variant="temporary"
                    open={ mobileOpen }
                    onClose={ handleDrawerToggle }
                    ModalProps={ {
                        keepMounted: true, // Better open performance on mobile.
                    } }
                    sx={ {
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    } }
                >
                    { drawer }
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={ {
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    } }
                    open
                >
                    { drawer }
                </Drawer>
            </Box>
            {/*   <Routes>
                <Route path="/DashboardHome" element={ <PrivateRoute><DashboardHome /></PrivateRoute> } />

                <Route path="/Dashboard/ManageAllOrders" element={ <AdminRoute><ManageAllOrders /></AdminRoute> } />
                <Route path="/Dashboard/AddAProduct" element={ <AdminRoute><AddAProduct /></AdminRoute> } />
                <Route path="/Dashboard/makeadmin" element={ <AdminRoute><MakeAdmin /></AdminRoute> } />
                <Route path="/Dashboard/ManageProducts" element={ <AdminRoute><ManageProducts /></AdminRoute> } />
                <Route path="/Dashboard/pay" element={ <PrivateRoute><Pay /></PrivateRoute> } />
                <Route path="/Dashboard/MyOrders" element={ <PrivateRoute><MyOrders /></PrivateRoute> } />
                <Route path="/Dashboard/Review" element={ <PrivateRoute><Review /></PrivateRoute> } />
            </Routes> */}
            <Outlet />
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
