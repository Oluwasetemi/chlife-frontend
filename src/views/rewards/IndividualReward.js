import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid, Paper, Divider } from '@material-ui/core';
import { getRewards } from '../../store/actions/rewardActions';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import WelcomeCard from '../../components/dashboard/dashboard_home/WelcomeBanner';
import LeaderboardCard from '../../components/dashboard/dashboard_home/LeaderboardCard';
import { convertDate } from '../../utils/helper';

const Wrapper = styled.div`
.mt	{
  margin-top: -27px;
  padding-bottom: 1rem;
}
.sub-heading	{
	font-size: 1.6rem;
	line-height: 2.5rem;
	letter-spacing: 0.2px;
	color: ${(props) => props.theme.color.ui_05};
	padding-bottom: 3rem;
	font-weight: bold;
}
.grid-container	{
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
	grid-gap: 4rem;
	@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
		grid-template-columns: repeat(auto-fill,minmax(250px,1fr));
		justify-items: center;
	}
}
.paperCard {
  border-radius: 10px;
  box-shadow: none;
  padding: 2rem;
  margin-bottom: 3rem;
  background: rgba(243, 121, 32, 0.02);
    border: 1px solid ${(props) => props.theme.color.ui_08};
}
.MuiDivider-root	{
  margin: 1rem 0;
  border: -0.5px solid ${(props) => props.theme.color.text_05};
}

.subHeading	{
	justify-content:start;
  p	{
    padding-left: .8rem;
		font-weight: bold;
		font-size: 2rem;
		line-height: 2rem;
		letter-spacing: 0.2px;
		color: ${(props) => props.theme.color.ui_05};
	}
}
.grid	{
   display: grid;
   grid-template-columns: 1fr 1fr;
	}
.detail	{
   .info	{
      font-size: 1.3rem;
      line-height: 2.5rem;
      letter-spacing: 0.2px;
      color: ${(props) => props.theme.color.ui_05};
      padding-bottom: 2rem;
   }
}
.grid	{
   .bold	{
      font-weight: bold;
      font-size: 1.1rem;
      line-height: 1.1rem;
      letter-spacing: 0.2px;
      text-transform: uppercase;
			color: ${(props) => props.theme.color.ui_06};
			padding-bottom: 1rem;
   	}
   .date{
      font-size: 1.4rem;
      line-height: 1.3rem;
      letter-spacing: 0.2px;
      color: ${(props) => props.theme.color.ui_05};
   }
}
`;
function IndividualRewards({ getRewards, reward, isLoading}) {
	React.useEffect(() => {
		getRewards();
	}, [getRewards]);

	return (
		<Wrapper>
			<DashboardLayout whatPage="Rewards">
				<WelcomeCard
					emoji="🎉"
					detail="Earn set employee rewards from your company when you top the leaderboard at the close of a period."
				/>
				<p className="info mt">
          Get rewards from your company by engaging activities on Choose Life.
          You get rewards every time you finish a HRA and other activities
				</p>
				<p className="sub-heading cap ">Running Rewards</p>
				{
					isLoading ?
						<div>Loading ...</div> :
						Object.keys(reward).length === 0 && reward.constructor === Object ?
							<h6>No Current running reward</h6> :
							<Grid container>
								<Grid item xs={9}>
									<Paper className="paperCard">
										<div>
											<div className="subHeading flex">
												<p>{reward.title}</p>
											</div>
											<Divider />
											<div className="detail">
												<p className="info">
													{reward.description}
												</p>
												<div className="sub-info">
													<div>
														<div className="grid">
															<p className="bold"> Start Date </p>
															<p className="date">{convertDate(reward.startDate)}</p>
														</div>
														<div className="grid">
															<p className="bold">End Date</p>
															<p className="date">{convertDate(reward.endDate)}</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</Paper>
								</Grid>
							</Grid>
				}
				<Link to="/rewards/leaderboard" className="leaderboard">
					<p className="sub-heading">Leaderboard</p>
					<div className="grid-container">
						<LeaderboardCard />
					</div>
				</Link>
			</DashboardLayout>
		</Wrapper>
	);
}

IndividualRewards.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	reward: PropTypes.array.isRequired,
	getRewards: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
	const { isLoading, rewards } = state.reward;
	const { openReward } = rewards;
	return { reward: openReward, isLoading };
};

export default connect(mapStateToProps, { getRewards })(
	IndividualRewards
);
