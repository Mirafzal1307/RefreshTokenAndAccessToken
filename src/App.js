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
        // <Router>
        //     <Switch  >
        //         <div>
        //             <nav className='navbar navbar-expand navbar-dark bg-dark' >
        //                 <Link to={"/"} className="navbar-brand" >
        //                     bezKoder
        //                 </Link>
        //                 <div className="navbar-nav ml-auto">
        //                     <li className="nav-item">
        //                         <Link to={"/login"} className="nav-link">
        //                             Login
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link to={"/home"} className="nav-link">
        //                             Home
        //                         </Link>
        //                     </li>
        //                 </div>
        //             </nav>
        //             <div className='container mt-3' >

        //                 <Route  path={["/", "/home"]} element={
        //                     <PrivateRoute>
        //                         <Home />
        //                     </PrivateRoute>
        //                 } />

        //                 <Route  path="/login" element={
        //                     <PrivateRoute>
        //                         <Login />
        //                     </PrivateRoute>
        //                 } />



        //             </div>

        //         </div>

        //     </Switch>
        // </Router>
        <Router>
            <div>
                <nav>
                    <ul>
                       
                        <li>
                            <Link to="/home">Home</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact component={<PrivateRoute />}>
                        <Route exact path="/home" element={<Home />} />
                        {/* <Home /> */}
                    </Route>
                    <Route exact component={<PrivateRoute />}>
                        <Route exact path="/login" element={<Login />} />
                        {/* <Home /> */}
                    </Route>
                    {/* <Route path="/login">
                        <Login />
                    </Route> */}

                </Switch>
            </div>
        </Router>
    );
}

export default Apps;
