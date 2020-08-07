import React from 'react';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import SettingsNavSection from '../../../../components/dashboard/settings/SettingsNavSection';
import Divider from '@material-ui/core/Divider';


const Wrapper = styled.div`
.text{
    font-size: 1.6rem;
    line-height: 1.6rem;
    color: ${(props) => props.theme.color.ui_05};
}
.heading{
    color: ${(props) => props.theme.color.ui_05};
    h1{
        font-weight: bold;
        font-size: 24px;    
        line-height: 24px;
        margin: 1rem 0 1.6rem 0;
    }
   
}
.settings-body{
    margin-top: 4rem;
    padding: 4.2rem;
    .submit>div{
        margin-top: 4rem;
    }
    .gridy{
        display: grid;
    grid-template-columns: 1fr 100%;
    grid-gap: 4rem;
    }
}
`;

const Sidebar = ({children}) => {

	const tabsItems = [
		{ icon: 'account', text: 'Account', link: '/settings/account' },
		{ icon: 'password', text: 'Password', link: '/settings/password' },
		{ icon: 'help', text: 'Help', link: '/settings/help' },
	];
	return (
		<DashboardLayout>
			<Wrapper>
				<div className="heading">
					<h1>Settings</h1>
					<p className='text'>Change your profile and account settings</p>
				</div>
				<Paper className="settings-body">
					<Grid container spacing={3}>
						<Grid item  sm={3}>
							<SettingsNavSection title="TABS" items={tabsItems} />
						</Grid>
						<Grid item   sm={8}>
							<div className="gridy">
								<Divider orientation="vertical" flexItem />

								<div>{children}</div>

							</div>
						</Grid>
					</Grid>
				</Paper>
			</Wrapper>

		</DashboardLayout>
	);
};
Sidebar.propTypes = {
	children: PropTypes.any.isRequired,
};


export default Sidebar;
