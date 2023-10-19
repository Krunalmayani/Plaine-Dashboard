import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';

//import images
import avatar8 from "../../../../assets/images/users/avatar-8.jpg";
import avatar10 from "../../../../assets/images/users/avatar-10.jpg";
import avatar6 from "../../../../assets/images/users/avatar-6.jpg";
import avatar2 from "../../../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../../../assets/images/users/avatar-4.jpg";
import avatar7 from "../../../../assets/images/users/avatar-7.jpg";
import image4 from "../../../../assets/images/small/img-4.jpg";
import image5 from "../../../../assets/images/small/img-5.jpg";

//SimpleBar
import SimpleBar from "simplebar-react";

const Description = () => {
    return (
        <React.Fragment>
            <Row>
                <Col xl={9} lg={8}>
                    <Card>
                        <CardBody>
                            <div className="text-muted">

                                <div className="mt-auto">
                                    <div className="d-flex mb-2" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                        <div className="flex-shrink-0">
                                            <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-map-pin-2-line align-bottom"></i> <span style={{ color: "black", fontWeight: "bold" }}>Region: </span>London</div>
                                            <div><i style={{ color: "#878a99", fontSize: "16px" }} className="las la-server"></i> <span style={{ color: "black", fontWeight: "bold" }}>Server IP: </span>49.36.89.98</div>
                                            <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-cloud-line"></i> <span style={{ color: "black", fontWeight: "bold" }}>Cloud: </span>AWS</div>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <div style={{ justifyContent: "space-between" }}><i style={{ color: "#878a99", fontSize: "16px" }} className="las la-cog"></i> <span style={{ color: "black", fontWeight: "bold" }}>Configuration: </span><p style={{ paddingLeft: "5px" }}> 8 vCPU<br />12GB RAM<br />250GB SSD<br />($70/mo)</p></div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-3 border-top border-top-dashed mt-4">
                                    <Row>

                                        <Col lg={3} sm={6}>
                                            <div>
                                                <p className="mb-2 text-uppercase fw-medium fs-14">Deployed Date:</p>
                                                <h5 className="fs-15 mb-0">15 Sep, 2021</h5>
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div>
                                                <p className="mb-2 text-uppercase fw-medium fs-14">Status :</p>
                                                <div className="badge bg-success fs-12">Running</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="pt-3 border-top border-top-dashed mt-4">
                                    <h6 className="mb-3 fw-bold text-uppercase">Resources</h6>
                                    <Row className="g-3">
                                        <Col xxl={6} lg={6}>
                                            <a className='pe-4' target="_blank" href='https://jupyter.org/try-jupyter/retro/notebooks/?path=notebooks/Intro.ipynb'>
                                                <Button color="primary"> Launch Demo </Button>
                                            </a>
                                            <a target="_blank">
                                                <Button color="primary"> Launch App </Button>
                                            </a>
                                        </Col>
                                        <Col xxl={6} lg={6}>
                                            <a target="_blank" href='https://docs.jupyter.org/en/latest/'>
                                                <Button color="secondary"> Documents </Button>
                                            </a>
                                        </Col>
                                       
                                    </Row>
                                </div>
                            </div>
                        </CardBody>

                    </Card>

                </Col>

                <Col xl={3} lg={4}>
                    <Card>
                        <CardBody>
                            <h5 className="card-title mb-4">Categories</h5>
                            <div className="d-flex flex-wrap gap-2 fs-16">
                                <div className="badge fw-medium badge-soft-secondary">NLP</div>
                                <div className="badge fw-medium badge-soft-secondary">Healthcare</div>
                                <div className="badge fw-medium badge-soft-secondary">Finance</div>
                                <div className="badge fw-medium badge-soft-secondary">Data Visualization </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Description;