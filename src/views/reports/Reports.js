import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Button from '../../components/common/Button';
import Table from '../../components/dashboard/common/Table';
import { tableConstants } from '../../components/dashboard/report/tableConstant';
import { tableConstants as tableConstantAdminCompany } from '../../components/dashboard/report/tableConstantAdminCompany';
import DashboardLayout from '../../components/layouts/dashboardLayout/DashboardLayout';
import {
	downloadAdminReportPdf,
	downloadCompanyReportPdf,
	getAdminReports,
	getCompanyReports,
	getReports
} from '../../store/actions/reportActions';
import { sortTableData } from '../../utils/helper';

const Wrapper = styled.div`
	.paper {
		background: ${(props) => props.theme.color.text_03};
		box-shadow: 20px 12px 20px rgba(233, 233, 233, 0.25);
		border-radius: 0px;
		padding: 2rem;
		display: grid;
		grid-template-columns: max-content max-content;
		justify-content: space-between;
		align-items: center;
		.heading {
			font-weight: bold;
			line-height: 1.6rem;
			color: ${(props) => props.theme.color.text_05};
		}
	}
`;

const Reports = ({
	reports,
	isLoading,
	getReports,
	getCompanyReports,
	getAdminReports,
	name,
	type,
	downloadAdminReportPdf,
	downloadCompanyReportPdf,
}) => {
	React.useEffect(() => {
		type === 'ADMIN' && getAdminReports();
		type === 'SUPERADMIN' && getAdminReports();
		type === 'COMPANY' && getCompanyReports();
		type === 'INDIVIDUAL' && getReports();
		type === 'EMPLOYEE' && getReports();
	}, [getReports, type, getAdminReports, getCompanyReports]);

	const adminKey = {
		report_id: '_id',
		name: 'Name',
		report_ts: 'Date Taken',
	};

	const employeeKey = {
		updatedAt: 'Date Taken',
		reportId: '_id',
	};
	const sortReportData = (reports, type) => {
		if (type === 'INDIVIDUAL' || type === 'EMPLOYEE') {
			sortTableData(reports, employeeKey, (report) => {
				return (report.Name = name);
			});
			return reports.filter((report) => report._id !== null);
		} else {
			return sortTableData(reports, adminKey);
		}
	};

	return (
		<Wrapper>
			<DashboardLayout whatPage="Reports">
				<Paper className="paper">
					<h1 className="heading">Reports</h1>
					{type === 'ADMIN' && (
						<Button
							text="Download Report"
							theme="green"
							onClick={downloadAdminReportPdf}
						/>
					)}
					{type === 'SUPERADMIN' && (
						<Button
							text="Download Report"
							theme="green"
							onClick={downloadAdminReportPdf}
						/>
					)}
					{type === 'COMPANY' && (
						<Button
							text="Download Report"
							theme="green"
							onClick={downloadCompanyReportPdf}
						/>
					)}
				</Paper>
				{isLoading ? (
					<div>Loading ...</div>
				) : reports.length < 1 ? (
					<div>No Report Found</div>
				) : type === 'EMPLOYEE' || type === 'INDIVIDUAL' ? (
					<Table
						cols={tableConstants()}
						data={sortReportData(reports, type)}
					/>
				) : (
					<Table
						cols={tableConstantAdminCompany()}
						data={sortReportData(reports, type)}
					/>
				)}
			</DashboardLayout>
		</Wrapper>
	);
};

Reports.propTypes = {
	reports: PropTypes.array.isRequired,
	isLoading: PropTypes.bool.isRequired,
	getReports: PropTypes.func.isRequired,
	getAdminReports: PropTypes.func.isRequired,
	getCompanyReports: PropTypes.func.isRequired,
	downloadAdminReportPdf: PropTypes.func.isRequired,
	downloadCompanyReportPdf: PropTypes.func.isRequired,
	type: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => {
	const { reports, isLoading } = state.report;
	const { name, type } = state.user.user;
	return { reports, name, type, isLoading };
};

export default connect(mapStateToProps, {
	getReports,
	getCompanyReports,
	getAdminReports,
	downloadAdminReportPdf,
	downloadCompanyReportPdf,
})(Reports);
