import React, { useState } from 'react';
import { Card, Col, Collapse, Container, Row } from 'reactstrap';
import classnames from "classnames";

// Import Images
import faqImg from "../../../assets/images/faq-img.png";

const HelpFaqs = () => {
    document.title = "AI/ML Solutions | Plaine - Unleashing Innovation with Artificial Intelligence";

    const [col1, setcol1] = useState(false);
    const [col2, setcol2] = useState(false);
    const [col3, setcol3] = useState(false);
    const [col4, setcol4] = useState(false);

    const [col5, setcol5] = useState(false);
    const [col6, setcol6] = useState(false);
    const [col7, setcol7] = useState(false);
    const [col8, setcol8] = useState(false);

    const [col9, setcol9] = useState(false);
    const [col10, setcol10] = useState(false);
    const [col11, setcol11] = useState(false);
    const [col12, setcol12] = useState(false);


    const t_col1 = () => {
        setcol1(!col1);
        setcol2(false);
        setcol3(false);
        setcol4(false);

    };

    const t_col2 = () => {
        setcol2(!col2);
        setcol1(false);
        setcol3(false);
        setcol4(false);

    };

    const t_col3 = () => {
        setcol3(!col3);
        setcol1(false);
        setcol2(false);
        setcol4(false);

    };

    const t_col4 = () => {
        setcol4(!col4);
        setcol1(false);
        setcol2(false);
        setcol3(false);
    };

    const t_col5 = () => {
        setcol5(!col5);
        setcol6(false);
        setcol7(false);
        setcol8(false);

    };

    const t_col6 = () => {
        setcol6(!col6);
        setcol5(false);
        setcol7(false);
        setcol8(false);

    };

    const t_col7 = () => {
        setcol7(!col7);
        setcol6(false);
        setcol5(false);
        setcol8(false);

    };

    const t_col8 = () => {
        setcol8(!col8);
        setcol5(false);
        setcol6(false);
        setcol7(false);
    };

    const t_col9 = () => {
        setcol9(!col9);
        setcol10(false);
        setcol11(false);
        setcol12(false);

    };

    const t_col10 = () => {
        setcol10(!col10);
        setcol11(false);
        setcol12(false);
        setcol9(false);

    };

    const t_col11 = () => {
        setcol11(!col11);
        setcol9(false);
        setcol10(false);
        setcol12(false);

    };

    const t_col12 = () => {
        setcol12(!col12);
        setcol9(false);
        setcol10(false);
        setcol11(false);
    };
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Card className="rounded-0 bg-soft-success mx-n4 mt-n4 border-top">
                                <div className="px-4">
                                    <Row>
                                        <Col xxl={5} className="align-self-center">
                                            <div className="py-4">
                                                <h4 className="display-6 coming-soon-text">Frequently asked questions</h4>
                                                <p className="text-success fs-16 mt-3">If you can not find answer to your question in our FAQ, you can always contact us or email us. We will answer you shortly!</p>
                                                <div className="hstack flex-wrap gap-2">
                                                    <button type="button" className="btn btn-primary btn-label rounded-pill"><i className="ri-mail-line label-icon align-middle rounded-pill fs-16 me-2"></i> Email Us</button>
                                                </div>
                                            </div>
                                        </Col>
                                        <div className="col-xxl-3 ms-auto">
                                            <div className="mb-n5 pb-1 faq-img d-none d-xxl-block">
                                                <img src={faqImg} alt="" className="img-fluid" />
                                            </div>
                                        </div>
                                    </Row>
                                </div>
                            </Card>
                            <Row className="justify-content-evenly">
                                <div className="d-flex align-items-center mb-2  ">

                                    <div className="flex-grow-1 d-flex justify-content-center">
                                        <div className="flex-shrink-0 me-1">
                                            <i className="ri-question-line fs-24 align-bottom text-success me-1"></i>
                                        </div>
                                        <h5 className="fs-17 mb-0 fw-bold align-items-center mt-2">General Questions</h5>
                                    </div>
                                </div>
                                <Col lg={4}>
                                    <div className="mt-3">


                                        <div className="accordion accordion-border-box" id="genques-accordion">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="genques-headingOne">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col1 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col1}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        What is Plaine?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col1} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        Plaine is a cutting-edge AI/ML platform designed to
                                                        simplify AI adoption for individuals and businesses. We provide access
                                                        to a wide range of AI models, deployment options, and tools to
                                                        streamline the process of selecting, deploying, and managing AI/ML
                                                        solutions.
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="genques-headingTwo">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col2 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col2}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        How can I get started with Plaine?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col2} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        Getting started is easy! Simply create an account on our platform, log
                                                        in, and explore our catalog of AI models. You can find detailed
                                                        information about each model and start deploying them for your specific
                                                        use cases.
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="genques-headingThree">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col3 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col3}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        What types of AI models are available on your platform?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col3} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        We offer a diverse selection of AI models, including Large Foundation
                                                        Models (LFMs), Large Language Models (LLMs), Domain Specific Models, and
                                                        more. These models can be used for various applications, from content
                                                        generation to image recognition and beyond.
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="genques-headingFour">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col4 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col4}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        Can I use your platform for business applications?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col4} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        Absolutely! Our platform is designed to serve both individual users and
                                                        businesses of all sizes. We offer solutions tailored to enterprise
                                                        needs, including data security, scalability, and cost management.
                                                    </div>
                                                </Collapse>
                                            </div>
                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4}>
                                    <div className="mt-3">


                                        <div className="accordion accordion-border-box" id="manageaccount-accordion">
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="manageaccount-headingOne">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col5 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col5}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        How do I deploy AI models from your platform?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col5} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        You can deploy AI models from our platform with just a few clicks.
                                                        Simply select the desired model, configure deployment options, and
                                                        follow the guided deployment process. Our user-friendly interface makes
                                                        it straightforward.
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="manageaccount-headingTwo">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col6 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col6}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        Can I integrate your AI models into my existing software or
                                                        applications?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col6} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        Yes, you can integrate our AI models into your existing software or
                                                        applications. We provide API documentation and support to help you
                                                        seamlessly integrate AI capabilities into your projects.
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="manageaccount-headingThree">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col7 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col7}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        How is the cost calculated for using your platform?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col7} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        The cost of using our platform depends on factors such as the selected
                                                        AI model, deployment method, and usage. We offer cost estimation tools
                                                        and guidance to help you manage expenses effectively.
                                                    </div>
                                                </Collapse>
                                            </div>

                                        </div>
                                    </div>
                                </Col>

                                <Col lg={4}>
                                    <div className="mt-3">


                                        <div className="accordion accordion-border-box" id="privacy-accordion">

                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="privacy-headingTwo">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col10 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col10}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        Is my data secure when using your platform?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col10} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        Data security is a top priority for us. We implement robust security
                                                        measures to protect user data and ensure compliance with data privacy
                                                        regulations. Your proprietary data sets are safe with us.
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="privacy-headingThree">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col11 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col11}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        What kind of support do you provide to users?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col11} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        We offer comprehensive support to our users, including documentation,
                                                        tutorials, and FAQs. Additionally, our support team is available to
                                                        assist with any inquiries or issues you may encounter.
                                                    </div>
                                                </Collapse>
                                            </div>
                                            <div className="accordion-item">
                                                <h2 className="accordion-header" id="privacy-headingFour">
                                                    <button
                                                        className={classnames(
                                                            "accordion-button",
                                                            "fw-medium",
                                                            { collapsed: !col12 }
                                                        )}
                                                        type="button"
                                                        onClick={t_col12}
                                                        style={{ cursor: "pointer" }}
                                                    >
                                                        How can I provide feedback or request new features for your platform?
                                                    </button>
                                                </h2>
                                                <Collapse isOpen={col12} className="accordion-collapse">
                                                    <div className="accordion-body">
                                                        We value user feedback and encourage you to share your suggestions and
                                                        feature requests with us. You can use our feedback system to submit your
                                                        ideas, and we'll consider them for future platform enhancements.
                                                    </div>
                                                </Collapse>
                                            </div>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default HelpFaqs;