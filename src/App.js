import React from 'react';
import {
    Link, Route, Switch, BrowserRouter as Router,
} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from './components/home';
import Login from './components/login';
import PrivateRoute from './auth/PrivateRoute';


const Apps = () => {
    return (
        <Router>
            <div>
                <nav className='navbar navbar-expand navbar-dark bg-dark' >
                    <ul className="navbar-nav ml-auto justify-content-between" >

                        <li className="nav-item" >
                            <Link to="/home">Home</Link>
                        </li>
                        <li className="nav-item" >
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>

                <Switch>
                    {/* <Route exact component={<PrivateRoute />}>
                        <Route exact path="/home" element={<Home />} />
                    </Route>
                    <Route exact component={<PrivateRoute />}>
                        <Route exact path="/login" element={<Login />} />
                    </Route> */}
                    <Route  component={Login}  path="/login"/>
                  
                  <PrivateRoute path="/home">
                    <Home />
                  </PrivateRoute>


                </Switch>
            </div>
        </Router>
    );
}

export default Apps;
