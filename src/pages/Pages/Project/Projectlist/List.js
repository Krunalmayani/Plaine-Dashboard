import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardHeader, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Row, UncontrolledDropdown, Offcanvas, OffcanvasBody } from 'reactstrap';
import DeleteModal from '../../../../Components/Common/DeleteModal';
import { ToastContainer } from 'react-toastify';

//redux
import { useSelector, useDispatch } from 'react-redux';

//Import Icons
import FeatherIcon from "feather-icons-react";

//import action
import {
    getProjectList4 as onGetProjectList,
    deleteProjectList as onDeleteProjectList,
} from "../../../../slices/thunks";


const List = () => {
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

    return (
        <React.Fragment>
            <CardHeader style={{ backgroundColor: "white", margin: "10px 0", borderRadius: "5px" }}>
                <Row className="justify-content-center mb-4">
                    <Col lg={6} className='mt-4'>
                        <Row className="g-2">
                            <Col>
                                <div className="position-relative mb-3">
                                    <Input type="text" className="form-control form-control-lg bg-light border-light" placeholder="Search here.." defaultValue="HSN Code Classifier" />
                                    <Link to="#" className="btn btn-link link-success btn-lg position-absolute end-0 top-0" onClick={toggleOffCanvas}><i className="ri-mic-fill"></i></Link>
                                </div>
                            </Col>
                            <div className="col-auto">
                                <button type="submit" className="btn btn-primary btn-lg waves-effect waves-light"><i className="mdi mdi-magnify me-1"></i> Search</button>
                            </div>
                        </Row>
                    </Col>
                    <Col lg={12}>
                        <h5 className="fs-16 fw-bold text-center mb-0">Showing results for "<span className="text-primary fw-medium fst-italic">HSN Code Classifier</span> "</h5>
                    </Col>
                </Row>

                <Offcanvas isOpen={isOpen}
                    direction="top"
                    toggle={toggleOffCanvas}
                    tabIndex="-1"
                >
                    <OffcanvasBody>
                        <button type="button" className="btn-close text-reset float-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                            <div className="search-voice">
                                <i className="ri-mic-fill align-middle"></i>
                                <span className="voice-wave"></span>
                                <span className="voice-wave"></span>
                                <span className="voice-wave"></span>
                            </div>
                            <h4>Talk to me, what can I do for you?</h4>
                        </div>
                    </OffcanvasBody>
                </Offcanvas>
            </CardHeader>

            <div className="row">
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
                                                                <DropdownItem href="project-overview"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> Add Domain</DropdownItem>
                                                                <DropdownItem href="apps-projects-create"><i className="mdi mdi-rocket-launch-outline align-bottom me-2 text-muted"></i> Launch Arp</DropdownItem>
                                                                <DropdownItem href="project-overview"><i className="ri-folder-keyhole-line align-bottom me-2 text-muted"></i> API Key</DropdownItem>
                                                                <DropdownItem href="apps-projects-create"><i className="mdi mdi-view-list align-bottom me-2 text-muted"></i> View Usage</DropdownItem>
                                                                <DropdownItem href="project-overview"><i className="mdi mdi-alert align-bottom me-2 text-muted"></i> Alert</DropdownItem>
                                                                <DropdownItem href="apps-projects-create"><i className="mdi mdi-delete-restore align-bottom me-2 text-muted"></i> Destroy</DropdownItem>
                                                                <div className="dropdown-divider"></div>
                                                                <DropdownItem href="#" onClick={() => onClickData(item)} data-bs-toggle="modal" data-bs-target="#removeProjectModal"><i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i> Deploy</DropdownItem>
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
                                                        <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-google-line"></i> <span style={{ fontWeight: "bold" }}>Server IP: </span>49.36.89.98</div>
                                                        <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-cloud-line"></i> <span style={{ fontWeight: "bold" }}>Deployed: </span>AWS</div>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div style={{ display: "flex", justifyContent: "space-between" }}><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-google-line"></i> <span style={{ fontWeight: "bold" }}>configuren: </span><p style={{ paddingLeft: "5px" }}> 8 vCPU<br />12GB RAM<br />250GB RAM SSD<br />($70/mo)</p></div>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-cloud-line"></i> <span style={{ fontWeight: "bold" }}>Cloud: </span>Aws</div>
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
                                                        <Button color="success"> Domain </Button>
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
                                                <div className="text-muted">
                                                    <i className="ri-calendar-event-fill me-1 align-bottom"></i> {item.date}
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

            </div>
            <Row className="g-0 text-center text-sm-start align-items-center mb-4">
                <Col sm={6}>
                    <div>
                        <p className="mb-sm-0 text-muted">Showing <span className="fw-semibold">1</span> to <span className="fw-semibold">10</span> of <span className="fw-semibold text-decoration-underline">12</span> entries</p>
                    </div>
                </Col>

                <Col sm={6}>
                    <ul className="pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
                        <li className="page-item disabled">
                            <Link to="#" className="page-link">Previous</Link>
                        </li>
                        <li className="page-item active">
                            <Link to="#" className="page-link">1</Link>
                        </li>
                        <li className="page-item ">
                            <Link to="#" className="page-link">2</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#" className="page-link">3</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#" className="page-link">4</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#" className="page-link">5</Link>
                        </li>
                        <li className="page-item">
                            <Link to="#" className="page-link">Next</Link>
                        </li>
                    </ul>
                </Col>
            </Row>
        </React.Fragment>
    );
};

export default List;