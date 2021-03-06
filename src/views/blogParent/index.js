import PropTypes from 'prop-types';
import React from 'react';
// import { Paper } from '@material-ui/core';
// import avatar from '../../assets/avatarFemale.png';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Pagination from '../../components/blog/Pagination';
import Slider from '../../components/blog/Slider';
import Container from '../../components/common/Container';
import SEO from '../../components/common/SEO';
import AppLayout from '../../components/layouts/appLayout/AppLayout';
import Header from '../../components/layouts/appLayout/header/index2';
import { getBlogs } from '../../store/actions/blogActions';

const Wrapper = styled.div`
	.main {
		padding: 10rem 0 0 0;
	}
	.head h1 {
		font-size: 4rem;
		position: relative;
		line-height: 7.1rem;
		text-align: center;
		margin-bottom: 5rem;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			font-size: 3rem;
		}
	}
	.head h1::after {
		content: ' ';
		position: absolute;
		top: 82%;
		width: 50px;
		height: 5px;
		background-color: ${(props) => props.theme.color.text_08};
		border-radius: 14px;
		left: 50%;
		transform: translate(-50%, 0%);
	}
	.paper {
		background-image: url('https://res.cloudinary.com/dsqnyciqg/image/upload/f_auto/v1607309856/chooseLife/coverImageBlog_vdzjx6.png');
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		height: 350px;
		border-radius: 10px;
		margin-bottom: 4rem;
		color: ${(props) => props.theme.color.ui_01};
		padding: 109px 0 50px 91px;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			padding: 70px 0 20px 40px;
		}
	}
	.tag {
		font-weight: 100;
		width: fit-content;
		padding: 3px 20px;
		color: ${(props) => props.theme.color.text_03};
	}
	#yellow {
		background-color: rgba(247, 194, 54, 0.8);
	}
	.paper .title {
		font-size: 2rem;
		margin: 9px 0 3rem 0;
		width: 50%;
		@media screen and (max-width: ${(props) => props.theme.breakpoint.md}) {
			width: 69%;
		}
		@media screen and (max-width: ${(props) => props.theme.breakpoint.sm}) {
			width: 100%;
		}
	}
	.avatar img {
		width: 65px;
		height: 65px;
	}
	.avatar .text {
		font-size: 1.5rem;
		font-weight: 400;
		margin-top: 1rem;
	}
	.mid .title {
		font-size: 3rem;
		margin: 46px 0 31px 0px;
		color: ${(props) => props.theme.color.text_01};
		text-align: center;
	}
`;
function Blog({ getBlogs, blogs, isLoading, history }) {
	React.useEffect(() => {
		window.scrollTo(0, 0);
		getBlogs();
	}, [getBlogs]);
	return (
		<AppLayout header={<Header />} toAbout={() => {
			history.push('/#aboutUs');
		}} toPillar={() => history.push('/#pillar')}>
			<SEO title="Our Blog" />

			<Wrapper>
				<Container>
					<div className="main">
						<div className="head">
							<h1>Blog</h1>
							{/* <Paper className="paper">
								<p className="tag" id="yellow">
									Featured
								</p>
								<p className="title">
									Creating Remarkable Poster Prints Through 4 Color Poster
									Printing
								</p>
								<div className="avatar">
									<img src={avatar} alt="avatar-female" />
									<p className="text">Caleb Atkins</p>
								</div>
							</Paper> */}
						</div>
						<div className="mid">
							{/* 	<p className="title">Recent</p> */}
							<Pagination blogs={blogs} isLoading={isLoading} />
						</div>
					</div>
				</Container>
				<Slider />
			</Wrapper>
		</AppLayout>
	);
}

Blog.propTypes = {
	isLoading: PropTypes.bool.isRequired,
	getBlogs: PropTypes.func.isRequired,
	blogs: PropTypes.array.isRequired,
	history: PropTypes.any,
};

const mapStateToProps = (state) => {
	const { blogs, isLoading } = state.blog;
	return { blogs: blogs || {}, isLoading };
};
export default connect(mapStateToProps, { getBlogs })(Blog);
