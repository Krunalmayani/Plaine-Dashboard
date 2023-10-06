import React from 'react';
import { Col, Container, Row } from 'reactstrap';

const Footer = () => {
    return (
        <React.Fragment>
            <footer className="footer">
                <Container fluid>
                    <Row className='text-center'>
                        <Col sm={12}>
                            © {new Date().getFullYear()} Copyrights by <a href="#" style={{ color: '#878a99' }} class="text-decoration-underline">Plaine.</a> All Rights Reserved.
                        </Col>
                    </Row>
                </Container>
            </footer>
        </React.Fragment>
    );
};

export default Footer;