import React from 'react';
import { Card, CardBody, Col, Container, Row, } from 'reactstrap';

// Import Content
import UiContent from '../../../Components/Common/UiContent';
//import Components
import BreadCrumb from '../../../Components/Common/BreadCrumb';
import PreviewCardHeader from '../../../Components/Common/PreviewCardHeader';

import { Ratio169Example, Ratio219Example, Ratio43Example, Ratio11Example, CustomRationExample } from './UiEmbedVideoCode';

const UiEmbedVideo = () => {
    document.title = "AI/ML Solutions | Plaine - Unleashing Innovation with Artificial Intelligence";

    return (
        <React.Fragment>
            <UiContent />
            <div className="page-content">
                <Container fluid>
                    <BreadCrumb title="Tutorials" pageTitle="Dashboards" />
                    <Row>
                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="Getting Started with Plaine: A Step-by-Step Guide" />
                                <CardBody>
                                    <p className="text-muted">This video can provide an overview of your platform and guide users on how to create an account and get started. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="Selecting the Right AI Model: Tips and Best Practices" />
                                <CardBody>
                                    <p className="text-muted">This tutorial can help users understand how to choose the most suitable AI model for their specific use case. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="Deploying Your First AI Model: A Hands-On Tutorial" />
                                <CardBody>
                                    <p className="text-muted">Walk users through the process of deploying an AI model from start to finish. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="Cost Management for AI Deployments: Tips to Stay Within Budget" />
                                <CardBody>
                                    <p className="text-muted">Guide users on managing costs associated with AI model deployments. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="Integrating AI Models into Your Workflow: A Seamless Approach" />
                                <CardBody>
                                    <p className="text-muted">Show how users can seamlessly integrate AI models into their existing workflows and applications. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="User Portal Walkthrough: Navigating Plaine Like a Pro" />
                                <CardBody>
                                    <p className="text-muted">Offer a comprehensive tour of the user portal, highlighting key features and functionalities. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="Advanced AI Deployment Techniques: Tips for Power Users" />
                                <CardBody>
                                    <p className="text-muted">For users with more experience, explore advanced techniques for AI model deployment and optimization. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="Data Preparation for AI: Preprocessing and Integration" />
                                <CardBody>
                                    <p className="text-muted">Explain the importance of data preparation and how to preprocess and integrate data with AI models. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>

                        {/* <!-- end col --> */}

                        <Col xl={6}>
                            <Card>
                                <PreviewCardHeader title="Configuring Resource Allocation: Optimize Your AI Deployment" />
                                <CardBody>
                                    <p className="text-muted">Explain how users can allocate resources effectively to ensure efficient AI model performance. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="Auto-Scaling AI Models: Maximizing Efficiency" />
                                <CardBody>
                                    <p className="text-muted">Showcase how to enable auto-scaling and set scaling thresholds for AI models. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="Monitoring AI Model Health: Key Metrics to Track" />
                                <CardBody>
                                    <p className="text-muted">Provide insights into monitoring AI model health and performance metrics users should watch. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="AI Model Updates and Maintenance: Best Practices" />
                                <CardBody>
                                    <p className="text-muted">Share best practices for keeping deployed AI models up-to-date and well-maintained. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="Scaling AI Models on Demand: Meeting Changing Workloads" />
                                <CardBody>
                                    <p className="text-muted">Dive deeper into the topic of scaling AI models to accommodate varying workloads. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="Security Measures for AI Deployments: Safeguarding Your Data" />
                                <CardBody>
                                    <p className="text-muted">Discuss security practices and measures to protect data when using AI models. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>

                            <Card>
                                <PreviewCardHeader title="AI Model Catalog: Exploring Available Models on Plaine" />
                                <CardBody>
                                    <p className="text-muted">Introduce users to the AI model catalog and how to browse available models. </p>
                                    <div className="live-preview">

                                        {/* <!-- 16:9 aspect ratio --> */}
                                        <div className="ratio ratio-16x9">
                                            <iframe className="rounded" src="https://www.youtube.com/embed/1y_kfWUCFDQ" title="YouTube video" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                    <div className="d-none code-view">
                                        <pre className="language-markup">
                                            <code>
                                                <Ratio169Example />
                                            </code>
                                        </pre>
                                    </div>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default UiEmbedVideo;
