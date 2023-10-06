import React from 'react';
import { Link } from 'react-router-dom';
import { Card,
    CardBody,
    Col,
    Container,
    Input,
    Label,
    Tooltip,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane, } from 'reactstrap';
import SimpleBar from 'simplebar-react';
import { reviews } from '../../../../common/data';

const ProductReview = (props) => {
    return (
        <React.Fragment>
            <li className="py-2">
                <div className="border border-dashed rounded p-3">
                    <div className="d-flex align-items-start mb-3">
                        <div className="hstack gap-3">
                            <div className="badge rounded-pill bg-success mb-0">
                                <i className="mdi mdi-star"></i> {props.review.rating}
                            </div>
                            <div className="vr"></div>
                            <div className="flex-grow-1">
                                <p className="text-muted mb-0">{props.review.comment}</p>
                            </div>
                        </div>
                    </div>
                    {props.review.subItems && (
                        <React.Fragment>
                            <div className="d-flex flex-grow-1 gap-2 mb-3">
                                {props.review.subItems.map((subItem, key) => (
                                    <React.Fragment key={key}>
                                        <Link to="#" className="d-block">
                                            <img
                                                src={subItem.img}
                                                alt=""
                                                className="avatar-sm rounded object-cover"
                                            />
                                        </Link>
                                    </React.Fragment>
                                ))}
                            </div>
                        </React.Fragment>
                    )}

                    <div className="d-flex align-items-end">
                        <div className="flex-grow-1">
                            <h5 className="fs-15 mb-0">{props.review.name}</h5>
                        </div>

                        <div className="flex-shrink-0">
                            <p className="text-muted mb-0">{props.review.date}</p>
                        </div>
                    </div>
                </div>
            </li>
        </React.Fragment>
    );
};

const Review = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div className="mt-5">
                        <div>
                            <h5 className="fs-15 mb-3">Ratings & Reviews</h5>
                        </div>
                        <Row className="gy-4 gx-0">
                            <Col lg={4}>
                                <div>
                                    <div className="pb-3">
                                        <div className="bg-light px-3 py-2 rounded-2 mb-2">
                                            <div className="d-flex align-items-center">
                                                <div className="flex-grow-1">
                                                    <div className="fs-16 align-middle text-warning">
                                                        <i className="ri-star-fill"></i>{" "}
                                                        <i className="ri-star-fill"></i>{" "}
                                                        <i className="ri-star-fill"></i>{" "}
                                                        <i className="ri-star-fill"></i>{" "}
                                                        <i className="ri-star-half-fill"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-shrink-0">
                                                    <h6 className="mb-0">4.5 out of 5</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-muted">
                                                Total{" "}
                                                <span className="fw-medium">5.50k</span>{" "}
                                                reviews
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-3">
                                        <Row className="align-items-center g-2">
                                            <div className="col-auto">
                                                <div className="p-2">
                                                    <h6 className="mb-0">5 star</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-2">
                                                    <div className="progress animated-progess progress-sm">
                                                        <div
                                                            className="progress-bar bg-success"
                                                            role="progressbar"
                                                            style={{ width: "50.16%" }}
                                                            aria-valuenow="50.16"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="p-2">
                                                    <h6 className="mb-0 text-muted">2758</h6>
                                                </div>
                                            </div>
                                        </Row>

                                        <Row className="align-items-center g-2">
                                            <div className="col-auto">
                                                <div className="p-2">
                                                    <h6 className="mb-0">4 star</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-2">
                                                    <div className="progress animated-progess progress-sm">
                                                        <div
                                                            className="progress-bar bg-success"
                                                            role="progressbar"
                                                            style={{ width: "19.32%" }}
                                                            aria-valuenow="19.32"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="p-2">
                                                    <h6 className="mb-0 text-muted">1063</h6>
                                                </div>
                                            </div>
                                        </Row>

                                        <Row className="align-items-center g-2">
                                            <div className="col-auto">
                                                <div className="p-2">
                                                    <h6 className="mb-0">3 star</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-2">
                                                    <div className="progress animated-progess progress-sm">
                                                        <div
                                                            className="progress-bar bg-success"
                                                            role="progressbar"
                                                            style={{ width: "18.12%" }}
                                                            aria-valuenow="18.12"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="p-2">
                                                    <h6 className="mb-0 text-muted">997</h6>
                                                </div>
                                            </div>
                                        </Row>

                                        <Row className="align-items-center g-2">
                                            <div className="col-auto">
                                                <div className="p-2">
                                                    <h6 className="mb-0">2 star</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-2">
                                                    <div className="progress animated-progess progress-sm">
                                                        <div
                                                            className="progress-bar bg-warning"
                                                            role="progressbar"
                                                            style={{ width: "7.42%" }}
                                                            aria-valuenow="7.42"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-auto">
                                                <div className="p-2">
                                                    <h6 className="mb-0 text-muted">408</h6>
                                                </div>
                                            </div>
                                        </Row>

                                        <Row className="align-items-center g-2">
                                            <div className="col-auto">
                                                <div className="p-2">
                                                    <h6 className="mb-0">1 star</h6>
                                                </div>
                                            </div>
                                            <div className="col">
                                                <div className="p-2">
                                                    <div className="progress animated-progess progress-sm">
                                                        <div
                                                            className="progress-bar bg-danger"
                                                            role="progressbar"
                                                            style={{ width: "4.98%" }}
                                                            aria-valuenow="4.98"
                                                            aria-valuemin="0"
                                                            aria-valuemax="100"
                                                        ></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-auto">
                                                <div className="p-2">
                                                    <h6 className="mb-0 text-muted">274</h6>
                                                </div>
                                            </div>
                                        </Row>
                                    </div>
                                </div>
                            </Col>

                            <Col lg={8}>
                                <div className="ps-lg-4">
                                    <div className="d-flex flex-wrap align-items-start gap-3">
                                        <h5 className="fs-15">Reviews: </h5>
                                    </div>

                                    <SimpleBar
                                        className="me-lg-n3 pe-lg-4"
                                        style={{ maxHeight: "225px" }}
                                    >
                                        <ul className="list-unstyled mb-0">
                                            {reviews.map((review, key) => (
                                                <React.Fragment key={key}>
                                                    <ProductReview review={review} />
                                                </React.Fragment>
                                            ))}
                                        </ul>
                                    </SimpleBar>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Review;