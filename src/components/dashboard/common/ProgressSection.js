import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../common/Button';
import CircularProgress from './CircularProgressWithLabel';
import LinearProgress from './LinearProgress';

const Wrapper = styled.div`
	margin-bottom: 5.9rem;
	.heading {
		display: flex;
		justify-content: space-between;
		margin-bottom: 3.8rem;
		padding: 0 2px;
		h1 {
			 18px;
			line-height: 24px;
			font-weight: 600;
			color: ${(props) => props.theme.color.text_01};
		}
		.null {
			border-bottom: 1px solid #d6d8d3;
			width: 301px;
			margin-bottom: 5px;
		}
	}
	.progress-section{
			h4{
				 16px;
				line-height: 24px;
				color:${props => props.theme.color.text_02};
				font-weight: normal;
			}
			h3{
				 14px;
				line-height: 24px;
				color: #605E5C;
				margin-bottom:2rem;
				font-weight: normal;
			}
	}
	.progress-indicator{
		display:flex;
		justify-content:space-between;
		align-items:center;
		#Lp{
				background-color:#D6D8D3;
				color:green;
		}
}
`;
function ProgressSection({percentageCompleted, link}) {

	return (
		<Wrapper>
			<div className="heading">
				<h1>Current Progress</h1>
				<div className="null"></div>
			</div>
			<div className="progress-section">
				<h4>Assessment Progress</h4>
				<div className="progress-indicator">
					<div style={{width:'88%'}}>
						<LinearProgress value={percentageCompleted} />
					</div>
					<div className="progress-indicator">
						<CircularProgress value={percentageCompleted} />
					</div>
				</div>
				<h3>Part I: Health</h3>
			</div>
			<Link to={link ? link : '/dashboard_home2'}>
				<Button value="Continue" theme="green">
					Continue
				</Button>
			</Link>
		</Wrapper>
	);
}

ProgressSection.propTypes = {
	percentageCompleted: PropTypes.number.isRequired,
	link: PropTypes.string
};

export default ProgressSection;
