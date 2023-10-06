import React from 'react';
import { Container, Row } from 'reactstrap';
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import Widgets from './Widgets';
import TicketsData from './TicketsData';

const ListView = () => {
    document.title="AI/ML Solutions | Plaine - Unleashing Innovation with Artificial Intelligence";

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>                    
                    <BreadCrumb title="Support Ticket" pageTitle="Dashboards" />
                    <Row>
                        <Widgets />
                    </Row>
                    <TicketsData />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ListView;