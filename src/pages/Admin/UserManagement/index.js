import React from 'react';
import {  Container, Col, Row } from 'reactstrap';

import Management from './Management';

function index(props) {
    return (
        <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <Row>
                            <Col>
                                <Row>
                                    <Management/>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </React.Fragment>
    );
}

export default index;