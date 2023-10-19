import React, { useState } from "react";

//Import Breadcrumb
import BreadCrumb from "../../Components/Common/BreadCrumb";

import {
  Container,
  Form,
  Row,
  Col,
  Card,
  CardBody,
  CardHeader,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  Modal,
  ModalFooter,
  ModalHeader,
  ModalBody,
  Label,
  Input,
} from "reactstrap";

import Select from "react-select";
import classnames from "classnames";
import { orderSummary } from "../../common/data/ecommerce";
import { Link } from "react-router-dom";

const EcommerceCheckout = () => {
  document.title = "Checkout | Velzon - React Admin & Dashboard Template";

  const [selectedCountry, setselectedCountry] = useState(null);
  const [selectedRegion, setselectedRegion] = useState(null);
  const [selectedState, setselectedState] = useState(null);
  const [activeTab, setactiveTab] = useState(1);
  const [passedSteps, setPassedSteps] = useState([1]);
  const [modal, setModal] = useState(false);
  const [deletemodal, setDeleteModal] = useState(false);

  const toggledeletemodal = () => {
    setDeleteModal(!deletemodal);
  };

  const togglemodal = () => {
    setModal(!modal);
  };

  function handleSelectCountry(selectedCountry) {
    setselectedCountry(selectedCountry);
  }
  function handleSelectRegion(selectedRegion) {
    setselectedRegion(selectedRegion);
  }

  function handleSelectState(selectedState) {
    setselectedState(selectedState);
  }

  function toggleTab(tab) {
    if (activeTab !== tab) {
      var modifiedSteps = [...passedSteps, tab];

      if (tab >= 1 && tab <= 4) {
        setactiveTab(tab);
        setPassedSteps(modifiedSteps);
      }
    }
  }

  const productState = [
    {
      options: [
        { label: "Azure", value: "Azure" },
        { label: "AWS", value: "AWS" },
      ],
    },
  ];

  const productCountry = [
    {
      options: [
        { label: "Cloud", value: "Cloud" },

      ],
    },
  ];
  const productRegion = [
    {
      options: [
        { label: "London", value: "London" },
        { label: "Mumbai", value: "Mumbai" },
        { label: "Singapore", value: "Singapore" },
        { label: "Los Angeles ", value: "Los Angeles" },

      ],
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="checkout" pageTitle="Configuration" />

          <Row>
            <Col xl="8">
              <Card>
                <CardBody className="checkout-tab">
                  <Form action="#">
                    <div className="step-arrow-nav mt-n3 mx-n3 mb-3">
                      <Nav
                        className="nav-pills nav-justified custom-nav"
                        role="tablist"
                      >
                        <NavItem role="presentation">
                          <NavLink href="#"
                            className={classnames({ active: activeTab === 1, done: (activeTab <= 4 && activeTab >= 0) }, "p-3 fs-15")}
                            onClick={() => { toggleTab(1); }}
                          >
                            <i className=" fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2 fa-solid fa-gears"></i>
                            Configuration
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink href="#"
                            className={classnames({ active: activeTab === 2, done: activeTab <= 4 && activeTab > 1 }, "p-3 fs-15")}
                            onClick={() => { toggleTab(2); }}
                          >
                            <i className="fa-microchip fa-solid fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Resource
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink href="#"
                            className={classnames({ active: activeTab === 3, done: activeTab <= 4 && activeTab > 2 }, "p-3 fs-15")}
                            onClick={() => { toggleTab(3); }}
                          >
                            <i className="ri-bank-card-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Payment Info
                          </NavLink>
                        </NavItem>
                        <NavItem role="presentation">
                          <NavLink href="#"
                            className={classnames({ active: activeTab === 4, done: activeTab <= 4 && activeTab > 3 }, "p-3 fs-15")}
                            onClick={() => { toggleTab(4); }}
                          >
                            <i className="ri-checkbox-circle-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                            Finish
                          </NavLink>
                        </NavItem>
                      </Nav>
                    </div>

                    <TabContent activeTab={activeTab}>
                      <TabPane tabId={1} id="pills-bill-info">

                        <div className="mb-3">
                          <h4 className="mb-1">Project Name</h4>
                          <p className="text-muted mb-10">
                            User-friendly project name such as my personal notebook
                          </p>
                          <Input
                            type="text"
                            className="form-control"
                            id="cc-name"
                            placeholder="Enter name"
                            style={{ width: "50%", marginBottom: "15px" }}
                          />
                          <Row>
                            <Label htmlFor="country" className="form-label">
                              <h6 className="mb-1">Region</h6>
                              <p className="text-muted mb-2">
                                The region or data center location where the model will be deployed.
                              </p>
                            </Label>
                            <Col md={6}>
                              <div className="mb-3">
                                <Select
                                  value={selectedRegion}
                                  onChange={() => {
                                    handleSelectRegion();
                                  }}
                                  options={productRegion}
                                  id="Region"
                                ></Select>
                              </div>
                            </Col>
                          </Row>

                          <Row>
                            <Label htmlFor="country" className="form-label">
                              <h6 className="mb-1">Deployment Environment</h6>
                              <p className="text-muted mb-2">
                                A dropdown or selection box to choose the deployment environment                                   </p>
                            </Label>
                            <Col md={6}>
                              <div className="mb-3">

                                <Select
                                  value={selectedState}
                                  onChange={() => {
                                    handleSelectCountry();
                                  }}
                                  options={productCountry}
                                  id="country"
                                ></Select>
                              </div>
                            </Col>
                          </Row>
                          <Label htmlFor="country" className="form-label">
                            <h6 className="mb-1">Cloud Provider</h6>
                            <p className="text-muted mb-2">
                              If deploying in the cloud, a dropdown to select the preferred cloud provider
                            </p>
                          </Label>
                          <Col md={6}>
                            <div className="mb-3">

                              <Select
                                value={selectedCountry}
                                onChange={() => {
                                  handleSelectCountry();
                                }}
                                options={productState}
                                id="country"
                              ></Select>
                            </div>
                          </Col>


                          <div className="d-flex align-items-start gap-3 mt-3">
                            <button
                              type="button"
                              className="btn btn-primary btn-label right ms-auto nexttab"
                              onClick={() => {
                                toggleTab(activeTab + 1);
                              }}
                            >
                              <i className="fa-microchip fa-solid label-icon align-middle fs-16 ms-2"></i>
                              Proceed to Resource Allocation
                            </button>
                          </div>
                        </div>
                      </TabPane>

                      <TabPane tabId={2}>


                        <div className="mt-4">
                          <div className="d-flex align-items-center mb-2">
                            <div className="flex-grow-1">
                              <h5 className="fs-15 mb-0">Resource Allocation</h5>
                            </div>

                          </div>
                          <Row className="gy-3">
                            <Col lg={4} sm={6}>
                              <div className="form-check card-radio">
                                <Input
                                  id="shippingAddress01"
                                  name="shippingAddress"
                                  type="radio"
                                  className="form-check-input"
                                  defaultChecked
                                />
                                <Label
                                  className="form-check-label text-center"
                                  htmlFor="shippingAddress01"
                                >
                                  <div className='mb-3'>
                                    <h2 className="month mb-0">$48 <small className="fs-13 text-muted">/Month</small></h2>
                                    <h5 className="month mb-0">$0.063 <small className="fs-13 text-muted">/hour</small></h5>
                                  </div>

                                  <div>
                                    <h6 className="month mb-0">4 GB <small className="fs-13 text-muted">/2  CPUs</small></h6>
                                    <h6 className="month mb-0">25 GB <small className="fs-13 text-muted">SSD Disk</small></h6>
                                    <h6 className="month mb-0">4 TB <small className="fs-13 text-muted">transfer</small></h6>

                                  </div>
                                </Label>
                              </div>

                            </Col>
                            <Col lg={4} sm={6}>
                              <div className="form-check card-radio">
                                <Input
                                  id="shippingAddress02"
                                  name="shippingAddress"
                                  type="radio"
                                  className="form-check-input"
                                />
                                <Label
                                  className="form-check-label text-center"
                                  htmlFor="shippingAddress02"
                                >
                                  <div className='mb-3'>
                                    <h2 className="month mb-0">$84 <small className="fs-13 text-muted">/Month</small></h2>
                                    <h5 className="month mb-0">$0.125 <small className="fs-13 text-muted">/hour</small></h5>
                                  </div>

                                  <div>
                                    <h6 className="month mb-0">8 GB <small className="fs-13 text-muted">/4  CPUs</small></h6>
                                    <h6 className="month mb-0">50 GB <small className="fs-13 text-muted">SSD Disk</small></h6>
                                    <h6 className="month mb-0">5 TB <small className="fs-13 text-muted">transfer</small></h6>

                                  </div>
                                </Label>
                              </div>

                            </Col>
                            <Col lg={4} sm={6}>
                              <div className="form-check card-radio">
                                <Input
                                  id="shippingAddress03"
                                  name="shippingAddress"
                                  type="radio"
                                  className="form-check-input"
                                />
                                <Label
                                  className="form-check-label text-center"
                                  htmlFor="shippingAddress03"
                                >
                                  <div className='mb-3'>
                                    <h2 className="month mb-0">$168 <small className="fs-13 text-muted">/Month</small></h2>
                                    <h5 className="month mb-0">$0.250 <small className="fs-13 text-muted">/hour</small></h5>
                                  </div>

                                  <div>
                                    <h6 className="month mb-0">16 GB <small className="fs-13 text-muted">/8 CPUs</small></h6>
                                    <h6 className="month mb-0">100 GB <small className="fs-13 text-muted">SSD Disk</small></h6>
                                    <h6 className="month mb-0">6 TB <small className="fs-13 text-muted">transfer</small></h6>

                                  </div>
                                </Label>
                              </div>

                            </Col>
                          </Row>


                        </div>

                        <div className="d-flex align-items-start gap-3 mt-4">
                          <button
                            type="button"
                            className="btn btn-light btn-label previestab"
                            onClick={() => {
                              toggleTab(activeTab - 1);
                            }}
                          >
                            <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                            Back to Configuration
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-label right ms-auto nexttab"
                            onClick={() => {
                              toggleTab(activeTab + 1);
                            }}
                          >
                            <i className="ri-bank-card-line label-icon align-middle fs-16 ms-2"></i>
                            Continue to Payment
                          </button>
                        </div>
                      </TabPane>

                      <TabPane tabId={3}>
                        <div>
                          <h5 className="mb-1">Payment Selection</h5>
                          <p className="text-muted mb-4">
                            Please select and enter your billing information
                          </p>
                        </div>

                        <Row className="g-4 ">

                          <Col lg={12} sm={12}>
                            <div className=" d-flex justify-content-around">
                              <div className="form-check card-radio">
                                <Input
                                  id="paymentMethod02"
                                  name="paymentMethod"
                                  type="radio"
                                  className="form-check-input"
                                  defaultChecked
                                />
                                <Label
                                  className="form-check-label"
                                  htmlFor="paymentMethod02"
                                >
                                  <span className="fs-16 text-muted me-2">
                                    <i className="ri-bank-card-fill align-bottom"></i>
                                  </span>
                                  <span className="fs-14 text-wrap">
                                    Credit / Debit Card
                                  </span>
                                </Label>
                              </div>
                            </div>
                          </Col>


                        </Row>

                        <div
                          className="collapse show"
                          id="paymentmethodCollapse"
                        >
                          <Card className="p-4 border shadow-none mb-0 mt-4">
                            <Row className="gy-3">
                              <Col md={12}>
                                <Label htmlFor="cc-name" className="form-label">
                                  Name on card
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="cc-name"
                                  placeholder="Enter name"
                                />
                                <small className="text-muted">
                                  Full name as displayed on card
                                </small>
                              </Col>

                              <Col md={6}>
                                <Label
                                  htmlFor="cc-number"
                                  className="form-label"
                                >
                                  Credit card number
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="cc-number"
                                  placeholder="xxxx xxxx xxxx xxxx"
                                />
                              </Col>

                              <Col md={3}>
                                <Label
                                  htmlFor="cc-expiration"
                                  className="form-label"
                                >
                                  Expiration
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="cc-expiration"
                                  placeholder="MM/YY"
                                />
                              </Col>

                              <Col md={3}>
                                <Label htmlFor="cc-cvv" className="form-label">
                                  CVV
                                </Label>
                                <Input
                                  type="text"
                                  className="form-control"
                                  id="cc-cvv"
                                  placeholder="xxx"
                                />
                              </Col>
                            </Row>
                          </Card>
                          <div className="text-muted mt-2 fst-italic">
                            <i
                              data-feather="lock"
                              className="text-muted icon-xs"
                            ></i>{" "}
                            Your transaction is secured with SSL encryption
                          </div>
                        </div>

                        <div className="d-flex align-items-start gap-3 mt-4">
                          <button
                            type="button"
                            className="btn btn-light btn-label previestab"
                            onClick={() => {
                              toggleTab(activeTab - 1);
                            }}
                          >
                            <i className="ri-arrow-left-line label-icon align-middle fs-16 me-2"></i>
                            Back to Resource Allocation
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-label right ms-auto nexttab"
                            onClick={() => {
                              toggleTab(activeTab + 1);
                            }}
                          >
                            <i className="ri-shopping-basket-line label-icon align-middle fs-16 ms-2"></i>
                            Complete Order
                          </button>
                        </div>
                      </TabPane>

                      <TabPane tabId={4} id="pills-finish">
                        <div className="text-center py-5">
                          <div className="mb-4">
                            <lord-icon
                              src="https://cdn.lordicon.com/lupuorrc.json"
                              trigger="loop"
                              colors="primary:#0ab39c,secondary:#405189"
                              style={{ width: "120px", height: "120px" }}
                            ></lord-icon>
                          </div>
                          <h5>Thank you ! Your Order Deployment Complete</h5>
                          <p className="text-muted">
                            You will receive an order confirmation email with
                            details of your order.
                          </p>



                          <Card className="d-flex align-items-center mb-2">
                            <CardHeader>
                              <h5 className="card-title mb-0">
                                <i className="ri-secure-payment-line align-bottom me-1 text-muted"></i>{" "}
                                Payment Details
                              </h5>
                            </CardHeader>
                            <CardBody>
                              <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                  <p className="text-muted mb-0">Transactions:</p>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0">#VLZ124561278124</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                  <p className="text-muted mb-0">Payment Method:</p>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0">Debit Card</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                  <p className="text-muted mb-0">Card Holder Name:</p>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0">Joseph Parker</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center mb-2">
                                <div className="flex-shrink-0">
                                  <p className="text-muted mb-0">Card Number:</p>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0">xxxx xxxx xxxx 2456</h6>
                                </div>
                              </div>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0">
                                  <p className="text-muted mb-0">Total Amount:</p>
                                </div>
                                <div className="flex-grow-1 ms-2">
                                  <h6 className="mb-0">$415.96</h6>
                                </div>
                              </div>
                            </CardBody>
                          </Card>
                        </div>
                      </TabPane>
                    </TabContent>
                  </Form>
                </CardBody>
              </Card>
            </Col>

            <Col xl={4}>
              <Card>
                <CardHeader>
                  <div className="d-flex">
                    <div className="flex-grow-1">
                      <h5 className="card-title mb-0">Order Summary</h5>
                    </div>
                  </div>
                </CardHeader>
                <CardBody>
                  <div className="table-responsive table-card">
                    <table className="table table-borderless align-middle mb-0">
                      <thead className="table-light text-muted">
                        <tr>
                          <th style={{ width: "90px" }} scope="col">
                            Product
                          </th>
                          <th scope="col">Product Info</th>
                          <th scope="col" className="text-end">
                            Price
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {orderSummary.map((product, key) => (
                          <React.Fragment key={key}>
                            <tr>
                              <td>
                                <div className="avatar-md bg-light rounded p-1">
                                  <img
                                    src={product.img}
                                    alt=""
                                    className="img-fluid d-block"
                                  />
                                </div>
                              </td>
                              <td>
                                <h5 className="fs-15">
                                  <a
                                    href="/apps-ecommerce-product-details"
                                    className="text-dark"
                                  >
                                    {product.name}
                                  </a>
                                </h5>
                                <p className="text-muted mb-0">
                                  {product.subName}
                                </p>
                              </td>
                              <td className="text-end">$ {product.total}</td>
                            </tr>
                          </React.Fragment>
                        ))}

                        <tr>
                          <td className="fw-semibold" colSpan="2">
                            Sub Total :
                          </td>
                          <td className="fw-semibold text-end">$ 359.96</td>
                        </tr>

                        <tr className="table-active">
                          <th colSpan="2">Total (USD) :</th>
                          <td className="text-end">
                            <span className="fw-semibold">$353.15</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </CardBody>
              </Card>
              <Card>
                <CardHeader>
                  <div className="d-flex">
                    <h5 className="card-title flex-grow-1 mb-0">
                      Customer Support
                    </h5>
                  </div>
                </CardHeader>
                <CardBody>
                  <ul className="list-unstyled mb-0 vstack gap-3">
                    <li>
                      <div className="d-flex align-items-center">
                        <div className="flex-shrink-0">
                          <img
                            src='https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                            alt=""
                            className="avatar-sm rounded"
                          />
                        </div>
                        <div className="flex-grow-1 ms-3">
                          <h6 className="fs-15 mb-1">Joseph Parkers</h6>
                        </div>
                      </div>
                    </li>
                    <li>
                      <i className="ri-mail-line me-2 align-middle text-muted fs-16"></i>
                      josephparker@gmail.com
                    </li>
                    <li>
                      <i className="ri-phone-line me-2 align-middle text-muted fs-16"></i>
                      (+1) 937 553 3282
                    </li>
                  </ul>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      {/* modal Delete Address */}
      <Modal
        isOpen={deletemodal}
        role="dialog"
        autoFocus={true}
        centered
        id="removeItemModal"
        toggle={toggledeletemodal}
      >
        <ModalHeader toggle={() => {
          setDeleteModal(!deletemodal);
        }}>
        </ModalHeader>
        <ModalBody>
          <div className="mt-2 text-center">
            <lord-icon
              src="https://cdn.lordicon.com/gsqxdxog.json"
              trigger="loop"
              colors="primary:#f7b84b,secondary:#f06548"
              style={{ width: "100px", height: "100px" }}
            ></lord-icon>
            <div className="mt-4 pt-2 fs-15 mx-4 mx-sm-5">
              <h4>Are you Sure ?</h4>
              <p className="text-muted mx-4 mb-0">
                Are you Sure You want to Remove this Address ?
              </p>
            </div>
          </div>
          <div className="d-flex gap-2 justify-content-center mt-4 mb-2">
            <button
              type="button"
              className="btn w-sm btn-light"
              onClick={() => {
                setDeleteModal(!deletemodal);
              }}
            >
              Close
            </button>
            <button type="button" className="btn w-sm btn-danger" onClick={() => {
              setDeleteModal(!deletemodal);
            }}>
              Yes, Delete It!
            </button>
          </div>
        </ModalBody>
      </Modal>

      {/* modal Add Address */}
      <Modal
        isOpen={modal}
        role="dialog"
        autoFocus={true}
        centered
        id="addAddressModal"
        toggle={togglemodal}
      >
        <ModalHeader
          toggle={() => {
            setModal(!modal);
          }}
        >
          <h5 className="modal-title" id="addAddressModalLabel">
            Address
          </h5>
        </ModalHeader>
        <ModalBody>
          <div>
            <div className="mb-3">
              <Label for="addaddress-Name" className="form-label">
                Name
              </Label>
              <Input
                type="text"
                className="form-control"
                id="addaddress-Name"
                placeholder="Enter Name"
              />
            </div>

            <div className="mb-3">
              <Label for="addaddress-textarea" className="form-label">
                Address
              </Label>
              <textarea
                className="form-control"
                id="addaddress-textarea"
                placeholder="Enter Address"
                rows="2"
              ></textarea>
            </div>

            <div className="mb-3">
              <Label for="addaddress-Name" className="form-label">
                Phone
              </Label>
              <Input
                type="text"
                className="form-control"
                id="addaddress-Name"
                placeholder="Enter Phone No."
              />
            </div>

            <div className="mb-3">
              <Label for="state" className="form-label">
                Address Type
              </Label>
              <select className="form-select" id="state" data-plugin="choices">
                <option value="homeAddress">Home (7am to 10pm)</option>
                <option value="officeAddress">Office (11am to 7pm)</option>
              </select>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            type="button"
            className="btn btn-light"
            onClick={() => {
              setModal(!modal);
            }}
          >
            Close
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              setModal(!modal);
            }}
          >
            Save
          </button>
        </ModalFooter>
      </Modal>
    </React.Fragment>
  );
};

export default EcommerceCheckout;
