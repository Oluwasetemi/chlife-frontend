import React from 'react';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import WelcomeBanner from '../../components/dashboard/dashboard_home/WelcomeBanner';
import PreliminaryAssessment from '../../components/dashboard/dashboard_home/PreliminaryAssessment';
import Grid from '@material-ui/core/Grid';
import GetStartedCard from '../../components/dashboard/dashboard_home/GetStartedCard';
import LeaderboardCard from '../../components/dashboard/dashboard_home/LeaderboardCard';
import ProgressSection from '../../components/dashboard/common/ProgressSection';
import styled from 'styled-components';

const Wrapper = styled.div`
.content{
  padding: 2rem;
}
`;


const DashboardHome2 = () => {


	return (
		<DashboardLayout>
			<Wrapper>
				<main className="content">
					<WelcomeBanner />
					<Grid container spacing={3}>
						<Grid item xs={6}>
							<PreliminaryAssessment />
							<ProgressSection />
							<GetStartedCard />
						</Grid>
						<Grid item xs={6}>
							<LeaderboardCard />
						</Grid>
					</Grid>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
};

export default DashboardHome2;
