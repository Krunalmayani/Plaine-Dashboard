import React from 'react';
import BreadCrumb from '../../../../Components/Common/BreadCrumb';
import { Container } from 'reactstrap';
import List from './List';

const Project = () => {
    document.title = "AI/ML Solutions | Plaine - Unleashing Innovation with Artificial Intelligence";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Project" pageTitle="Dashboards" />
                    <List />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default Project;