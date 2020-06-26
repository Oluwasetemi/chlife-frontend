import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';


import PrivateRoute from './PrivateRoute';
import Home from '../views/Home';
import About from '../views/About';
import Health from '../views/wellness/individual/Health';
import Fitness from '../views/wellness/individual/Fitness';
import Nutrition from '../views/wellness/individual/Nutrition';
import Lifestyle from '../views/wellness/individual/Lifestyle';
import IndividualSignUp from '../views/authentication/IndividualSignUp';
import CompanySignUp from '../views/authentication/CompanySignUp';
import Login from '../views/authentication/Login';
import BlogPost from '../views/blogParent/BlogPost';
import BlogPostDetail from '../views/blogParent/BlogPostDetail';
import Dashboard from '../views/Dashboard';



const Routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" component={Home} />
			<Route path="/about" component={About} />
			<Route path="/wellness/individual/health" component={Health} />
			<Route path="/wellness/individual/fitness" component={Fitness} />
			<Route path="/wellness/individual/nutrition" component={Nutrition} />
			<Route path="/wellness/individual/lifestyle" component={Lifestyle} />


			{/* Auth routes */}
			<PrivateRoute isAuth={false} path="/login" component={Login} />
			<PrivateRoute isAuth={false} path="/onboarding/individual" component=	{IndividualSignUp} />
			<PrivateRoute isAuth={false} path="/onboarding/company" component={CompanySignUp} />
			<PrivateRoute path="/dashboard" component={Dashboard} />


			{/* BLog route */}
			<Route path="/blogPost" component={BlogPost} />
			<Route path="/blogPostDetails" component={BlogPostDetail} />


		</Switch>
	</Router>
);

export default Routes;