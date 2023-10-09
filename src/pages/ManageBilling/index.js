import React from 'react';
import { Col, Container, Row } from 'reactstrap';

//import Components

import BreadCrumb from '../../Components/Common/BreadCrumb';

import HistoryList from './HistoryList';


const DashboardAnalytics = () => {
    document.title = "AI/ML Solutions | Plaine - Unleashing Innovation with Artificial Intelligence"
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Payment History" pageTitle="Dashboards" />

                    <HistoryList />



                </Container>
            </div>
        </React.Fragment>
    );
};

export default DashboardAnalytics;