import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import Home from '../views/Home';
import  About from '../views/About';

/*
import  ContactUs from '../views/ContactUs';
import  FitnessFair from '../views/FitnessFair';
import  Wellness from '../views/Wellness'; */
// import  SignUp from "../pages/SignUp"


const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			{/*
			<Route path="/contactUs" component={ContactUs} />
			<Route path="/fitnessFair" component={FitnessFair} />
			<Route path="/wellness" component={Wellness} /> */}
			{/* <Route path="/signUp" component={SignUp} /> */}
		</Switch>
	</Router>
);

export default Routes;