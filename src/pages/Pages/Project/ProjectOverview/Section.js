import React, { useState } from 'react';
import { Card, CardBody, Col, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import classnames from 'classnames';

//import images
import slack from '../../../../assets/images/Jupyter Notebook.png';
import Description from './Description';
import ExampleCode from './ExampleCode';
import UseCases from './UseCases';
import Screenshots from './Screenshots';
import Review from './Review';

const Section = () => {
    //Tab 
    const [activeTab, setActiveTab] = useState('1');
    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };
    return (
        <React.Fragment>
            <Row>
                <Col lg={12}>
                    <Card className="mt-n4 mx-n4">
                        <div className="bg-soft-warning">
                            <CardBody className="pb-0 px-4">
                                <Row className="mb-3">
                                    <div className="col-md">
                                        <Row className="align-items-center g-3">
                                            <div className="col-md-auto">
                                                <div className="avatar-md">
                                                    <div className="avatar-title">
                                                        <img src={slack} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md">
                                                <div>
                                                    <h4><span className="fw-bold" style={{ fontSize: "1.3125rem"}}>Project Name: </span>My Personal Notebook (Based on Jupyter Notebook)</h4>
                                                    <div className="hstack gap-3 flex-wrap">
                                                        <div><i className="ri-sticky-note-line"></i> Notebook</div>
                                                        <div className="vr"></div>
                                                        <div><i className="mdi mdi-publish"></i> Publisher  : <span className="fw-medium">Jupyter</span></div>
                                                        <div className="vr"></div>
                                                        <div><i className="ri-install-line"></i> No. Of Installation : <span className="fw-medium">500+</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Row>
                                    </div>
                                    <div className="col-md-auto">
                                        <div className="hstack gap-1 flex-wrap">
                                            <button type="button" className="btn py-0 fs-16 favourite-btn active">
                                                <i className="ri-star-fill"></i>
                                            </button>
                                            <button type="button" className="btn py-0 fs-16 text-body">
                                                <i className="ri-share-line"></i>
                                            </button>
                                            <button type="button" className="btn py-0 fs-16 text-body">
                                                <i className="ri-flag-line"></i>
                                            </button>
                                        </div>
                                    </div>
                                </Row>

                                <Nav className="nav-tabs-custom border-bottom-0" role="tablist">
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '1' }, "fw-bold")}
                                            onClick={() => { toggleTab('1'); }}
                                            href="#">
                                            Description
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '2' }, "fw-bold")}
                                            onClick={() => { toggleTab('2'); }}
                                            href="#">
                                            Example Code
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '3' }, "fw-bold")}
                                            onClick={() => { toggleTab('3'); }}
                                            href="#">
                                            Use Cases
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '4' }, "fw-bold")}
                                            onClick={() => { toggleTab('4'); }}
                                            href="#">
                                            Screenshots
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink
                                            className={classnames({ active: activeTab === '5' }, "fw-bold")}
                                            onClick={() => { toggleTab('5'); }}
                                            href="#">
                                            Review
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                            </CardBody>
                        </div>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col lg={12}>
                    <TabContent activeTab={activeTab} className="text-muted">
                        <TabPane tabId="1">
                            <Description />
                        </TabPane>
                        <TabPane tabId="2">
                            <ExampleCode />
                        </TabPane>
                        <TabPane tabId="3">
                            <UseCases />
                        </TabPane>
                        <TabPane tabId="4">
                            <Screenshots />
                        </TabPane>
                        <TabPane tabId="5">
                            <Review />
                        </TabPane>
                    </TabContent>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default Section;