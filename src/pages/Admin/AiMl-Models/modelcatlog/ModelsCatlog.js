import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  UncontrolledDropdown,
} from "reactstrap";
import DeleteModal from "../../../../Components/Common/DeleteModal";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import TableContainer from "../../../../Components/Common/TableContainer";
import { APIKeys, CreatedBy, ExpiryDate, Name, Status } from "./ModelcatlogCol";
import { CreateDate } from "../../../HelpSupportTickets/ListSupportTicekts/TicketCol";
import { useDispatch, useSelector } from "react-redux";
import { getAPIKey } from "../../../../slices/thunks";
import { modelscatlog } from "../../../../common/data";
import Select from "react-select";


function ModelsCatlog(props) {

  document.title = "Plaine | Admin/ModelsCategory";
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);
  const [apiKeys, setApiKey] = useState([]);
  const [status, setstatus] = useState([]);
  const [assignTag, setAssignTag] = useState([]);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onClickDelete = (order) => {
    setDeleteModal(true);
  };
  const { APIKey } = useSelector((state) => ({
    APIKey: state.APIKey.apiKey,
  }));

  useEffect(() => {
    dispatch(getAPIKey());
  }, [dispatch]);

  const hadleApiClick = useCallback((arg) => {
    const application = arg;

    setApiKey({
      _id: application.id,
      company: application.company,
      Designation: application.Designation,
      date: application.date,
      contact: application.contact,
      type: application.type,
      status: application.status,
    });
  });
  const hadleApiClicks = () => {
    setApiKey("");
  };


  const tags = [
    { label: "ACTIVE", value: "Active" },
    { label: "DEACTIVE", value: "DeActive" },

  ];
  function handlestag(status) {
    console.log(status);
    setstatus(status);
    setAssignTag(status.value);
  }
  // Checked All
  const checkedAll = () => {
    const checkall = document.getElementById("checkBoxAll");
    const ele = document.querySelectorAll(".orderCheckBox");

    if (checkall.checked) {
      ele.forEach((ele) => {
        ele.checked = true;
      });
    } else {
      ele.forEach((ele) => {
        ele.checked = false;
      });
    }
  };
  const columns = useMemo(
    () => [
      {
        Header: (
          <Input
            type="checkbox"
            id="checkBoxAll"
            className="form-check-input"
            onClick={() => checkedAll()}
          />
        ),
        Cell: (cellProps) => {
          return (
            <Input
              type="checkbox"
              className="orderCheckBox form-check-input"
              value={cellProps.row.original._id}
            />
          );
        },
        id: "#",
      },
      {
        Header: "Model Category",
        accessor: "models_categery",
        filterable: true,
        Cell: (cellProps) => {
          return <Name {...cellProps} />;
        },
      },
      {
        Header: "No. of Models",
        accessor: "models",
        filterable: true,
        Cell: (cellProps) => {
          return <Link className="fw-medium link-primary">{cellProps.value}</Link>;
        },

      },

      {
        Header: " Status",
        accessor: "status",
        Cell: (cell) => {
          switch (cell.value) {
            case "Active":
              return <span className="badge text-uppercase badge-soft-success"> {cell.value} </span>;
            case "DeActive":
              return <span className="badge text-uppercase badge-soft-danger"> {cell.value} </span>;
            case "DeActive":
              return <span className="badge text-uppercase badge-soft-danger"> {cell.value} </span>;
            default:
              return <span className="badge text-uppercase badge-soft-danger"> {cell.value} </span>;
          }
        }
      },


      {
        Header: "Action",
        accessor: "action",
        disableFilters: true,
        Cell: (cellProps) => {
          return (
            // <UncontrolledDropdown className="dropdown">
            //     <DropdownToggle
            //         role="button"
            //         tag="button"
            //         className="btn btn-soft-secondary btn-sm dropdown"
            //         type="button"
            //         data-bs-toggle="dropdown"
            //         aria-expanded="false"
            //     >
            //         <i className="ri-more-fill align-middle"></i>
            //     </DropdownToggle>
            //     <DropdownMenu className="dropdown-menu dropdown-menu-end">
            //         <li>
            //             <DropdownItem
            //                 className="edit-item-btn"
            //                 to="#api-key-modal"
            //                 data-bs-toggle="modal"
            //             >
            //                 Rename
            //             </DropdownItem>
            //         </li>
            //         <li>
            //             <DropdownItem
            //                 className="regenerate-api-btn"
            //                 to="#api-key-modal"
            //                 data-bs-toggle="modal"
            //             >
            //                 Regenerate Key
            //             </DropdownItem>
            //         </li>
            //         <li>
            //             <DropdownItem className="disable-btn" to="">
            //                 Disable
            //             </DropdownItem>
            //         </li>
            //         <li>
            //             <DropdownItem
            //                 className="remove-item-btn"
            //                 onClick={() => {
            //                     onClickDelete();
            //                 }}
            //                 to="#deleteApiKeyModal"
            //             >
            //                 Delete
            //             </DropdownItem>
            //         </li>
            //     </DropdownMenu>
            // </UncontrolledDropdown>
            <UncontrolledDropdown >
              <DropdownToggle
                href="#"
                className="btn btn-soft-secondary btn-sm dropdown"
                tag="button"
              >
                <i className="ri-more-fill align-middle"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">


                <DropdownItem >
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>


                <DropdownItem divider />

                <DropdownItem
                  href="#"
                  onClick={() => { const invoiceData = cellProps.row.original; onClickDelete(invoiceData); }}
                >
                  <i className="ri-delete-bin-fill align-bottom me-2 text-muted"></i>{" "}
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          );
        },
      },
    ],
    [hadleApiClick]

  );



  return (
    <React.Fragment>
      <div className="page-content">
        <DeleteModal
          show={deleteModal}
          onCloseClick={() => setDeleteModal(false)}
        />
        <DeleteModal
          show={deleteModalMulti}
          onDeleteClick={() => {
            setDeleteModalMulti(false);
          }}
          onCloseClick={() => setDeleteModalMulti(false)}
        />
        <Container fluid>
          <BreadCrumb title="Model Category" pageTitle="AI/ML Models" />

          {/* <Row>
            <Widgets />
          </Row> */}

          <Row>
            <Col lg={12}>
              <Card id="apiKeyList">
                <CardHeader className="d-flex align-items-center">
                  {/* <h5 className="card-title flex-grow-1 mb-0">API Keys</h5> */}
                  <div className="d-flex gap-1 flex-wrap">
                    <Button
                      type="button"
                      color="primary"
                      className="btn create-btn"
                      data-bs-toggle="modal"
                      onClick={handleShow}
                      data-bs-target="#api-key-modal"
                    >
                      <i className="ri-add-line align-bottom me-1"></i> Add New Model Category
                    </Button>
                  </div>
                </CardHeader>
                <CardBody>

                  <div>
                    <TableContainer
                      columns={columns}
                      data={modelscatlog || []}
                      hadleApiKey={hadleApiClicks}
                      customPageSize={8}
                      divClass="table-responsive table-card mb-1"
                      tableClass="align-middle table-nowrap"
                      theadClass="table-light text-muted"
                    />
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      <div
        className="modal fade"
        id="api-key-modal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <Modal isOpen={show} toggle={handleClose} className="modal-content">
            <ModalHeader toggle={handleClose} className="p-3 bg-soft-info">
              Create Models Category
            </ModalHeader>
            {/* <ModalHeader className="modal-header">Create Models Category</ModalHeader> */}
            <ModalBody className="modal-body">
              <form autoComplete="off">
                <div
                  id="api-key-error-msg"
                  className="alert alert-danger py-2 d-none"
                ></div>
                <Input type="hidden" id="apikeyId" />
                <div className="mb-3">
                  <Label htmlFor="api-key-name" className="form-label">
                    Enter Model Category <span className="text-danger">*</span>
                  </Label>
                  <Input
                    type="text"
                    className="form-control"
                    id="api-key-name"
                    placeholder="Enter Model Category Name"
                  />
                  <small className="text-muted">
                    Select a category from Govt. & Supply Chain, Media and Entertainment, Sales & CRM etc.
                  </small>
                </div>
                <Col lg={12}>
                  <div>
                    <Label
                      htmlFor="taginput-choices"
                      className="form-label font-size-13 text-muted"
                    >
                      Status
                    </Label>
                    <Select

                      value={status}
                      onChange={(e) => {
                        handlestag(e);
                      }}
                      className="mb-0"
                      options={tags}
                      id="taginput-choices"
                    >
                    </Select>
                    <small className="text-muted">
                      Select the model's status - Active or Deactive.
                    </small>
                  </div>
                </Col>
              </form>
            </ModalBody>
            <div className="modal-footer">
              <div className="hstack gap-2 justify-content-end">
                <button onClick={handleClose} type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>

                <button type="submit" className="btn btn-success" id="add-btn">Add Models Category</button>


              </div>
            </div>
          </Modal>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ModelsCatlog;