import React from 'react';

import { Card, Container, Col, Row } from 'reactstrap';
import AdminDashboard from './AdminDashboard';


function index(props) {
    return (
        
            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Row>
                            <Col>
                                <Row>
                                    <AdminDashboard />
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
        
    );
}

export default index;