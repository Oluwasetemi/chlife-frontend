import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable */
class NavLink extends React.Component {
	render() {
		const isActive =
      this.context.router.route.location.pathname === this.props.to;
		const className = isActive ? 'active' : '';

		return (
			<Link className={className} {...this.props}>
				{this.props.children}
			</Link>
		);
	}
}

NavLink.contextTypes = {
	router: PropTypes.object,
};

export default NavLink;
