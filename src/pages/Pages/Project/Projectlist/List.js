import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Input, Row, UncontrolledDropdown } from 'reactstrap';
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

    return (
        <React.Fragment>
            <ToastContainer closeButton={false} />
            <DeleteModal
                show={deleteModal}
                onDeleteClick={() => handleDeleteProjectList()}
                onCloseClick={() => setDeleteModal(false)}
            />
            <Row className="g-4 mb-3">
                <div className="col-sm-3 ms-auto">
                    <div className="d-flex justify-content-sm-end gap-2">
                        <div className="search-box ms-2 col-sm-7">
                            <Input type="text" className="form-control" placeholder="Search..." />
                            <i className="ri-search-line search-icon"></i>
                        </div>

                        <select className="form-control w-md" data-choices data-choices-search-false>
                            <option value="All">All</option>
                            <option value="Last 7 Days">Last 7 Days</option>
                            <option value="Last 30 Days">Last 30 Days</option>
                            <option value="Last Year">Last Year</option>
                            <option value="This Month">This Month</option>
                            <option value="Today">Today</option>
                            <option value="Yesterday" defaultValue>Yesterday</option>
                        </select>
                    </div>
                </div>
            </Row>

            <div className="row">
                {(projectLists4 || []).map((item, index) => (
                    <React.Fragment key={index}>
                        {item.isDesign1 ?
                            <Col xxl={6} sm={6} className="project-card">
                                <Card className="card-height-100">
                                    <CardBody>
                                        <div className="d-flex flex-column h-100">
                                            <div className="d-flex">
                                                <div className="flex-grow-1">
                                                    <p className="text-muted mb-4">{item.time}</p>
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
                                                                <DropdownItem href="notebook-overview"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> Add Domain</DropdownItem>
                                                                <DropdownItem href="apps-projects-create"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Launch Arp</DropdownItem>
                                                                <DropdownItem href="notebook-overview"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> API Key</DropdownItem>
                                                                <DropdownItem href="apps-projects-create"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> View Usage</DropdownItem>
                                                                <DropdownItem href="notebook-overview"><i className="ri-eye-fill align-bottom me-2 text-muted"></i> Alert</DropdownItem>
                                                                <DropdownItem href="apps-projects-create"><i className="ri-pencil-fill align-bottom me-2 text-muted"></i> Destroy</DropdownItem>
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
                                                    <h5 className="mb-1 fs-16"><Link to="/notebook-overview" className="text-dark">{item.label}</Link></h5>
                                                    <p className="text-muted mb-3">{item.caption}</p>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <div className="d-flex mb-2" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div className="flex-shrink-0">
                                                        <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-map-pin-2-line align-bottom"></i> <span>London </span></div>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-google-line"></i> <span>Google IP: </span>10.4.9.3</div>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-cloud-line"></i> <span>Cloud: </span>Aws</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <div className="d-flex mb-2" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <div className="flex-shrink-0">
                                                        <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-map-pin-2-line align-bottom"></i> <span>London </span></div>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-google-line"></i> <span>Google IP: </span>10.4.9.3</div>
                                                    </div>
                                                    <div className="flex-shrink-0">
                                                        <div><i style={{ color: "#878a99", fontSize: "16px" }} className="ri-cloud-line"></i> <span>Cloud: </span>Aws</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt-auto">
                                                <Button className="btn-soft-info"> Launch App </Button>
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