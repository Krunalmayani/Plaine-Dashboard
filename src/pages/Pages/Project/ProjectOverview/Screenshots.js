import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Modal, Row, UncontrolledDropdown, ModalBody, ModalHeader } from 'reactstrap';

//SimpleBar
import SimpleBar from "simplebar-react";
import { FiguresExample } from '../../../BaseUi/UiImages/UiImagesCode';
import PreviewCardHeader from '../../../../Components/Common/PreviewCardHeader';

import img1 from "../../../../assets/images/small/sql1_ae4e89.jpg";
import img2 from "../../../../assets/images/small/jupyterlab.jpg";
import img3 from "../../../../assets/images/small/sql2_lydydc.jpg";

const Screenshots = () => {
    return (
        <React.Fragment>
            <Card>
                <PreviewCardHeader title="Screenshots" />
                <CardBody>
                    <div className="live-preview">
                        <Row className="g-3">
                            <Col sm={4}>
                                <figure className="figure mb-0">
                                    <img src={img1} className="figure-img img-fluid rounded" alt="..." />
                                    <figcaption className="figure-caption">A caption for the above image.</figcaption>
                                </figure>
                            </Col>
                            <Col sm={4}>
                                <figure className="figure mb-0">
                                    <img src={img2} className="figure-img img-fluid rounded" alt="..." />
                                    <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>
                                </figure>
                            </Col>
                            <Col sm={4}>
                                <figure className="figure mb-0">
                                    <img src={img3} className="figure-img img-fluid rounded" alt="..." />
                                    <figcaption className="figure-caption text-end">A caption for the above image.</figcaption>
                                </figure>
                            </Col>
                        </Row>

                    </div>

                    <div className="d-none code-view">
                        <pre className="language-markup">
                            <code>
                                <FiguresExample />
                            </code>
                        </pre>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default Screenshots;