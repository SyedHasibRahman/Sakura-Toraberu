import './App.css';
import Home from './components/Home/Home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/Services/Services/Services';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Blogs from './components/Blogs/Blogs/Blogs';
import AboutUs from './components/AboutUs/AboutUs';
import Contactus from './components/Contactus/Contactus';
import Details from './components/Services/Details/Details';
import Login from './components/Auth/Login/Login';
import AuthProvider from './contexts/AuthProvider';
import PrivateRoute from './components/Auth/PrivateRoute/PrivateRoute';
import Registration from './components/Auth/Registration/Registration';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import DashboardHome from './components/Dashboard/DashboardHome/DashboardHome';
import AdminRoute from './components/Auth/AdminRoute/AdminRoute';
import AddAProduct from './components/Dashboard/Admin/AddAProduct/AddAProduct';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin/MakeAdmin';
import ManageProducts from './components/Dashboard/Admin/ManageProducts/ManageProducts';
import Pay from './components/Dashboard/Users/Pay/Pay';
import MyOrders from './components/Dashboard/Users/MyOrders/MyOrders/MyOrders';
import Review from './components/Dashboard/Users/Review/Review';
import ManageAllOrders from './components/Dashboard/Admin/ManageAllOrders/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/home" element={ <Home /> } />
            <Route path="/login" element={ <Login /> } />
            <Route path="/Registration" element={ <Registration /> } />

            <Route path="/Products" element={ <PrivateRoute><Services /></PrivateRoute> } />
            <Route path="/Blogs" element={ <Blogs /> } />
            <Route path="/AboutUs" element={ <AboutUs /> } />
            <Route path="/Contactus" element={ <Contactus /> } />
            <Route path="/Details/:_id" element={ <PrivateRoute><Details /></PrivateRoute> } />
            <Route path="/Dashboard/" element={ <PrivateRoute><Dashboard /></PrivateRoute> } >
              <Route path="/Dashboard/DashboardHome" element={ <PrivateRoute><DashboardHome /></PrivateRoute> } />

              <Route path="/Dashboard/ManageAllOrders" element={ <AdminRoute><ManageAllOrders /></AdminRoute> } />
              <Route path="/Dashboard/AddAProduct" element={ <AdminRoute><AddAProduct /></AdminRoute> } />
              <Route path="/Dashboard/makeadmin" element={ <AdminRoute><MakeAdmin /></AdminRoute> } />
              <Route path="/Dashboard/ManageProducts" element={ <AdminRoute><ManageProducts /></AdminRoute> } />
              <Route path="/Dashboard/pay" element={ <PrivateRoute><Pay /></PrivateRoute> } />
              <Route path="/Dashboard/MyOrders" element={ <PrivateRoute><MyOrders /></PrivateRoute> } />
              <Route path="/Dashboard/Review" element={ <PrivateRoute><Review /></PrivateRoute> } />
            </Route>
            <Route path="/MyOrders">
            </Route>
            <Route path="*" element={ <PageNotFound /> } />
          </Routes>
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
