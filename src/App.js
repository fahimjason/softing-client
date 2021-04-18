import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Login from './components/Login/Login';
import AddService from './components/Service/AddService/AddService';
import { createContext, useState } from 'react';
import AddReview from './components/Review/AddReview/AddReview';
import PrivateRoute from './components/Login/PrivateRoute/PrivateRoute';
import AddUser from './components/User/AddUser/AddUser';
import AllServices from './components/Service/AllServices/AllServices';
import ServiceOrder from './components/Service/ServiceOrder/ServiceOrder';
import AllOrders from './components/Order/AllOrders/AllOrders';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/booking/:serviceID">
            <ServiceOrder />
          </Route>
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
          <PrivateRoute path="/bookings">
            <AllOrders />
          </PrivateRoute>
          <PrivateRoute path="/addService">
            <AddService />
          </PrivateRoute>
          <PrivateRoute path="/manage">
            <AllServices />
          </PrivateRoute>
          <PrivateRoute path="/addReview">
            <AddReview />
          </PrivateRoute>
          <PrivateRoute path="/addUser">
            <AddUser />
          </PrivateRoute>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>

  );
}

export default App;
