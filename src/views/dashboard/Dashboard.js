import React from 'react';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import IndividualHome from './IndividualHome';
import AdminHome from './AdminHome';
import CompanyHome from './CompanyHome';

import dashboardType from './dashboardType';

const Dashboard = () => {
	return (
		<DashboardLayout whatPage="Dashboard">
			{dashboardType === 'INDIVIDUAL' && <IndividualHome /> }
			{dashboardType === 'COMPANY' && <CompanyHome /> }
			{dashboardType === 'ADMIN' && <AdminHome /> }
		</DashboardLayout>
	);
};

export default Dashboard;
