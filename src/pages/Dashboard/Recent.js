import React from 'react';
import { Button, Card, CardBody, CardHeader, Col, DropdownItem, DropdownMenu, DropdownToggle, ListGroup, ListGroupItem, Pagination, PaginationItem, PaginationLink, Row, UncontrolledDropdown } from 'reactstrap';
import { Link } from 'react-router-dom';

import SimpleBar from 'simplebar-react';

// Import Images

import product2 from "../../assets/images/products/img-2.png";
import product8 from "../../assets/images/products/img-8.png";
import product10 from "../../assets/images/products/img-10.png";

import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";

import { widgetsActivities, widgetsTasks } from "../../common/data/index";
import { OtherWidgetsCharts ,SessionsByCountriesCharts} from '../Widgets/WidgetsCharts';

const UpcomingActivity = () => {

    const chartDataOptions = [
        {
            id: 1,
            title: "Application",
            persantage: "16.24",
            series: [{
                name: "Results",
                data: [0, 68, 35, 90, 99],
            }],
            dataColors: '["--vz-success" , "--vz-transparent"]'
        },
        {
            id: 2,
            title: "Interviewed",
            persantage: "34.24",
            series: [{
                name: "Results",
                data: [0, 98, 85, 90, 67],
            }],
            dataColors: '["--vz-danger" , "--vz-transparent"]'
        },
        {
            id: 3,
            title: "Hired",
            persantage: "6.67",
            series: [{
                name: "Results",
                data: [0, 65, 103, 75, 120],
            }],
            dataColors: '["--vz-success" , "--vz-transparent"]'
        },
    ]
    return (
        <React.Fragment>
            <Row>

                <Col xxl={12}>
                    <Row>

                        <Col xl={6}>
                            <Card className="card-height-100">
                                <CardHeader className="border-bottom-dashed align-items-center d-flex">
                                    <h4 className="card-title mb-0 flex-grow-1">Recent Activity</h4>
                                </CardHeader>
                                <CardBody className="p-0">
                                    <SimpleBar style={{ maxHeight: "364px" }} className="p-3">
                                        <div className="acitivity-timeline acitivity-main">
                                            <div className="acitivity-item d-flex">
                                                <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div className="avatar-title bg-soft-success text-success rounded-circle">
                                                        <i className="ri-shopping-cart-2-line"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">Purchase by James Price</h6>
                                                    <p className="text-muted mb-1">Product noise evolve smartwatch </p>
                                                    <small className="mb-0 text-muted">02:14 PM Today</small>
                                                </div>
                                            </div>
                                            <div className="acitivity-item py-3 d-flex">
                                                <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                    <div className="avatar-title bg-soft-primary text-primary rounded-circle">
                                                        <i className="ri-stack-fill"></i>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">Added new <span className="fw-bold">style collection</span></h6>
                                                    <p className="text-muted mb-1">By Nesta Technologies</p>
                                                    <div className="d-inline-flex gap-2 border border-dashed p-2 mb-2 w-75">
                                                        <Link to="/apps-ecommerce-product-details" className="bg-light rounded p-1">
                                                            <img src={product8} alt="" className="img-fluid d-block" />
                                                        </Link>
                                                        <Link to="/apps-ecommerce-product-details" className="bg-light rounded p-1">
                                                            <img src={product2} alt="" className="img-fluid d-block" />
                                                        </Link>
                                                        <Link to="/apps-ecommerce-product-details" className="bg-light rounded p-1">
                                                            <img src={product10} alt="" className="img-fluid d-block" />
                                                        </Link>
                                                    </div>
                                                    <p className="mb-0 text-muted"><small>9:47 PM Yesterday</small></p>
                                                </div>
                                            </div>
                                            <div className="acitivity-item py-3 d-flex">
                                                <div className="flex-shrink-0">
                                                    <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">Natasha Carey have liked the products</h6>
                                                    <p className="text-muted mb-1">Allow users to like products in your WooCommerce store.</p>
                                                    <small className="mb-0 text-muted">25 Dec, 2021</small>
                                                </div>
                                            </div>
                                            <div className="acitivity-item py-3 d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-xs acitivity-avatar">
                                                        <div className="avatar-title rounded-circle bg-secondary">
                                                            <i className="mdi mdi-sale fs-14"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">Today offers by <Link to="/apps-ecommerce-seller-details" className="link-secondary">Digitech Galaxy</Link></h6>
                                                    <p className="text-muted mb-2">Offer is valid on orders of Rs.500 Or above for selected products only.</p>
                                                    <small className="mb-0 text-muted">12 Dec, 2021</small>
                                                </div>
                                            </div>
                                            <div className="acitivity-item py-3 d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-xs acitivity-avatar">
                                                        <div className="avatar-title rounded-circle bg-soft-danger text-danger">
                                                            <i className="ri-bookmark-fill"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">Favoried Product</h6>
                                                    <p className="text-muted mb-2">Esther James have favorited product.</p>
                                                    <small className="mb-0 text-muted">25 Nov, 2021</small>
                                                </div>
                                            </div>
                                            <div className="acitivity-item py-3 d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-xs acitivity-avatar">
                                                        <div className="avatar-title rounded-circle bg-secondary">
                                                            <i className="mdi mdi-sale fs-14"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">Flash sale starting <span className="text-primary">Tomorrow.</span></h6>
                                                    <p className="text-muted mb-0">Flash sale by <Link to="#" className="link-secondary fw-medium">Zoetic Fashion</Link></p>
                                                    <small className="mb-0 text-muted">22 Oct, 2021</small>
                                                </div>
                                            </div>
                                            <div className="acitivity-item py-3 d-flex">
                                                <div className="flex-shrink-0">
                                                    <div className="avatar-xs acitivity-avatar">
                                                        <div className="avatar-title rounded-circle bg-soft-info text-info">
                                                            <i className="ri-line-chart-line"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">Monthly sales report</h6>
                                                    <p className="text-muted mb-2"><span className="text-danger">2 days left</span> notification to submit the monthly sales report. <Link to="#" className="link-warning text-decoration-underline">Reports Builder</Link></p>
                                                    <small className="mb-0 text-muted">15 Oct</small>
                                                </div>
                                            </div>
                                            <div className="acitivity-item d-flex">
                                                <div className="flex-shrink-0">
                                                    <img src={avatar3} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                </div>
                                                <div className="flex-grow-1 ms-3">
                                                    <h6 className="mb-1">Frank Hook Commented</h6>
                                                    <p className="text-muted mb-2 fst-italic">" A product that has reviews is more likable to be sold than a product. "</p>
                                                    <small className="mb-0 text-muted">26 Aug, 2021</small>
                                                </div>
                                            </div>
                                        </div>
                                    </SimpleBar>
                                </CardBody>
                            </Card>
                           
                        </Col>
                        <Col xxl={6} xl={6}>
                                <Card className="card-height-100">
                                    <CardHeader className="align-items-center d-flex">
                                        <h4 className="card-title mb-0 flex-grow-1">Sessions by Countries</h4>
                                        <div>
                                            <Button color="secondary" size="sm" className="btn-soft-secondary me-1">
                                                ALL
                                            </Button>
                                            <Button color="primary" size="sm" className="btn-soft-primary me-1">
                                                1M
                                            </Button>
                                            <Button color="secondary" size="sm" className="btn-soft-secondary">
                                                6M
                                            </Button>
                                        </div>
                                    </CardHeader>
                                    <CardBody className="p-0">
                                        <div>
                                            <div id="countries_charts" className="apex-charts" dir="ltr">
                                                {/* Sessions by Countries */}
                                                <SessionsByCountriesCharts dataColors='["--vz-info", "--vz-info", "--vz-info", "--vz-info", "--vz-danger", "--vz-info", "--vz-info", "--vz-info", "--vz-info", "--vz-info"]' />
                                            </div>
                                        </div>
                                    </CardBody>
                                </Card>
                            </Col>
                    </Row>
                </Col>
            </Row>

            
        </React.Fragment>
    );
};

export default UpcomingActivity;