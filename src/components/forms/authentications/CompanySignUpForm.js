import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { registerCompany } from '../../../store/actions/userActions';
import AuthFormLayout from './AuthFormLayout';
import { TextInput, PasswordInput } from '../../common/inputs';
import { Grid } from '@material-ui/core';
import styled from 'styled-components';
import Button from '../../common/Button';
import { onBoardCompanyValidator } from '../validation';
import { Link } from 'react-router-dom';


const Wrapper = styled.div`
	.submit {
		padding-top: 4rem;
		display: flex;
		justify-content: center;
	}
	.info{
		text-align: center;
		font-family: Sofia;
font-size: 1.4rem;
line-height: 2.5rem;
color: ${props => props.theme.color.ui_05};
padding-top: 3rem;
font-weight: bold;
span{
	a{
		color: ${props => props.theme.color.brand_02};
	text-decoration: underline;
	}
}
	}
`;


function CompanySignUpForm({history, registerCompany}) {
	const [firstName, setFirstName] = useState('');
	const [lastName, setLastName] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [organizationName, setOrganizationName] = useState('');
	const [organizationEmail, setOrganizationEmail] = useState('');
	const [companyWebsite, setCompanyWebsite] = useState('');
	const [companyAddress, setCompanyAddress] = useState('');
	const [representativeEmail, setRepresentativeEmail] = useState('');
	const [jobTitle, setJobTitle] = useState('');
	const [errors, setErrors] = useState({});

	const onFormSubmit = () => {
		setErrors({});
		const data = { firstName, lastName, organizationName, password, password2, organizationEmail, representativeEmail, jobTitle };
		const { isValid, errors } = onBoardCompanyValidator(data);

		if (!isValid) {
			return	setErrors(errors);
		}

		const company = { firstName, lastName, organizationName, password, organizationEmail, representativeEmail, jobTitle, organizationSize: 4 };
		if (companyAddress) company.companyAddress = companyAddress;
		if (companyWebsite) company.companyWebsite = companyWebsite;

		registerCompany(company, history);
	};

	return (
		<Wrapper>

			<AuthFormLayout showFormAgreement={false} >
				<div>

					<Grid container spacing={2} justify="space-between">
						<Grid item xs={12} sm={6}>
							<TextInput
								label="First Name"
								placeholder="Type here..."
								value= {firstName}
								onChange={setFirstName}
								error={errors.firstName}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextInput
								label="Last Name "
								value= {lastName}
								placeholder="Type here..."
								onChange={setLastName}
								error={errors.lastName}
							/>
						</Grid>
					</Grid>
					<Grid container spacing={2} justify="space-between">
						<Grid item xs={12} sm={6}>
							<TextInput
								label="Job Title (Description)"
								value= {jobTitle}
								placeholder="Type here..."
								onChange={setJobTitle}
								error={errors.jobTitle}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextInput
								placeholder='example@address.com'
								label="Representative Email"
								value={representativeEmail}
								type="email"
								onChange={setRepresentativeEmail}
								error={errors.representativeEmail}
							/>
						</Grid>
					</Grid>

					<Grid container  spacing={2}>
						<Grid item xs={12} sm={6}>
							<TextInput
								label="Organization Name"
								value= {organizationName}
								placeholder="Type here..."
								onChange={setOrganizationName}
								error={errors.organizationName}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<TextInput
								label="Company Website (Optional)"
								value= {companyWebsite }
								onChange={setCompanyWebsite }
								placeholder="Type here..."
								error={errors.companyWebsite}
							/>
						</Grid>
					</Grid>

					<Grid container>
						<Grid item xs={12} sm={12}>
							<TextInput
								label="Company’s Email"
								value={organizationEmail}
								type="email"
								onChange={setOrganizationEmail}
								placeholder="Type here..."
								error={errors.organizationEmail}
							/>
						</Grid>
					</Grid>
					<Grid container>
						<Grid item xs={12} sm={12}>
							<TextInput
								label="Company’s Address (Optional)"
								value={companyAddress}
								onChange={setCompanyAddress}
								placeholder="Type here..."
								error={errors.companyAddress}
							/>
						</Grid>
					</Grid>

					<Grid container spacing={2} justify="space-between">
						<Grid item xs={12} sm={6}>
							<PasswordInput
								label="Password"
								value={password}
								onChange={setPassword}
								error={errors.password}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<PasswordInput
								label="Confirm Password"
								value={password2}
								onChange={setPassword2}
								error={errors.password2}
							/>
						</Grid>

					</Grid>
					<div className="submit">
						<Button theme="darkGreen" onClick={onFormSubmit} style={{width: '100%'}}>Register</Button>
					</div>

				</div>
				<p className="info">Already have an account? <span> <Link to ='/login'>Log In</Link></span> </p>

			</AuthFormLayout>

		</Wrapper>
	);
}

CompanySignUpForm.propTypes = {
	history: PropTypes.object.isRequired,
	registerCompany: PropTypes.func.isRequired
};

export default connect(null, {registerCompany})(CompanySignUpForm);
