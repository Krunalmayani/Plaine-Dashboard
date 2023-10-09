import React from 'react';
import { Container } from 'reactstrap';
import Models from './Models';
import BreadCrumb from '../../Components/Common/BreadCrumb';

const ModelsDetails = () => {
    document.title = "AI/ML Solutions | Plaine - Unleashing Innovation with Artificial Intelligence";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Models" pageTitle="Dashboards" />
                    <Models />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ModelsDetails;