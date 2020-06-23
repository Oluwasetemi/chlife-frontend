import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthFormLayout from './AuthFormLayout';
import { TextInput, SelectInput, PasswordInput } from '../../common/inputs';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import Button from '../../common/Button';
import { loginUser } from '../../../store/actions/userActions';
import { loginValidator } from '../validation';

const Wrapper = styled.div`
	.submit {
		margin-top: 1.6rem;
		display: flex;
		justify-content: center;
	}
`;

function LoginForm({history, loginUser}) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [accountType, setAccountType] = useState('');
	const [errors, setErrors] = useState({});

	const onFormSubmit = (event) => {
		event.preventDefault();
		setErrors({});
		const user = { email, password, accountType };
		const { isValid, errors } = loginValidator(user);

		if (!isValid) {
			return setErrors(errors);
		}

		loginUser(user, history);
	};

	return (
		<Wrapper>
			<AuthFormLayout
				title="Log in to your Account"
				description="Inspiring wholesome harmony for the mind, body and spirit, for everyone, everywhere."
				showFormAgreement={false}
			>
				<div>


					<Grid container>
						<Grid item xs={12} sm={12}>
							<TextInput
								label="Enter your email address"
								value= {email}
								onChange={setEmail}
								placeholder="Type here..."
								error={errors.email}
							/>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs={12} sm={12}>
							<PasswordInput
								label="Enter Password"
								value= {password}
								onChange={setPassword}
								options={[{ value: '', text: 'Select here' }]}
								error={errors.password}
							/>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs={12} sm={12}>
							<SelectInput
								label="Account Type"
								value= {accountType}
								onChange={setAccountType}
								options={[{value:'', text: 'Select here'}]}
							/>
						</Grid>
					</Grid>

					<div className="submit">
						<Button theme="yellow" onClick={onFormSubmit} style={{width: '100%'}}>Login</Button>
					</div>
				</div>
			</AuthFormLayout>
		</Wrapper>
	);
}

LoginForm.propTypes = {
	history: PropTypes.object.isRequired,
	loginUser: PropTypes.func.isRequired
};

export default connect(null, {loginUser})(LoginForm);

