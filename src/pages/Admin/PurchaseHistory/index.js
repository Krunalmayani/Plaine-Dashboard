import React from 'react';
import {  Container, Col, Row } from 'reactstrap';

import PurchaseHistory from './PurchaseHistory';

function index(props) {
    return (
        <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Row>
                            <Col>
                                <Row>
                                    <PurchaseHistory/>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
    );
}

export default index;