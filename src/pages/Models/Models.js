import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CardHeader, Col, Input, Offcanvas, OffcanvasBody, Row } from 'reactstrap';

function Models(props) {

    //OffCanvas  
    const [isOpen, setIsOpen] = useState(false);

    const toggleOffCanvas = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            <CardHeader style={{ backgroundColor: "white", margin: "10px 0", borderRadius: "5px" }}>
                <Row className="justify-content-center mb-4">
                    <Col lg={6} className='mt-4'>
                        <Row className="g-2">
                            <Col>
                                <div className="position-relative mb-3">
                                    <Input type="text" className="form-control form-control-lg bg-light border-light" placeholder="Search here.." defaultValue="HSN Code Classifier" />
                                    <Link to="#" className="btn btn-link link-success btn-lg position-absolute end-0 top-0" onClick={toggleOffCanvas}><i className="ri-mic-fill"></i></Link>
                                </div>
                            </Col>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary btn-lg waves-effect waves-light"><i className="mdi mdi-magnify me-1"></i> Search</button>
                            </div>
                        </Row>
                    </Col>
                    <Col lg={12}>
                        <h5 className="fs-16 fw-bold text-center mb-0">Showing results for "<span className="text-primary fw-medium fst-italic">HSN Code Classifier</span> "</h5>
                    </Col>
                </Row>

                <Offcanvas isOpen={isOpen}
                    direction="top"
                    toggle={toggleOffCanvas}
                    tabIndex="-1"
                >
                    <OffcanvasBody>
                        <button type="button" className="btn-close text-reset float-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                            <div className="search-voice">
                                <i className="ri-mic-fill align-middle"></i>
                                <span className="voice-wave"></span>
                                <span className="voice-wave"></span>
                                <span className="voice-wave"></span>
                            </div>
                            <h4>Talk to me, what can I do for you?</h4>
                        </div>
                    </OffcanvasBody>
                </Offcanvas>
            </CardHeader>
        </React.Fragment>
    );
}

export default Models;