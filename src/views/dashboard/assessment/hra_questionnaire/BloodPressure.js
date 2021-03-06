import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import BloodPressureForm from '../../../../components/dashboard/assessment/hra_questionnaire/BloodPressureForm';
import DashboardLayout from '../../../../components/layouts/dashboardLayout/DashboardLayout';
import QuestionnaireLayout from '../../../../components/layouts/questionnaireLayout/Questionnaire';
import { getQuestions } from '../../../../store/actions/hraActions';
// import smallImg from '../../../../assets/Activity.svg';

const Wrapper = styled.div`
.content {
	padding: 2rem;
	@media screen and ( max-width: ${props => props.theme.breakpoint.md}) {
		padding:0;	}
	  }
`;

function BloodPressure({ getQuestions, questions }) {
	React.useEffect(() => {
		getQuestions('BLOOD_PRESSURE');
	}, [getQuestions]);

	return (
		<DashboardLayout whatPage="Assessment">
			<Wrapper>
				<main className="content">
					<QuestionnaireLayout
						// Image={smallImg}
						percent='100'
						detail={questions.prompt || ''}
						heading="Health Risk Assessment"
						whatQuestion={'Blood Pressure & Cholesterol'}
					>
						<BloodPressureForm questions={questions.q || []} />

					</QuestionnaireLayout>
				</main>
			</Wrapper>
		</DashboardLayout>
	);
}

BloodPressure.propTypes = {
	getQuestions: PropTypes.func.isRequired,
	questions: PropTypes.any.isRequired,
};

const mapStateToProps = (state) => {
	const questions = state.hra.questions.BLOOD_PRESSURE;
	return { questions: questions || [] };
};

export default connect(mapStateToProps, { getQuestions })(BloodPressure);
