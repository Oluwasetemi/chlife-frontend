import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { useLocation, withRouter } from 'react-router-dom';
import styled from 'styled-components';
import {
	removeEmployee,
	resendEmployeeInvite,
	suspendEmployee,
	unSuspendEmployee
} from '../../../store/actions/employeeActions';
import Button from '../../common/Button';
import Modal from '../common/Modal';

const Wrapper = styled.div`
	.pd {
		padding-bottom: 4rem;
	}
	.trigger {
		text-decoration-line: underline;
		cursor: pointer;
		position: relative;
		&:hover .tooltiptext {
			visibility: visible;
		}
		.tooltiptext {
			visibility: hidden;
			width: 112px;
			background: rgba(243, 121, 32, 0.05);
			border: 1px solid ${(props) => props.theme.color.ui_08};
			color: ${(props) => props.theme.color.text_05};
			text-align: center;
			border-radius: 6px;
			padding: 0;
			position: absolute;
			z-index: 1;
			left: -83px;
			top: 30px;
		}
	}
	.select {
		.flex {
			justify-content: space-between;
			padding-bottom: 2rem;
			p {
				@media screen and (max-width: ${(props) =>
		props.theme.breakpoint.sm}) {
				}
			}
		}
	}
	.select-input {
		font-weight: 300;
		line-height: 2.2rem;
		color: ${(props) => props.theme.color.ui_05};
	}
	.pd {
		button {
			width: 100% !important;
		}
	}
`;

const Employee = ({
	employee,
	suspendEmployee,
	unSuspendEmployee,
	resendEmployeeInvite,
	history,
	removeEmployee,
}) => {
	const location = useLocation();
	const { _id, name, department, email, branch, suspended } = employee;
	const date = employee['DATE CREATED'];
	const [show, setShow] = React.useState(false);

	const showModal = () => {
		setShow(true);
	};

	const hideModal = () => {
		setShow(false);
	};

	return (
		<Wrapper>
			<Modal
				show={show}
				handleClose={hideModal}
				position="modal-right"
				heading={<span> View Employee</span>}
			>
				<div className="select">
					<div className="flex">
						<p>Employee Name</p>
						<p className="bold">{name && name}</p>
					</div>
					<div className="flex">
						<p>Department</p>
						<p className="bold">{department && department}</p>
					</div>
					<div className="flex">
						<p>Branch</p>
						<p className="bold">{branch && branch}</p>
					</div>
					<div className="flex">
						<p>Email Address</p>
						<p className="bold">{email && email}</p>
					</div>
					<div className="flex">
						<p>Date Created</p>
						<p className="bold">{date && date}</p>
					</div>
				</div>
				<Grid container>
					<Grid item xs={12} className="pd">
						{suspended ? (
							<Button
								theme="darkGreen"
								text="Unsuspend Employee"
								onClick={() => unSuspendEmployee(_id)}
							/>
						) : (
							<Button
								theme="darkGreen"
								text="Suspend Employee"
								onClick={() => suspendEmployee(_id)}
							/>
						)}
					</Grid>
					{location?.pathname === '/employees/pending' && (
						<Grid item xs={12} className="pd">
							<Button
								theme="darkGreen"
								text="Resend Invite"
								onClick={() =>
									resendEmployeeInvite(_id, history)
								}
							/>
						</Grid>
					)}
					<Grid item xs={12} className="pd">
						<Button
							theme="pinkBtn"
							text="Remove Employee"
							onClick={() => removeEmployee(_id, history)}
						/>
					</Grid>
				</Grid>
			</Modal>
			<p className="trigger" onClick={showModal}>
				View <span className="tooltiptext">click to view employee</span>
			</p>
		</Wrapper>
	);
};

Employee.propTypes = {
	employee: PropTypes.object.isRequired,
	suspendEmployee: PropTypes.func.isRequired,
	resendEmployeeInvite: PropTypes.func.isRequired,
	removeEmployee: PropTypes.func.isRequired,
	unSuspendEmployee: PropTypes.func.isRequired,
	history: PropTypes.object.isRequired,
};

export default connect(null, {
	suspendEmployee,
	unSuspendEmployee,
	removeEmployee,
	resendEmployeeInvite,
})(withRouter(Employee));
