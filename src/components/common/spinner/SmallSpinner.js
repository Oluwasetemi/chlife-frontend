import CircularProgress from '@material-ui/core/CircularProgress';
import React from 'react';
// import PropTypes from 'prop-types'
import styled from 'styled-components';

const Wrapper = styled.div`
		background-color: transparent;
	.MuiCircularProgress-indeterminate {
		width: 15px !important;
		height: 15px !important;
		color: ${(props) => props.theme.color.brand_02};
	}
`;

function SmallSpinner() {
	return (
		<Wrapper>
			<CircularProgress />
		</Wrapper>
	);
}

SmallSpinner.propTypes = {

};

export default SmallSpinner;
