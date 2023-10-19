import React from 'react';
import CountUp from "react-countup";
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { adminWidgets } from '../../../common/data/dashboardEcommerce';


function AdminDashboard(props) {
    document.title = "Plaine | Admin/Dashboard";

    return (
        <React.Fragment>
        {adminWidgets.map((item, key) => (
            <Col xl={3} md={6} key={key}>
                <Card className={"card-animate bg-" + item.cardColor}>
                    <CardBody>
                        <div className="d-flex align-items-center">
                            <div className="flex-grow-1 overflow-hidden">
                                <p className="text-uppercase fw-bold text-white-50 text-truncate mb-0">{item.label}</p>
                            </div>

                        </div>
                        <div className="d-flex align-items-end justify-content-between mt-4">
                            <div>
                                <h4 className="fs-22 fw-bold ff-secondary mb-4 text-white"><span className="counter-value" data-target="559.25">
                                    <CountUp
                                        start={0}
                                        prefix={item.prefix}
                                        separator={item.separator}
                                        end={item.counter}
                                        decimals={item.decimals}
                                        duration={4}
                                    />
                                </span></h4>
                                <Link to="#" className="text-decoration-underline text-white-50">{item.link}</Link>
                            </div>
                            <div className="avatar-sm flex-shrink-0">
                                <span className="avatar-title rounded fs-3 bg-soft-light">
                                    <i className={`text-white ${item.icon}`}></i>
                                </span>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </Col>))}
        </React.Fragment>
    );
}

export default AdminDashboard;