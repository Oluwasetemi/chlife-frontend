import React from 'react';
import styled from 'styled-components';
import pinkFlower from '../../assets/pinkFlower.svg';
import yellowFlower from '../../assets/yellowFlower.svg';
import PreliminaryCard from '../../components/dashboard/common/PreliminaryCard';
import WelcomeBanner from '../../components/dashboard/dashboard_home/WelcomeBanner';

const Wrapper = styled.div`
	padding-top: 2rem;
	.heading {
		font-weight: bold;
		font-size: 2.4rem;
		line-height: 2.4rem;
		letter-spacing: -0.2px;
		color: ${(props) => props.theme.color.ui_05};
		padding-bottom: 2rem;
	}
	.grid-card {
		display: grid;
		grid-gap: 1rem;
		padding-bottom: 3rem;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
		}
	}
`;

const AdminHome = () => {
	return (
		<Wrapper>
			<main className="content">
				<h1 className="heading">Dashboard</h1>
				<WelcomeBanner />

				<h1 className="heading">Quick Summary</h1>
				<div className="grid-card">
					<PreliminaryCard
						btnValue="View Companies"
						cardInfo="Companies"
						btnTheme="deepYellowBtn"
						backgroundColor="orange"
						where={'/companies'}
						image={pinkFlower}
						details={
							'View all companies registered to Choose Life Platform'
						}
					/>

					<PreliminaryCard
						btnValue="View Reports"
						cardInfo={'Reports'}
						image={yellowFlower}
						where={'/reports'}
						btnTheme="yellowBtn"
						backgroundColor="yellow"
						details="Empowering you with the knowledge and opportunity to live the best life possible.."
					/>
				</div>
			</main>
		</Wrapper>
	);
};

export default AdminHome;
