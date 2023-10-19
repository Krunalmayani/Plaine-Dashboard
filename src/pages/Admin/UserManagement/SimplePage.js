import React, { useState, useEffect } from 'react';
import DeleteModal from '../../../Components/Common/DeleteModal';
import { ToastContainer } from 'react-toastify';

//redux
import { useSelector, useDispatch } from 'react-redux';

//Import Icons
import FeatherIcon from "feather-icons-react";

//import action
import {
    getProjectList4 as onGetProjectList,
    deleteProjectList as onDeleteProjectList,
} from "../../../slices/thunks";

// -------------------------------------------------------------------------

import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardHeader, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Input, Label, Nav, NavItem, NavLink, Pagination, PaginationItem, PaginationLink, Progress, Row, TabContent, Table, TabPane, UncontrolledCollapse, UncontrolledDropdown } from 'reactstrap';
import classnames from 'classnames';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

//Images
import profileBg from '../../../assets/images/profile-bg.jpg';
import avatar1 from '../../../assets/images/users/avatar-1.jpg';
import avatar2 from '../../../assets/images/users/avatar-2.jpg';
import avatar3 from '../../../assets/images/users/avatar-3.jpg';
import avatar4 from '../../../assets/images/users/avatar-4.jpg';
import avatar5 from '../../../assets/images/users/avatar-5.jpg';
import avatar6 from '../../../assets/images/users/avatar-6.jpg';
import avatar7 from '../../../assets/images/users/avatar-7.jpg';
import avatar8 from '../../../assets/images/users/avatar-8.jpg';

import smallImage2 from '../../../assets/images/small/img-2.jpg';
import smallImage3 from '../../../assets/images/small/img-3.jpg';
import smallImage4 from '../../../assets/images/small/img-4.jpg';
import smallImage5 from '../../../assets/images/small/img-5.jpg';
import smallImage6 from '../../../assets/images/small/img-6.jpg';
import smallImage7 from '../../../assets/images/small/img-7.jpg';
import smallImage9 from '../../../assets/images/small/img-9.jpg';

import { projects, document } from '../../../common/data';

// --------------------------------------------------------------------------------------------------

import {  Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";




// ----------------------------------------------------------------------------------------------------

const SimplePage = (args) => {

    // -----------------------------------------------------------------------------------------------------

    const [modal, setModal] = useState(false);


    const toggle = () => setModal(!modal);

    // Border Top Nav
    const [topBorderTab, settopBorderTab] = useState("1");
    const topBordertoggle = (tab) => {
        if (topBorderTab !== tab) {
            settopBorderTab(tab);
        }
    };






    // ------------------------------------------------------------------------------------------------------

    const dispatch = useDispatch();

    const { projectLists4 } = useSelector((state) => ({
        projectLists4: state.Projects.projectLists4,
    }));
    console.log('projectLists4 L', projectLists4);
    const [project, setProject] = useState(null);
    const [deleteModal, setDeleteModal] = useState(false);

    useEffect(() => {
        dispatch(onGetProjectList());
    }, [dispatch]);

    useEffect(() => {
        setProject(projectLists4);
    }, [projectLists4]);

    // delete
    const onClickData = (project) => {
        setProject(project);
        setDeleteModal(true);
    };

    const handleDeleteProjectList = () => {
        if (project) {
            dispatch(onDeleteProjectList(project));
            setDeleteModal(false);
        }
    };

    const activebtn = (ele) => {
        if (ele.closest("button").classList.contains("active")) {
            ele.closest("button").classList.remove("active");
        } else {
            ele.closest("button").classList.add("active");
        }
    };

    //OffCanvas  
    const [isOpen, setIsOpen] = useState(false);

    const toggleOffCanvas = () => {
        setIsOpen(!isOpen);
    };

    // ----------------------------------------------------------------------------------------------------------

    SwiperCore.use([Autoplay]);

    const [activeTab, setActiveTab] = useState('1');
    const [activityTab, setActivityTab] = useState('1');

    const toggleTab = (tab) => {
        if (activeTab !== tab) {
            setActiveTab(tab);
        }
    };

    const toggleActivityTab = (tab) => {
        if (activityTab !== tab) {
            setActivityTab(tab);
        }
    };

    document.title = "Profile | Velzon - React Admin & Dashboard Template";
    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid>
                    <div className="profile-foreground position-relative mx-n4 mt-n4">
                        <div className="profile-wid-bg">
                            <img src={profileBg} alt="" className="profile-wid-img" />
                        </div>
                    </div>
                    <div className="pt-4 mb-4 mb-lg-3 pb-lg-4">
                        <Row className="g-4">
                            <div className="col-auto">
                                <div className="avatar-lg">
                                    <img src={avatar1} alt="user-img"
                                        className="img-thumbnail rounded-circle" />
                                </div>
                            </div>

                            <Col>
                                <div className="p-2">
                                    <h3 className="text-white mb-1">Anna Adame</h3>
                                    <p className="text-white-75">Owner & Founder</p>
                                    <div className="hstack text-white-50 gap-1">
                                        <div className="me-2"><i
                                            className="ri-map-pin-user-line me-1 text-white-75 fs-16 align-middle"></i>California,
                                            United States</div>

                                    </div>
                                </div>
                            </Col>


                        </Row>
                    </div>

                    <Row>
                        <Col lg={12}>
                            <div>
                                <div className="d-flex">
                                    <Nav pills className="animation-nav profile-nav gap-2 gap-lg-3 flex-grow-1"
                                        role="tablist">
                                        <NavItem>
                                            <NavLink
                                                href="#overview-tab"
                                                className={classnames({ active: activeTab === '1' })}
                                                onClick={() => { toggleTab('1'); }}
                                            >
                                                <i className="ri-airplay-fill d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Overview</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#activities"
                                                className={classnames({ active: activeTab === '2' })}
                                                onClick={() => { toggleTab('2'); }}
                                            >
                                                <i className="ri-list-unordered d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Activities</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#projects"
                                                className={classnames({ active: activeTab === '3' })}
                                                onClick={() => { toggleTab('3'); }}
                                            >
                                                <i className="ri-price-tag-line d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Projects</span>
                                            </NavLink>
                                        </NavItem>
                                        <NavItem>
                                            <NavLink
                                                href="#documents"
                                                className={classnames({ active: activeTab === '4' })}
                                                onClick={() => { toggleTab('4'); }}
                                            >
                                                <i className="ri-folder-4-line d-inline-block d-md-none"></i> <span
                                                    className="d-none d-md-inline-block">Billing</span>
                                            </NavLink>
                                        </NavItem>
                                    </Nav>
                                    <div className="flex-shrink-0">
                                        <Link to="/pages-profile-settings" className="btn btn-success"><i
                                            className="ri-edit-box-line align-bottom"></i> Edit Profile</Link>
                                    </div>
                                </div>

                                <TabContent activeTab={activeTab} className="pt-4 text-muted">
                                    <TabPane tabId="1">
                                        <Row>
                                            <Col xxl={3}>


                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-3">Info</h5>
                                                        <div className="table-responsive">
                                                            <Table className="table-borderless mb-0">
                                                                <tbody>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row"> Name :</th>
                                                                        <td className="text-muted">Vishal Testing</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Mobile :</th>
                                                                        <td className="text-muted">+(1) 987 6543</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">E-mail :</th>
                                                                        <td className="text-muted">daveadame@plaine.com</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Designation:</th>
                                                                        <td className="text-muted">Wed Developer</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">City :</th>
                                                                        <td className="text-muted">Surat</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Country :</th>
                                                                        <td className="text-muted">India</td>
                                                                    </tr>
                                                                    <tr>
                                                                        <th className="ps-0" scope="row">Zip Code :</th>
                                                                        <td className="text-muted">849753
                                                                        </td>
                                                                    </tr>

                                                                </tbody>
                                                            </Table>
                                                        </div>
                                                    </CardBody>
                                                </Card>







                                                {/* <Card>
                                                    <CardBody>
                                                        <div className="d-flex align-items-center mb-4">
                                                            <div className="flex-grow-1">
                                                                <h5 className="card-title mb-0">Popular Posts</h5>
                                                            </div>
                                                            <div className="flex-shrink-0">
                                                                <UncontrolledDropdown direction='start'>
                                                                    <DropdownToggle tag="a" id="dropdownMenuLink1" role="button">
                                                                        <i className="ri-more-2-fill fs-14"></i>
                                                                    </DropdownToggle>
                                                                    <DropdownMenu>
                                                                        <DropdownItem>View</DropdownItem>
                                                                        <DropdownItem>Edit</DropdownItem>
                                                                        <DropdownItem>Delete</DropdownItem>
                                                                    </DropdownMenu>
                                                                </UncontrolledDropdown>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mb-4">
                                                            <div className="flex-shrink-0">
                                                                <img src={smallImage4} alt=""
                                                                    height="50" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3 overflow-hidden">
                                                                <Link to="#">
                                                                    <h6 className="text-truncate fs-15">Design your apps in
                                                                        your own way</h6>
                                                                </Link>
                                                                <p className="text-muted mb-0">15 Dec 2021</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex mb-4">
                                                            <div className="flex-shrink-0">
                                                                <img src={smallImage5} alt=""
                                                                    height="50" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3 overflow-hidden">
                                                                <Link to="#">
                                                                    <h6 className="text-truncate fs-15">Smartest
                                                                        Applications for Business</h6>
                                                                </Link>
                                                                <p className="text-muted mb-0">28 Nov 2021</p>
                                                            </div>
                                                        </div>
                                                        <div className="d-flex">
                                                            <div className="flex-shrink-0">
                                                                <img src={smallImage6} alt=""
                                                                    height="50" className="rounded" />
                                                            </div>
                                                            <div className="flex-grow-1 ms-3 overflow-hidden">
                                                                <Link to="#">
                                                                    <h6 className="text-truncate fs-15">How to get creative
                                                                        in your work</h6>
                                                                </Link>
                                                                <p className="text-muted mb-0">21 Nov 2021</p>
                                                            </div>
                                                        </div>
                                                    </CardBody>
                                                </Card> */}
                                            </Col>
                                            <Col xxl={9}>
                                                <Card>
                                                    <CardBody>
                                                        <h5 className="card-title mb-3">About</h5>
                                                        <p>Hi I'm Anna Adame, It will be as simple as Occidental; in
                                                            fact, it will be Occidental. To an English person, it will
                                                            seem like simplified English, as a skeptical Cambridge
                                                            friend of mine told me what Occidental is European languages
                                                            are members of the same family.</p>
                                                        <p>You always want to make sure that your fonts work well
                                                            together and try to limit the number of fonts you use to
                                                            three or less. Experiment and play around with the fonts
                                                            that you already have in the software you’re working with
                                                            reputable font websites. This may be the most commonly
                                                            encountered tip I received from the designers I spoke with.
                                                            They highly encourage that you use different fonts in one
                                                            design, but do not over-exaggerate and go overboard.</p>
                                                        <Row>
                                                            <Col xs={6} md={4}>
                                                                <div className="d-flex mt-4">
                                                                    <div
                                                                        className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                        <div
                                                                            className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                            <i className="ri-user-2-fill"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="mb-1">Designation :</p>
                                                                        <h6 className="text-truncate mb-0">Lead Designer /
                                                                            Developer</h6>
                                                                    </div>
                                                                </div>
                                                            </Col>

                                                            <Col xs={6} md={4}>
                                                                <div className="d-flex mt-4">
                                                                    <div
                                                                        className="flex-shrink-0 avatar-xs align-self-center me-3">
                                                                        <div
                                                                            className="avatar-title bg-light rounded-circle fs-16 text-primary">
                                                                            <i className="ri-global-line"></i>
                                                                        </div>
                                                                    </div>
                                                                    <div className="flex-grow-1 overflow-hidden">
                                                                        <p className="mb-1">Website :</p>
                                                                        <Link to="#" className="fw-semibold fs-15">www.Plaine.com</Link>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                        </Row>
                                                    </CardBody>
                                                </Card>



                                                {/* <Card>
                                                    <CardBody>
                                                        <h5 className="card-title">Projects</h5>
                                                        <div className="d-flex justify-content-end gap-2 mb-2">
                                                            <div className="slider-button-prev">
                                                                <div className="avatar-title fs-18 rounded px-1">
                                                                    <i className="ri-arrow-left-s-line"></i>
                                                                </div>
                                                            </div>
                                                            <div className="slider-button-next">
                                                                <div className="avatar-title fs-18 rounded px-1">
                                                                    <i className="ri-arrow-right-s-line"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <Swiper className="project-swiper"
                                                            slidesPerView={3}
                                                            spaceBetween={20}
                                                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                                                            pagination={{ clickable: true }}
                                                        >

                                                            <div className="swiper-wrapper">
                                                                <SwiperSlide>
                                                                    <Card
                                                                        className="profile-project-card shadow-none profile-project-success mb-0">
                                                                        <CardBody className="p-4">
                                                                            <div className="d-flex">
                                                                                <div
                                                                                    className="flex-grow-1 text-muted overflow-hidden">
                                                                                    <h5
                                                                                        className="fs-14 text-truncate mb-1">
                                                                                        <Link to="#"
                                                                                            className="text-dark">ABC
                                                                                            Project Customization</Link>
                                                                                    </h5>
                                                                                    <p className="text-muted text-truncate mb-0">
                                                                                        Last Update : <span className="fw-semibold text-dark">4 hr Ago</span></p>
                                                                                </div>
                                                                                <div className="flex-shrink-0 ms-2">
                                                                                    <div className="badge badge-soft-warning fs-10">
                                                                                        Inprogress</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex mt-4">
                                                                                <div className="flex-grow-1">
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2">
                                                                                        <div>
                                                                                            <h5 className="fs-12 text-muted mb-0">
                                                                                                Members :</h5>
                                                                                        </div>
                                                                                        <div className="avatar-group">
                                                                                            <div
                                                                                                className="avatar-group-item">
                                                                                                <div className="avatar-xs">
                                                                                                    <img src={avatar4}
                                                                                                        alt=""
                                                                                                        className="rounded-circle img-fluid" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="avatar-group-item">
                                                                                                <div className="avatar-xs">
                                                                                                    <img src={avatar5}
                                                                                                        alt=""
                                                                                                        className="rounded-circle img-fluid" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="avatar-group-item">
                                                                                                <div className="avatar-xs">
                                                                                                    <div
                                                                                                        className="avatar-title rounded-circle bg-light text-primary">
                                                                                                        A
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="avatar-group-item">
                                                                                                <div className="avatar-xs">
                                                                                                    <img src={avatar2}
                                                                                                        alt=""
                                                                                                        className="rounded-circle img-fluid" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </CardBody>
                                                                    </Card>
                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <Card className="profile-project-card shadow-none profile-project-danger mb-0">
                                                                        <CardBody className="p-4">
                                                                            <div className="d-flex">
                                                                                <div
                                                                                    className="flex-grow-1 text-muted overflow-hidden">
                                                                                    <h5 className="fs-14 text-truncate mb-1">
                                                                                        <Link to="#" className="text-dark">Client - John</Link></h5>
                                                                                    <p className="text-muted text-truncate mb-0">
                                                                                        Last Update : <span
                                                                                            className="fw-semibold text-dark">1
                                                                                            hr Ago</span></p>
                                                                                </div>
                                                                                <div className="flex-shrink-0 ms-2">
                                                                                    <div
                                                                                        className="badge badge-soft-success fs-10">
                                                                                        Completed</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex mt-4">
                                                                                <div className="flex-grow-1">
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2">
                                                                                        <div>
                                                                                            <h5
                                                                                                className="fs-12 text-muted mb-0">
                                                                                                Members :</h5>
                                                                                        </div>
                                                                                        <div className="avatar-group">
                                                                                            <div
                                                                                                className="avatar-group-item">
                                                                                                <div className="avatar-xs">
                                                                                                    <img src={avatar2}
                                                                                                        alt=""
                                                                                                        className="rounded-circle img-fluid" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="avatar-group-item">
                                                                                                <div className="avatar-xs">
                                                                                                    <div
                                                                                                        className="avatar-title rounded-circle bg-light text-primary">
                                                                                                        C
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </CardBody>
                                                                    </Card>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <Card
                                                                        className="profile-project-card shadow-none profile-project-info mb-0">
                                                                        <CardBody className="p-4">
                                                                            <div className="d-flex">
                                                                                <div
                                                                                    className="flex-grow-1 text-muted overflow-hidden">
                                                                                    <h5
                                                                                        className="fs-14 text-truncate mb-1">
                                                                                        <Link to="#" className="text-dark">Brand logo Design</Link></h5>
                                                                                    <p className="text-muted text-truncate mb-0">
                                                                                        Last Update : <span
                                                                                            className="fw-semibold text-dark">2
                                                                                            hr Ago</span></p>
                                                                                </div>
                                                                                <div className="flex-shrink-0 ms-2">
                                                                                    <div
                                                                                        className="badge badge-soft-warning fs-10">
                                                                                        Inprogress</div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="d-flex mt-4">
                                                                                <div className="flex-grow-1">
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2">
                                                                                        <div>
                                                                                            <h5
                                                                                                className="fs-12 text-muted mb-0">
                                                                                                Members :</h5>
                                                                                        </div>
                                                                                        <div className="avatar-group">
                                                                                            <div
                                                                                                className="avatar-group-item">
                                                                                                <div className="avatar-xs">
                                                                                                    <img src={avatar5}
                                                                                                        alt=""
                                                                                                        className="rounded-circle img-fluid" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </CardBody>
                                                                    </Card>
                                                                </SwiperSlide>
                                                                <SwiperSlide>
                                                                    <Card
                                                                        className="profile-project-card shadow-none profile-project-danger mb-0">
                                                                        <CardBody className="p-4">
                                                                            <div className="d-flex">
                                                                                <div
                                                                                    className="flex-grow-1 text-muted overflow-hidden">
                                                                                    <h5
                                                                                        className="fs-14 text-truncate mb-1">
                                                                                        <Link to="#"
                                                                                            className="text-dark">Project
                                                                                            update</Link></h5>
                                                                                    <p
                                                                                        className="text-muted text-truncate mb-0">
                                                                                        Last Update : <span
                                                                                            className="fw-semibold text-dark">4
                                                                                            hr Ago</span></p>
                                                                                </div>
                                                                                <div className="flex-shrink-0 ms-2">
                                                                                    <div
                                                                                        className="badge badge-soft-success fs-10">
                                                                                        Completed</div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="d-flex mt-4">
                                                                                <div className="flex-grow-1">
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2">
                                                                                        <div>
                                                                                            <h5
                                                                                                className="fs-12 text-muted mb-0">
                                                                                                Members :</h5>
                                                                                        </div>
                                                                                        <div className="avatar-group">
                                                                                            <div
                                                                                                className="avatar-group-item">
                                                                                                <div className="avatar-xs">
                                                                                                    <img src={avatar4}
                                                                                                        alt=""
                                                                                                        className="rounded-circle img-fluid" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="avatar-group-item">
                                                                                                <div className="avatar-xs">
                                                                                                    <img src={avatar5}
                                                                                                        alt=""
                                                                                                        className="rounded-circle img-fluid" />
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </CardBody>

                                                                    </Card>

                                                                </SwiperSlide>

                                                                <SwiperSlide>
                                                                    <Card className="profile-project-card shadow-none profile-project-warning mb-0">
                                                                        <CardBody className="p-4">
                                                                            <div className="d-flex">
                                                                                <div className="flex-grow-1 text-muted overflow-hidden">
                                                                                    <h5 className="fs-14 text-truncate mb-1">
                                                                                        <Link to="#" className="text-dark">Chat App</Link></h5>
                                                                                    <p
                                                                                        className="text-muted text-truncate mb-0">
                                                                                        Last Update : <span
                                                                                            className="fw-semibold text-dark">1
                                                                                            hr Ago</span></p>
                                                                                </div>
                                                                                <div className="flex-shrink-0 ms-2">
                                                                                    <div
                                                                                        className="badge badge-soft-warning fs-10">
                                                                                        Inprogress</div>
                                                                                </div>
                                                                            </div>

                                                                            <div className="d-flex mt-4">
                                                                                <div className="flex-grow-1">
                                                                                    <div
                                                                                        className="d-flex align-items-center gap-2">
                                                                                        <div>
                                                                                            <h5
                                                                                                className="fs-12 text-muted mb-0">
                                                                                                Members :</h5>
                                                                                        </div>
                                                                                        <div className="avatar-group">
                                                                                            <div
                                                                                                className="avatar-group-item">
                                                                                                <div className="avatar-xs">
                                                                                                    <img src={avatar4}
                                                                                                        alt=""
                                                                                                        className="rounded-circle img-fluid" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="avatar-group-item">
                                                                                                <div className="avatar-xs">
                                                                                                    <img src={avatar5}
                                                                                                        alt=""
                                                                                                        className="rounded-circle img-fluid" />
                                                                                                </div>
                                                                                            </div>
                                                                                            <div
                                                                                                className="avatar-group-item">
                                                                                                <div className="avatar-xs">
                                                                                                    <div
                                                                                                        className="avatar-title rounded-circle bg-light text-primary">
                                                                                                        A
                                                                                                    </div>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </CardBody>
                                                                    </Card>
                                                                </SwiperSlide>
                                                            </div>
                                                        </Swiper>
                                                    </CardBody>
                                                </Card> */}
                                            </Col>
                                        </Row>
                                    </TabPane>
                                    <TabPane tabId="2">
                                        <Card>
                                            <CardBody>
                                                <h5 className="card-title mb-3">Activities</h5>
                                                <div className="acitivity-timeline">
                                                    <div className="acitivity-item d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={avatar1} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Oliver Phillips <span
                                                                className="badge bg-soft-primary text-primary align-middle">New</span>
                                                            </h6>
                                                            <p className="text-muted mb-2">We talked about a project on linkedin.</p>
                                                            <small className="mb-0 text-muted">Today</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item py-3 d-flex">
                                                        <div className="flex-shrink-0 avatar-xs acitivity-avatar">
                                                            <div className="avatar-title bg-soft-success text-success rounded-circle"> N </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Nancy Martino <span
                                                                className="badge bg-soft-secondary text-secondary align-middle">In
                                                                Progress</span></h6>
                                                            <p className="text-muted mb-2"><i
                                                                className="ri-file-text-line align-middle ms-2"></i>
                                                                Create new project Buildng product</p>
                                                            <div className="avatar-group mb-2">
                                                                <Link to="#" className="avatar-group-item"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="" data-bs-original-title="Christi">
                                                                    <img src={avatar4} alt=""
                                                                        className="rounded-circle avatar-xs" />
                                                                </Link>
                                                                <Link to="#" className="avatar-group-item"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="" data-bs-original-title="Frank Hook">
                                                                    <img src={avatar3} alt=""
                                                                        className="rounded-circle avatar-xs" />
                                                                </Link>
                                                                <Link to="#" className="avatar-group-item"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="" data-bs-original-title=" Ruby">
                                                                    <div className="avatar-xs">
                                                                        <div className="avatar-title rounded-circle bg-light text-primary">R</div>
                                                                    </div>
                                                                </Link>
                                                                <Link to="#" className="avatar-group-item"
                                                                    data-bs-toggle="tooltip" data-bs-placement="top"
                                                                    title="" data-bs-original-title="more">
                                                                    <div className="avatar-xs">
                                                                        <div className="avatar-title rounded-circle">
                                                                            2+
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>
                                                            <small className="mb-0 text-muted">Yesterday</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item py-3 d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={avatar2} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Natasha Carey <span className="badge bg-soft-success text-success align-middle">Completed</span>
                                                            </h6>
                                                            <p className="text-muted mb-2">Adding a new event with
                                                                attachments</p>
                                                            <Row >
                                                                <Col xxl={4}>
                                                                    <div className="row border border-dashed gx-2 p-2 mb-2">
                                                                        <div className="col-4">
                                                                            <img src={smallImage2}
                                                                                alt="" className="img-fluid rounded" />
                                                                        </div>

                                                                        <div className="col-4">
                                                                            <img src={smallImage3}
                                                                                alt="" className="img-fluid rounded" />
                                                                        </div>

                                                                        <div className="col-4">
                                                                            <img src={smallImage4}
                                                                                alt="" className="img-fluid rounded" />
                                                                        </div>

                                                                    </div>

                                                                </Col>
                                                            </Row>
                                                            <small className="mb-0 text-muted">25 Nov</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item py-3 d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={avatar6} alt="" className="avatar-xs rounded-circle acitivity-avatar" />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Bethany Johnson</h6>
                                                            <p className="text-muted mb-2">added a new member to velzon
                                                                dashboard</p>
                                                            <small className="mb-0 text-muted">19 Nov</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item py-3 d-flex">
                                                        <div className="flex-shrink-0">
                                                            <div className="avatar-xs acitivity-avatar">
                                                                <div
                                                                    className="avatar-title rounded-circle bg-soft-danger text-danger">
                                                                    <i className="ri-shopping-bag-line"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Your order is placed <span
                                                                className="badge badge-soft-success align-middle">Out
                                                                of Delivery</span></h6>
                                                            <p className="text-muted mb-2">These customers can rest assured
                                                                their order has been placed.</p>
                                                            <small className="mb-0 text-muted">16 Nov</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item py-3 d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={avatar7} alt=""
                                                                className="avatar-xs rounded-circle acitivity-avatar" />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Lewis Pratt</h6>
                                                            <p className="text-muted mb-2">They all have something to say
                                                                beyond the words on the page. They can come across as
                                                                casual or neutral, exotic or graphic. </p>
                                                            <small className="mb-0 text-muted">22 Oct</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item py-3 d-flex">
                                                        <div className="flex-shrink-0">
                                                            <div className="avatar-xs acitivity-avatar">
                                                                <div
                                                                    className="avatar-title rounded-circle bg-soft-info text-info">
                                                                    <i className="ri-line-chart-line"></i>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">Monthly sales report</h6>
                                                            <p className="text-muted mb-2"><span className="text-danger">2 days
                                                                left</span> notification to submit the monthly sales
                                                                report. <Link to="#" className="link-warning text-decoration-underline">Reports
                                                                    Builder</Link></p>
                                                            <small className="mb-0 text-muted">15 Oct</small>
                                                        </div>
                                                    </div>
                                                    <div className="acitivity-item d-flex">
                                                        <div className="flex-shrink-0">
                                                            <img src={avatar8} alt=""
                                                                className="avatar-xs rounded-circle acitivity-avatar" />
                                                        </div>
                                                        <div className="flex-grow-1 ms-3">
                                                            <h6 className="mb-1">New ticket received <span
                                                                className="badge bg-soft-success text-success align-middle">Completed</span>
                                                            </h6>
                                                            <p className="text-muted mb-2">User <span
                                                                className="text-secondary">Erica245</span> submitted a
                                                                ticket.</p>
                                                            <small className="mb-0 text-muted">26 Aug</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </CardBody>
                                        </Card>
                                    </TabPane>

                                    <TabPane tabId="3">
                                        <Card>
                                            <CardBody>
                                                <Row>

                                                    {(projectLists4 || []).map((item, index) => (
                                                        <React.Fragment key={index}>
                                                            {item.isDesign1 ?
                                                                <Col xxl={6} sm={6} className="project-card">
                                                                    <Card className="card-height-100">
                                                                        <CardBody>
                                                                            <div className="d-flex flex-column h-100">
                                                                                <div className="d-flex justify-Content-between">
                                                                                    <div className="flex-grow-1">
                                                                                        <p className="text-muted mb-4">Deployed on 7th Oct 2023</p>
                                                                                    </div>
                                                                                    <div className="flex-shrink-0">
                                                                                        <div className="d-flex gap-1 align-items-center">
                                                                                            <button type="button" className={`btn avatar-xs mt-n1 p-0 favourite-btn ${item.ratingClass}`} onClick={(e) => activebtn(e.target)}>
                                                                                                <span className="avatar-title bg-transparent fs-15">
                                                                                                    <i className="ri-star-fill"></i>
                                                                                                </span>
                                                                                            </button>
                                                                                            <UncontrolledDropdown direction='start'>
                                                                                                <DropdownToggle tag="button" className="btn btn-link text-muted p-1 mt-n2 py-0 text-decoration-none fs-15">
                                                                                                    <FeatherIcon icon="more-horizontal" className="icon-sm" />
                                                                                                </DropdownToggle>

                                                                                                <DropdownMenu className="dropdown-menu-end">
                                                                                                    <DropdownItem href="project-overview"><i className="ri-file-add-line align-bottom me-2 text-muted"></i> Add Domain</DropdownItem>
                                                                                                    <DropdownItem href="apps-projects-create"><i className="mdi mdi-rocket-launch-outline align-bottom me-2 text-muted"></i> Launch App</DropdownItem>
                                                                                                    <DropdownItem href="/apps-api-key"><i className="ri-shield-keyhole-line align-bottom me-2 text-muted"></i> API Key</DropdownItem>
                                                                                                    <DropdownItem href="apps-projects-create"><i className="mdi mdi-view-list align-bottom me-2 text-muted"></i> View Usage</DropdownItem>
                                                                                                    <DropdownItem href="project-overview"><i className="mdi mdi-alert align-bottom me-2 text-muted"></i> Alert</DropdownItem>
                                                                                                    <div className="dropdown-divider"></div>
                                                                                                    <DropdownItem href="#" onClick={() => onClickData(item)} data-bs-toggle="modal" data-bs-target="#removeProjectModal"><i className="mdi mdi-delete-restore align-bottom me-2 text-muted"></i> Destroy</DropdownItem>
                                                                                                </DropdownMenu>
                                                                                            </UncontrolledDropdown>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="d-flex mb-2">
                                                                                    <div className="flex-shrink-0 me-3">
                                                                                        <div>
                                                                                            {/* <img src={require('../../../assets/images/Jupyter Notebook.png')}></img> */}
                                                                                            <img src={item.img} alt="" className="img-fluid p-1" />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="flex-grow-1">
                                                                                        <h5 className="mb-1 fs-16"><Link to="/project-overview" className="text-dark"><span style={{ fontSize: "18px", fontWeight: "bold" }}>Project Name: </span>{item.label}<br />(Based on Jupyter Notebook)</Link></h5>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="mt-auto">
                                                                                    <div className="d-flex mb-2" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                                                        <div className="flex-shrink-0">
                                                                                            <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-map-pin-2-line align-bottom"></i> <span style={{ fontWeight: "bold" }}>Region: </span>London</div>
                                                                                            <div><i style={{ color: "#878a99", fontSize: "16px" }} className="las la-server"></i> <span style={{ fontWeight: "bold" }}>Server IP: </span>49.36.89.98</div>
                                                                                            <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-cloud-line"></i> <span style={{ fontWeight: "bold" }}>Cloud: </span>AWS</div>
                                                                                        </div>
                                                                                        <div className="flex-shrink-0">
                                                                                            <div style={{ justifyContent: "space-between" }}><i style={{ color: "#878a99", fontSize: "16px" }} className="las la-cog"></i> <span style={{ fontWeight: "bold" }}>Configuration: </span><p style={{ paddingLeft: "5px" }}> 8 vCPU<br />12GB RAM<br />250GB SSD<br />($70/mo)</p></div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="mt-auto">
                                                                                    <div className="d-flex mb-2" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                                                        <div className="flex-shrink-0">
                                                                                            <Button color="primary"> Launch App </Button>
                                                                                        </div>
                                                                                        <div className="flex-shrink-0">
                                                                                            <Button color="secondary"> Clone App </Button>
                                                                                        </div>
                                                                                        <div className="flex-shrink-0">
                                                                                            <a target="_blank" href="https://docs.jupyter.org/en/latest/">
                                                                                                <Button color="success"> Document </Button>
                                                                                            </a >
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </CardBody>
                                                                        <div className="card-footer bg-transparent border-top-dashed py-2">
                                                                            <div className="d-flex align-items-center">
                                                                                <div className="flex-grow-1">
                                                                                    <div className="avatar-group" style={{ alignItems: 'center', display: 'flex' }}>
                                                                                        {item.subItem.map((item, key) => (
                                                                                            <React.Fragment key={key}>
                                                                                                {item.imgFooter ? <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Darline Williams">
                                                                                                    <div className="avatar-xxs">
                                                                                                        <img src={item.imgFooter} alt="" className="rounded-circle img-fluid" />
                                                                                                    </div>
                                                                                                </Link> : <Link to="#" className="avatar-group-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Add Members">
                                                                                                    <div className="avatar-xxs">
                                                                                                        <div className={item.test ? "avatar-title rounded-circle bg-" + item.test : "avatar-title rounded-circle bg-light border-dashed border text-primary fs-16 "}>
                                                                                                            {item.imgNumber}
                                                                                                        </div>
                                                                                                    </div>
                                                                                                </Link>}
                                                                                            </React.Fragment>
                                                                                        ))}
                                                                                        <h5 className='ps-1 pt-2'>Notebook</h5>
                                                                                    </div>
                                                                                </div>
                                                                                <div className="flex-shrink-0">
                                                                                    <div style={{ display: "flex" }}>
                                                                                        <p className="mb-2 me-1 text-uppercase fw-medium fs-14">Status :</p>
                                                                                        <div style={{ display: "flex", alignItems: "center" }} className="badge bg-success fs-12">Running</div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </Card>
                                                                </Col>
                                                                : null
                                                            }
                                                        </React.Fragment>
                                                    ))}


                                                    <Col lg={12}>
                                                        <Pagination listClassName="justify-content-center" className="pagination-separated mb-0">
                                                            <PaginationItem disabled> <PaginationLink to="#"> <i className="mdi mdi-chevron-left" /> </PaginationLink> </PaginationItem>
                                                            <PaginationItem active> <PaginationLink to="#"> 1 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 2 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 3 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 4 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> 5 </PaginationLink> </PaginationItem>
                                                            <PaginationItem> <PaginationLink to="#"> <i className="mdi mdi-chevron-right" /> </PaginationLink> </PaginationItem>
                                                        </Pagination>
                                                    </Col>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </TabPane>

                                    <TabPane tabId="4">
                                        <Card>
                                            <CardBody>
                                                <div className="d-flex align-items-center mb-4">
                                                    <h5 className="card-title flex-grow-1 mb-0">Billing</h5>
                                                   
                                                </div>
                                                <Row>
                                                    <div>
                                                        <Card>
                                                            <CardBody>
                                                                <Link to="/accounts">
                                                                    <Button color='primary mb-2' >Create account</Button>
                                                                </Link>
                                                                <Nav tabs className="nav nav-tabs nav-border-top nav-border-top-primary  mb-3">
                                                                    <NavItem>
                                                                        <NavLink style={{ cursor: "pointer" }} className={classnames({ active: topBorderTab === "1", })} onClick={() => { topBordertoggle("1"); }} >
                                                                            <i className="ri-home-5-line align-middle me-1"></i> My billing account
                                                                        </NavLink>
                                                                    </NavItem>
                                                                    <NavItem>
                                                                        <NavLink style={{ cursor: "pointer" }} className={classnames({ active: topBorderTab === "2", })} onClick={() => { topBordertoggle("2"); }} >
                                                                            <i className="ri-user-line me-1 align-middle"></i> My projects
                                                                        </NavLink>
                                                                    </NavItem>
                                                                </Nav>

                                                                <TabContent activeTab={topBorderTab} className="text-muted">
                                                                    <TabPane tabId="1" id="nav-border-justified-home">
                                                                        <div className="table-responsive">
                                                                            <Table className="align-middle table-nowrap mb-0">
                                                                                <thead className="table-light">
                                                                                    <tr>
                                                                                        <th scope="col" style={{ "width": "46px" }}>
                                                                                            <div className="form-check">
                                                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="cardtableCheck" />
                                                                                                <Label className="form-check-label" htmlFor="cardtableCheck"></Label>
                                                                                            </div>
                                                                                        </th>
                                                                                        <th scope="col">Billing account name</th>
                                                                                        <th scope="col">Billing account ID</th>
                                                                                        <th scope="col">Status</th>
                                                                                        <th scope="col"># of projects</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>
                                                                                            <div className="form-check">
                                                                                                <Input className="form-check-input" type="checkbox" defaultValue="" id="cardtableCheck01" />
                                                                                                <Label className="form-check-label" htmlFor="cardtableCheck01"></Label>
                                                                                            </div>
                                                                                        </td>
                                                                                        <td>William Elmore</td>
                                                                                        <td>016DCD-202DBE-64B628</td>
                                                                                        <td><span className='badge text-uppercase badge-soft-info'>Active</span></td>
                                                                                        <td>1</td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </div>
                                                                    </TabPane>

                                                                    <TabPane tabId="2" id="nav-border-justified-profile">
                                                                        <div className="table-responsive">
                                                                            <Table className="align-middle table-nowrap mb-0">
                                                                                <thead className="table-light">
                                                                                    <tr>
                                                                                        <th scope="col">Project Name</th>
                                                                                        <th scope="col">Project ID</th>
                                                                                        <th scope="col">Billing account</th>
                                                                                        <th scope="col">Billing account ID</th>
                                                                                        <th scope="col">Actions</th>
                                                                                    </tr>
                                                                                </thead>
                                                                                <tbody>
                                                                                    <tr>
                                                                                        <td>My First Project</td>
                                                                                        <td>omega-winter-265719</td>
                                                                                        <td>Free trial billing account</td>
                                                                                        <td>018ABF-1A501C-A30D91</td>
                                                                                        <td>
                                                                                            <UncontrolledDropdown>
                                                                                                <DropdownToggle tag="a" className="text-reset dropdown-btn">
                                                                                                    <span className="text-muted fs-18"><i className="mdi mdi-dots-vertical"></i></span>
                                                                                                </DropdownToggle>
                                                                                                <DropdownMenu className="dropdown-menu-end">
                                                                                                    <DropdownItem onClick={toggle}>Disable billing</DropdownItem>
                                                                                                    <DropdownItem>Change billing</DropdownItem>
                                                                                                    <Modal isOpen={modal} toggle={toggle} {...args}>
                                                                                                        <ModalHeader toggle={toggle}>Disable billing for project "analytics testing"? </ModalHeader>
                                                                                                        <ModalBody>
                                                                                                            When you disable billing, any billable activity of your services will stop, your billable resources may be deleted, and your application may stop functioning.
                                                                                                            Any unbilled charges to date will be billed to the linked account.
                                                                                                        </ModalBody>
                                                                                                        <ModalFooter>
                                                                                                            <Button color="secondary" onClick={toggle}>
                                                                                                                Cancel
                                                                                                            </Button>
                                                                                                            <Button color="primary" onClick={toggle}>
                                                                                                                Disable Billing
                                                                                                            </Button>{' '}
                                                                                                        </ModalFooter>
                                                                                                    </Modal>
                                                                                                </DropdownMenu>
                                                                                            </UncontrolledDropdown>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>csvdemo</td>
                                                                                        <td>csvdemo</td>
                                                                                        <td>My Billing Account 1</td>
                                                                                        <td>01DD18-46EBA5-2DAA68</td>
                                                                                        <td>
                                                                                            <UncontrolledDropdown>
                                                                                                <DropdownToggle tag="a" className="text-reset dropdown-btn">
                                                                                                    <span className="text-muted fs-18"><i className="mdi mdi-dots-vertical"></i></span>
                                                                                                </DropdownToggle>
                                                                                                <DropdownMenu className="dropdown-menu-end">
                                                                                                    <DropdownItem onClick={toggle}>Disable billing</DropdownItem>
                                                                                                    <DropdownItem>Change billing</DropdownItem>
                                                                                                </DropdownMenu>
                                                                                            </UncontrolledDropdown>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>reports</td>
                                                                                        <td>reports-298400</td>
                                                                                        <td>Reporting account</td>
                                                                                        <td>019961-EB83D4-F0CA6B</td>
                                                                                        <td>
                                                                                            <UncontrolledDropdown>
                                                                                                <DropdownToggle tag="a" className="text-reset dropdown-btn">
                                                                                                    <span className="text-muted fs-18"><i className="mdi mdi-dots-vertical"></i></span>
                                                                                                </DropdownToggle>
                                                                                                <DropdownMenu className="dropdown-menu-end">
                                                                                                    <DropdownItem onClick={toggle}>Disable billing</DropdownItem>
                                                                                                    <DropdownItem>Change billing</DropdownItem>
                                                                                                </DropdownMenu>
                                                                                            </UncontrolledDropdown>
                                                                                        </td>
                                                                                    </tr>
                                                                                    <tr>
                                                                                        <td>analytics testing</td>
                                                                                        <td>analytics-testing-321</td>
                                                                                        <td>Billing is disabled</td>
                                                                                        <td>-</td>
                                                                                        <td>
                                                                                            <UncontrolledDropdown>
                                                                                                <DropdownToggle tag="a" className="text-reset dropdown-btn">
                                                                                                    <span className="text-muted fs-18"><i className="mdi mdi-dots-vertical"></i></span>
                                                                                                </DropdownToggle>
                                                                                                <DropdownMenu className="dropdown-menu-end">
                                                                                                    <DropdownItem onClick={toggle}>Disable billing</DropdownItem>
                                                                                                    <DropdownItem>Change billing</DropdownItem>
                                                                                                </DropdownMenu>
                                                                                            </UncontrolledDropdown>
                                                                                        </td>
                                                                                    </tr>
                                                                                </tbody>
                                                                            </Table>
                                                                        </div>
                                                                    </TabPane>
                                                                </TabContent>
                                                            </CardBody>
                                                        </Card>
                                                    </div>
                                                </Row>
                                            </CardBody>
                                        </Card>
                                    </TabPane>
                                </TabContent>
                            </div>
                        </Col>
                    </Row>

                </Container>
            </div>
        </React.Fragment>
    );
};

export default SimplePage;