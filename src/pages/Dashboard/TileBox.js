import React from 'react';
import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

import { tileBoxes5 } from "../../common/data/index";

function TileBox(props) {
    return (
        <div>
            <Row>
                <Col className="col-12">
                    <h5 className=" mb-3 pb-1">Trending App
                    </h5>
                </Col>
            </Row>
            <Row>
                {(tileBoxes5 || []).map((item, key) => (
                    <Col xl={3} ms={6} key={key}>
                        <Card className={"card-height-100 " + item.class}>
                            <CardBody>
                                <UncontrolledDropdown className="float-end">
                                    <DropdownToggle tag="a" className="text-reset dropdown-btn" href="#">
                                        <span className="text-muted fs-18"><i className="mdi mdi-dots-vertical"></i></span>
                                    </DropdownToggle>
                                    <DropdownMenu className="dropdown-menu-end">
                                        <DropdownItem>Favorite</DropdownItem>
                                        <DropdownItem>Apply Now</DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                <div className="mb-4 pb-2">
                                    <img src={item.img} alt="" className="avatar-sm" />
                                </div>
                                <Link to="#!">
                                    <h6 className="fs-15 fw-bold">{item.title} </h6>
                                </Link>
                                <p className="text-muted mb-0"><i className="ri-building-line align-bottom"></i> {item.subtitle} <span className="ms-2">

                                    <div className="d-flex text-muted fs-16">
                                        <span className="mdi mdi-star text-warning"></span>
                                        <span className="mdi mdi-star text-warning"></span>
                                        <span className="mdi mdi-star text-warning"></span>
                                        <span className="mdi mdi-star text-warning"></span>
                                        <span className="mdi mdi-star text-warning"></span>
                                        <div className="text-muted">
                                            ( 5.50k  Review )
                                        </div>
                                    </div>

                                </span></p>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default TileBox;