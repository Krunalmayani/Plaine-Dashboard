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
                                <h6 className="mb-3 fw-bold text-uppercase">Description</h6>
                                <p>A web-based interactive computing environment for creating and sharing documents that contain live code, equations, visualizations, and narrative text.
                                    Technical Specifications</p>
                                <br /><br />

                                <h6 className="mb-3 fw-bold text-uppercase">Technical Specifications</h6>

                                <ul className="ps-4 vstack gap-2">
                                    <li><span>Architecture: </span> Web-based interface for Python programming.</li>
                                    <li><span>Input Data Format: </span> Supports various data formats, including CSV, JSON, and more.</li>
                                    <li><span>Output Data Format: </span> Outputs can include text, tables, charts, and interactive widgets.</li>
                                    <li><span>Supported Frameworks: </span> Compatible with Python libraries like TensorFlow, PyTorch, and scikit-learn.</li>
                                </ul>

                                <br /><br />

                                <h6 className="mb-3 fw-bold text-uppercase">Model Performance Metrics</h6>

                                <ul className="ps-4 vstack gap-2">
                                    <li><span>Interactivity: </span> High interactivity for data exploration and analysis.</li>
                                    <li><span>Ease of Use: </span> User-friendly interface for users of all levels.</li>
                                    <li><span>Versatility: </span> Supports multiple programming languages and data formats.</li>
                                    <li><span>Community: </span> Large and active user community with extensive resources.</li>
                                </ul>

                                <div>
                                    <button type="button" className="btn btn-link link-success p-0">Read more</button>
                                </div>

                                <div className="pt-3 border-top border-top-dashed mt-4">
                                    <Row>

                                        <Col lg={3} sm={6}>
                                            <div>
                                                <p className="mb-2 text-uppercase fw-medium fs-14">Added Date:</p>
                                                <h5 className="fs-15 mb-0">15 Sep, 2021</h5>
                                            </div>
                                        </Col>
                                        <Col lg={3} sm={6}>
                                            <div>
                                                <p className="mb-2 text-uppercase fw-medium fs-14">Status :</p>
                                                <div className="badge bg-warning fs-12">Ready to Deploy</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>

                                <div className="pt-3 border-top border-top-dashed mt-4">
                                    <h6 className="mb-3 fw-bold text-uppercase">Resources</h6>
                                    <Row className="g-3">
                                        <Col xxl={4} lg={4}>
                                            <a target="_blank" href='https://jupyter.org/try-jupyter/retro/notebooks/?path=notebooks/Intro.ipynb'>
                                                <Button className="btn-soft-primary"> Launch Demo </Button>
                                            </a>
                                        </Col>
                                        <Col xxl={4} lg={4}>
                                            <a target="_blank" href='https://docs.jupyter.org/en/latest/'>
                                                <Button className="btn-soft-secondary"> Documents </Button>
                                            </a>
                                        </Col>
                                        <Col xxl={4} lg={4}>
                                            <a target="_blank" href='https://jupyter.org/try-jupyter/retro/notebooks/?path=notebooks/Intro.ipynb'>
                                                <Button className="btn-soft-info"> Deploy </Button>
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