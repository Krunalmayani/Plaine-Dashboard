import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  CardBody,
  Row,
  Col,
  Card,
  Container,
  CardHeader,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import { Link } from "react-router-dom";

import * as moment from "moment";
import TableContainer from "../../Components/Common/TableContainer";
import DeleteModal from "../../Components/Common/DeleteModal";

//Import Icons

import Loader from "../../Components/Common/Loader";

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { invoiceTable, } from "../../common/data/invoiceList";
//Import actions
import {
  getInvoices as onGetInvoices,
  deleteInvoice as onDeleteInvoice,
} from "../../slices/thunks";

//redux
import { useSelector, useDispatch } from "react-redux";
function HistoryList(props) {
  document.title = "Invoice List | Plaine - Unleashing Innovation with Artificial Intelligence";

  const dispatch = useDispatch();

  const { invoices, isInvoiceSuccess, error } = useSelector((state) => ({
    invoices: state.Invoice.invoices,
    isInvoiceSuccess: state.Invoice.isInvoiceSuccess,
    error: state.Invoice.error,
  }));

  //delete invoice
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteModalMulti, setDeleteModalMulti] = useState(false);

  const [invoice, setInvoice] = useState(null);

  useEffect(() => {
    if (invoices && !invoices.length) {
      dispatch(onGetInvoices());
    }
  }, [dispatch, invoices]);

  useEffect(() => {
    setInvoice(invoices);
  }, [invoices]);

  // Delete Data
  const onClickDelete = (invoice) => {
    setInvoice(invoice);
    setDeleteModal(true);
  };

  const handleDeleteInvoice = () => {
    if (invoice) {
      dispatch(onDeleteInvoice(invoice._id));
      setDeleteModal(false);
    }
  };

  const handleValidDate = date => {
    const date1 = moment(new Date(date)).format("DD MMM Y");
    return date1;
  };

  const handleValidTime = (time) => {
    const time1 = new Date(time);
    const getHour = time1.getUTCHours();
    const getMin = time1.getUTCMinutes();
    const getTime = `${getHour}:${getMin}`;
    var meridiem = "";
    if (getHour >= 12) {
      meridiem = "PM";
    } else {
      meridiem = "AM";
    }
    const updateTime = moment(getTime, 'hh:mm').format('hh:mm') + " " + meridiem;
    return updateTime;
  };

  // Checked All
  const checkedAll = useCallback(() => {
    const checkall = document.getElementById("checkBoxAll");
    const ele = document.querySelectorAll(".invoiceCheckBox");

    if (checkall.checked) {
      ele.forEach((ele) => {
        ele.checked = true;
      });
    } else {
      ele.forEach((ele) => {
        ele.checked = false;
      });
    }
    deleteCheckbox();
  }, []);

  // Delete Multiple
  const [selectedCheckBoxDelete, setSelectedCheckBoxDelete] = useState([]);
  const [isMultiDeleteButton, setIsMultiDeleteButton] = useState(false);

  const deleteMultiple = () => {
    const checkall = document.getElementById("checkBoxAll");
    selectedCheckBoxDelete.forEach((element) => {
      dispatch(onDeleteInvoice(element.value));
      setTimeout(() => { toast.clearWaitingQueue(); }, 3000);
    });
    setIsMultiDeleteButton(false);
    checkall.checked = false;
  };

  const deleteCheckbox = () => {
    const ele = document.querySelectorAll(".invoiceCheckBox:checked");
    ele.length > 0 ? setIsMultiDeleteButton(true) : setIsMultiDeleteButton(false);
    setSelectedCheckBoxDelete(ele);
  };

  // Customber Column
  const columns = useMemo(
    () => [
      {
        Header: <input type="checkbox" id="checkBoxAll" className="form-check-input" onClick={() => checkedAll()} />,
        Cell: (cellProps) => {
          return <input type="checkbox" className="invoiceCheckBox form-check-input" value={cellProps.row.original._id} onChange={() => deleteCheckbox()} />;
        },
        id: '#',
      },
      {
        Header: "EMI ID",
        accessor: "invoiceId",
        filterable: true,
        Cell: (cell) => {
          return <Link to="/payment-details" className="fw-medium link-primary">{cell.value}</Link>;
        },
      },
      {
        Header: "Customer",
        Cell: (invoice) => (
          <>
            <div className="d-flex align-items-center">

              {invoice.row.original.name}
            </div>
          </>
        ),
      },
      {
        Header: "EMAIL",
        accessor: "email",
        filterable: true,
      },
      {
        Header: "COUNTRY",
        accessor: "country",
        filterable: true,
      },
      {
        Header: "DATE",
        Cell: (invoice) => (
          <>
            {handleValidDate(invoice.row.original.date)},{" "}
            <small className="text-muted">{handleValidTime(invoice.row.original.date)}</small>
          </>
        ),
      },
      {
        Header: "AMOUNT",
        accessor: "amount",
        filterable: true,
      },
      {
        Header: "PAYMENT STATUS",
        accessor: "status",
        Cell: (cell) => {
          switch (cell.value) {
            case "Paid":
              return <span className="badge text-uppercase badge-soft-success"> {cell.value} </span>;
            case "Unpaid":
              return <span className="badge text-uppercase badge-soft-success"> {cell.value} </span>;
            case "Cancel":
              return <span className="badge text-uppercase badge-soft-danger"> {cell.value} </span>;
            default:
              return <span className="badge text-uppercase badge-soft-info"> {cell.value} </span>;
          }
        }
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <UncontrolledDropdown >
              <DropdownToggle
                href="#"
                className="btn btn-soft-secondary btn-sm dropdown"
                tag="button"
              >
                <i className="ri-more-fill align-middle"></i>
              </DropdownToggle>
              <DropdownMenu className="dropdown-menu-end">
                <DropdownItem href="/apps-invoices-details">
                  <i className="ri-eye-fill align-bottom me-2 text-muted"></i>{" "}
                  View
                </DropdownItem>

                <DropdownItem href="/apps-invoices-create">
                  <i className="ri-pencil-fill align-bottom me-2 text-muted"></i>{" "}
                  Edit
                </DropdownItem>

                <DropdownItem href="/#">
                  <i className="ri-download-2-line align-bottom me-2 text-muted"></i>{" "}
                  Download
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
    [checkedAll]
  );
  return (
    <React.Fragment>

      <DeleteModal
        show={deleteModal}
        onDeleteClick={() => handleDeleteInvoice()}
        onCloseClick={() => setDeleteModal(false)}
      />
      <DeleteModal
        show={deleteModalMulti}
        onDeleteClick={() => {
          deleteMultiple();
          setDeleteModalMulti(false);
        }}
        onCloseClick={() => setDeleteModalMulti(false)}
      />
      <Container fluid>

        <Row>
          <Col lg={12}>
            <Card id="invoiceList">
              <CardHeader className="border-0">
                <div className="d-flex align-items-center">
                  <h5 className="card-title mb-0 flex-grow-1 fs-17">Invoices</h5>
                  <div className="flex-shrink-0">
                    {/* <div className="d-flex gap-2 flex-wrap">
                          {isMultiDeleteButton && <button className="btn btn-primary"
                            onClick={() => setDeleteModalMulti(true)}
                          ><i className="ri-delete-bin-2-line"></i></button>}
                          <Link
                            to="/apps-invoices-create"
                            className="btn btn-danger"
                          >
                            <i className="ri-add-line align-bottom me-1"></i> Create
                            Invoice
                          </Link>
  
                        </div> */}
                  </div>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <div>
                  {isInvoiceSuccess && invoices.length ? (
                    <TableContainer
                      columns={columns}
                      data={(invoiceTable || [])} 
                      isGlobalFilter={true}
                      isAddUserList={false}
                      customPageSize={10}
                      className="custom-header-css"
                      theadClass="text-muted text-uppercase fs-13"
                      isInvoiceListFilter={true}
                      SearchPlaceholder='Search for customer, email, country, status or something...'
                    />
                  ) : (<Loader error={error} />)
                  }
                </div>
                <ToastContainer closeButton={false} limit={1} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

    </React.Fragment>
  );
}

export default HistoryList;