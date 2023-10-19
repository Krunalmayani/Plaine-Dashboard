import React, { useEffect, useState, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import { FilePond, registerPlugin } from 'react-filepond';


// Import Images
import dummyImg from "../../../../assets/images/users/model-img.png";

import {
    Col,
    Container,
    Row,
    Card,
    CardBody,
    Label,
    Input,

    ModalFooter,
    FormFeedback,
    Form,
    CardHeader,
    Nav,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    Button,



} from "reactstrap";
import Select from "react-select";
import BreadCrumb from "../../../../Components/Common/BreadCrumb";
import 'react-toastify/dist/ReactToastify.css';
import 'filepond/dist/filepond.min.css';
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css';
import modelImg from '../../../../assets/images/users/Admin-model-2.webp';

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);


import classnames from "classnames";

// Formik
import * as Yup from "yup";
import { useFormik } from "formik";
import { useQuill } from "react-quilljs";
import "quill/dist/quill.snow.css";
import MyEditor from "../../../../Components/Common/MyEditor";

const AImodelFrom = () => {
    const { quillRef } = useQuill();
    const [selectedFiles, setselectedFiles] = useState([]);
    const [files, setFiles] = useState([]);

    function handleAcceptedFiles(files) {
        files.map(file =>
            Object.assign(file, {
                preview: URL.createObjectURL(file),
                formattedSize: formatBytes(file.size),
            })
        );
        setselectedFiles(files);
    }

    const [isEdit, setIsEdit] = useState(false);
    const [contact, setContact] = useState([]);
    const [modal, setModal] = useState(false);

    const toggle = useCallback(() => {
        if (modal) {
            setModal(false);
            setContact(null);
        } else {
            setModal(true);
            setTag([]);
            setAssignTag([]);
            setProjectType([]);
        }
    }, [modal]);

    // validation
    const validation = useFormik({

        enableReinitialize: true,

        initialValues: {

            name: (contact && contact.name) || '',
            cost: (contact && contact.cost) || '',
            designation: (contact && contact.designation) || '',
            date: (contact && contact.date) || '',
            email: (contact && contact.email) || '',
            phone: (contact && contact.phone) || '',
            tags: (contact && contact.tags) || [],
        },
        validationSchema: Yup.object({
            name: Yup.string().required("Please Enter Name"),
            designation: Yup.string().required("Please Enter Screenshots "),
            date: Yup.string().required("Please Enter Register Date"),
            email: Yup.string().required("Please Enter Email"),
            phone: Yup.string().required("Please Enter Phone"),
            cost: Yup.number().required('Please Enter Cost')
        }),
        onSubmit: (values) => {
            if (isEdit) {
                const updateContact = {
                    _id: contact ? contact._id : 0,
                    name: values.name,
                    cost: values.cost,
                    designation: values.designation,
                    email: values.email,
                    phone: values.phone,
                    date: values.date,
                    tags: assignTag,
                    Types: ProjectType,
                    Subscription_PlanS: Subscription_Plan,
                    Categorys: ProjectCategory,
                };
                // update Contact
                dispatch(onUpdateContact(updateContact));
                validation.resetForm();
            } else {
                const newContact = {
                    _id: (Math.floor(Math.random() * (30 - 20)) + 20).toString(),
                    name: values["name"],
                    cost: values["cost"],
                    designation: values["designation"],
                    email: values["email"],
                    phone: values["phone"],
                    date: values['date'],
                    tags: assignTag,
                    Types: ProjectType,
                    Subscription_PlanS: Subscription_Plan,
                    Categorys: ProjectCategory,
                };

                // save new Contact
                dispatch(onAddNewContact(newContact));
                validation.resetForm();
            }
            toggle();
        },
    });
    // Update Data
    const handleContactClick = useCallback((arg) => {
        const contact = arg;
        setContact({
            _id: contact._id,
            name: contact.name,
            cost: contact.cost,
            email: contact.email,
            designation: contact.designation,
            date: contact.date,
            phone: contact.phone,
            tags: contact.tags,
            typs: contact.Types,
            Subscription: contact.Subscription_PlanS,
            Category: contact.Categorys
        });

        setIsEdit(true);
        toggle();
    }, [toggle]);

    const [tag, setTag] = useState([]);
    const [Type, setType] = useState([]);
    const [Subscription, setSubscription] = useState([]);
    const [Subscription_Plan, setSubscription_plan] = useState([]);
    const [Category, setCategory] = useState([]);
    const [ProjectCategory, setprojectCategory] = useState([]);
    const [assignTag, setAssignTag] = useState([]);
    const [ProjectType, setProjectType] = useState([]);

    function handlestag(tags) {
        console.log(tags);
        setTag(tags);
        setAssignTag(tags.value);
    }

    const handleTypes = (type) => {
        setType(type)
        setProjectType(type.value)
    }
    const handleSubscription = (plan) => {
        setSubscription(plan)
        setSubscription_plan(plan.value)
    }
    const handleCategory = (Category) => {
        setCategory(Category)
        setprojectCategory(Category.value)
    }

    function toggleTab(tab) {
        if (activeTab !== tab) {
            var modifiedSteps = [...passedSteps, tab];

            if (tab >= 1 && tab <= 5) {
                setactiveTab(tab);
                setPassedSteps(modifiedSteps);
            }
        }
    }
    const [activeTab, setactiveTab] = useState(1);
    const [passedSteps, setPassedSteps] = useState([1]);

    const [deletemodal, setDeleteModal] = useState(false);
    const [selectedCountry, setselectedCountry] = useState(null);
    const [selectedRegion, setselectedRegion] = useState(null);
    const [selectedState, setselectedState] = useState(null);

    function handleSelectCountry(selectedCountry) {
        setselectedCountry(selectedCountry);
    }
    function handleSelectRegion(selectedRegion) {
        setselectedRegion(selectedRegion);
    }

    function handleSelectState(selectedState) {
        setselectedState(selectedState);
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

    const tags = [
        { label: "ACTIVE", value: "Active" },
        { label: "DEACTIVE", value: "DeActive" },

    ];
    const Types = [
        { label: "AI/ML Notebook", value: "AI/ML Notebook" },
        { label: "UI", value: "UI" },
        { label: "ETL", value: "ETL" },
        { label: "BI", value: "BI" },
        { label: "API", value: "API" },
    ];
    const Subscription_PlanS = [
        { label: "General", value: "General" },
        { label: "Premium", value: "Premium" },
        { label: "Bespoke", value: "Bespoke" },

    ];
    const Categorys = [
        { label: "Sales & CRM", value: "Sales & CRM" },
        { label: "Media and Entertainment	", value: "Media and Entertainment	" },
        { label: "Govt. & Supply Chain	", value: "Govt. & Supply Chain	" },


    ];

    document.title = "Plaine | Admin/AddNewModel";
    return (
        <>




            <React.Fragment>
                <div className="page-content">
                    <Container fluid>
                        <BreadCrumb title="Add New Model" pageTitle="AI/ML Models" />
                        <Row>


                            <Col xxl={12}>
                                <Card>
                                    <CardBody className="checkout-tab "  >
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
                                                            <i className="fa-solid fa-robot fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2 "></i>
                                                            Model Name & Detail
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem role="presentation">
                                                        <NavLink href="#"
                                                            className={classnames({ active: activeTab === 2, done: activeTab <= 4 && activeTab > 1 }, "p-3 fs-15")}
                                                            onClick={() => { toggleTab(2); }}
                                                        >
                                                            <i className=" ri-file-list-3-line fa-solid fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                                                            Details
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem role="presentation">
                                                        <NavLink href="#"
                                                            className={classnames({ active: activeTab === 3, done: activeTab <= 4 && activeTab > 2 }, "p-3 fs-15")}
                                                            onClick={() => { toggleTab(3); }}
                                                        >
                                                            <i className="ri-bank-card-line fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                                                            Use Cases
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem role="presentation">
                                                        <NavLink href="#"
                                                            className={classnames({ active: activeTab === 4, done: activeTab <= 4 && activeTab > 3 }, "p-3 fs-15")}
                                                            onClick={() => { toggleTab(4); }}
                                                        >
                                                            <i className="fa-solid fa-camera fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                                                            Screenshots
                                                        </NavLink>
                                                    </NavItem>
                                                    <NavItem role="presentation">
                                                        <NavLink href="#"
                                                            className={classnames({ active: activeTab === 5, done: activeTab <= 5 && activeTab > 4 }, "p-3 fs-15")}
                                                            onClick={() => { toggleTab(5); }}
                                                        >
                                                            <i className="ri-checkbox-circle-line  fs-16 p-2 bg-soft-primary text-primary rounded-circle align-middle me-2"></i>
                                                            Finish
                                                        </NavLink>
                                                    </NavItem>
                                                </Nav>
                                            </div>

                                            <TabContent activeTab={activeTab}>
                                                <TabPane tabId={1} id="pills-bill-info">


                                                    <div className="mb-3">
                                                        <Row >
                                                            <Col lg={12} className="d-flex">
                                                                <div className="pt-5 col-lg-2">
                                                                    <Label
                                                                        htmlFor="name-field"
                                                                        className="form-label"
                                                                    >
                                                                        Add AI Model Image
                                                                    </Label>
                                                                </div>

                                                                <div className=" col-lg-10" >

                                                                    <div className="position-relative d-inline-block">

                                                                        <div className="position-absolute  bottom-0 end-0">
                                                                            <Label htmlFor="customer-image-input" className="mb-0">
                                                                                <div className="avatar-xs cursor-pointer">
                                                                                    <div className="avatar-title bg-light border rounded-circle text-muted">
                                                                                        <i className="fa-solid fa-camera"></i>
                                                                                    </div>
                                                                                </div>
                                                                            </Label>
                                                                            <Input className="form-control d-none" id="customer-image-input" type="file"
                                                                                accept="image/png, image/gif, image/jpeg"
                                                                                onChange={validation.handleChange}
                                                                                onBlur={validation.handleBlur}
                                                                                value={validation.values.img || ""}
                                                                                invalid={
                                                                                    validation.touched.img && validation.errors.img ? true : false
                                                                                }
                                                                            />

                                                                        </div>
                                                                        <div className="avatar-lg p-1">
                                                                            <div className="avatar-title bg-light rounded-circle">
                                                                                <img src={dummyImg} alt="dummyImg" id="customer-img" className="avatar-md  object-cover" />
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div>
                                                                    <Label
                                                                        htmlFor="name-field"
                                                                        className="form-label"
                                                                    >
                                                                        Model Name
                                                                    </Label>
                                                                    <Input
                                                                        name="name"
                                                                        id="customername-field"
                                                                        className="form-control"
                                                                        placeholder="Enter Model Name"
                                                                        type="text"
                                                                        validate={{
                                                                            required: { value: true },
                                                                        }}
                                                                        onChange={validation.handleChange}
                                                                        onBlur={validation.handleBlur}
                                                                        value={validation.values.name || ""}
                                                                        invalid={
                                                                            validation.touched.name && validation.errors.name ? true : false
                                                                        }
                                                                    />
                                                                    <small className="text-muted">
                                                                        Enter the name of the AI model.
                                                                    </small>
                                                                    {validation.touched.name && validation.errors.name ? (
                                                                        <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                                                                    ) : null}

                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div >
                                                                    <Label className="form-label mb-0">Add Date</Label>
                                                                    <Flatpickr
                                                                        className="form-control"
                                                                        options={{
                                                                            dateFormat: "d-m-y",
                                                                            defaultDate: ["DD/MM/YYYY"]
                                                                        }}
                                                                    />
                                                                    <small className="text-muted">
                                                                        Select the date when the model was added.
                                                                    </small>
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div>
                                                                    <Label
                                                                        htmlFor="name-field"
                                                                        className="form-label"
                                                                    >
                                                                        Model Cost
                                                                    </Label>
                                                                    <Input
                                                                        name="cost"
                                                                        id="modelCost-field"
                                                                        className="form-control"
                                                                        placeholder="Enter Model Cost"
                                                                        type="number"
                                                                        validate={{
                                                                            required: { value: true },
                                                                        }}
                                                                        onChange={validation.handleChange}
                                                                        onBlur={validation.handleBlur}
                                                                        value={validation.values.cost || ""}
                                                                        invalid={
                                                                            validation.touched.cost && validation.errors.cost ? true : false
                                                                        }
                                                                    />
                                                                    <small className="text-muted">
                                                                        <small className="text-muted">
                                                                            Enter the cost of the AI model.
                                                                        </small>
                                                                    </small>

                                                                    {validation.touched.cost && validation.errors.cost ? (
                                                                        <FormFeedback type="invalid">{validation.errors.cost}</FormFeedback>
                                                                    ) : null}

                                                                </div>
                                                            </Col>

                                                            <Col lg={6}>
                                                                <div>
                                                                    <Label
                                                                        htmlFor="taginput-choices"
                                                                        className="form-label font-size-13 text-muted"
                                                                    >
                                                                        Subscription Plan
                                                                    </Label>
                                                                    <Select

                                                                        value={Subscription}
                                                                        onChange={(e) => {
                                                                            handleSubscription(e);
                                                                        }}
                                                                        className="mb-0"
                                                                        options={Subscription_PlanS}
                                                                        id="taginput-choices"
                                                                    >
                                                                    </Select>
                                                                    <small className="text-muted">
                                                                        Choose from General, Premium, or Bespoke.
                                                                    </small>
                                                                    {validation.touched.tags &&
                                                                        validation.errors.tags ? (
                                                                        <FormFeedback type="invalid">
                                                                            {validation.errors.tags}
                                                                        </FormFeedback>
                                                                    ) : null}
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div>
                                                                    <Label
                                                                        htmlFor="taginput-choices"
                                                                        className="form-label font-size-13 text-muted"
                                                                    >
                                                                        Category
                                                                    </Label>
                                                                    <Select

                                                                        value={Category}
                                                                        onChange={(e) => {
                                                                            handleCategory(e);
                                                                        }}
                                                                        className="mb-0"
                                                                        options={Categorys}
                                                                        id="taginput-choices"
                                                                    >
                                                                    </Select>
                                                                    <small className="text-muted">
                                                                        Select a category from Govt. & Supply Chain, Media and Entertainment, Sales & CRM etc.
                                                                    </small>
                                                                    {validation.touched.tags &&
                                                                        validation.errors.tags ? (
                                                                        <FormFeedback type="invalid">
                                                                            {validation.errors.tags}
                                                                        </FormFeedback>
                                                                    ) : null}
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div>
                                                                    <Label
                                                                        htmlFor="taginput-choices"
                                                                        className="form-label font-size-13 text-muted"
                                                                    >
                                                                        Application  Type
                                                                    </Label>
                                                                    <Select

                                                                        value={Type}
                                                                        onChange={(e) => {
                                                                            handleTypes(e);
                                                                        }}
                                                                        className="mb-0"
                                                                        options={Types}
                                                                        id="taginput-choices"
                                                                    >
                                                                    </Select>
                                                                    <small className="text-muted">
                                                                        Choose from AI/ML Notebook, UI, ETL, BI, or API.
                                                                    </small>
                                                                    {validation.touched.Types &&
                                                                        validation.errors.Types ? (
                                                                        <FormFeedback type="invalid">
                                                                            {validation.errors.Types}
                                                                        </FormFeedback>
                                                                    ) : null}
                                                                </div>
                                                            </Col>
                                                            <Col lg={6}>
                                                                <div>
                                                                    <Label
                                                                        htmlFor="taginput-choices"
                                                                        className="form-label font-size-13 text-muted"
                                                                    >
                                                                        Status
                                                                    </Label>
                                                                    <Select

                                                                        value={tag}
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
                                                                    {validation.touched.tags &&
                                                                        validation.errors.tags ? (
                                                                        <FormFeedback type="invalid">
                                                                            {validation.errors.tags}
                                                                        </FormFeedback>
                                                                    ) : null}
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
                                                                    <i className=" ri-file-list-3-line fa-solid label-icon align-middle fs-16 ms-2"></i>
                                                                    Continue to Details
                                                                </button>
                                                            </div>
                                                        </Row>

                                                    </div>


                                                </TabPane>

                                                <TabPane tabId={2}>

                                                    <div className="mt-4">
                                                        <div className="d-flex align-items-center mb-2">

                                                        </div>
                                                        <Row className="gy-3">
                                                            <Col lg={12}>
                                                                <div>
                                                                    <Label
                                                                        htmlFor="name-field"
                                                                        className="form-label"
                                                                    >
                                                                        Model Tags (sperate & comma)
                                                                    </Label>
                                                                    <Input
                                                                        name="Tags"
                                                                        id="customername-field"
                                                                        className="form-control"
                                                                        placeholder="Enter Model Tags"
                                                                        type="text"
                                                                        validate={{
                                                                            required: { value: true },
                                                                        }}
                                                                        onChange={validation.handleChange}
                                                                        onBlur={validation.handleBlur}
                                                                        value={validation.values.name || ""}
                                                                        invalid={
                                                                            validation.touched.name && validation.errors.name ? true : false
                                                                        }
                                                                    />
                                                                    <small className="text-muted">
                                                                        Add tags to categorize the model.
                                                                    </small>
                                                                    {validation.touched.name && validation.errors.name ? (
                                                                        <FormFeedback type="invalid">{validation.errors.name}</FormFeedback>
                                                                    ) : null}

                                                                </div>
                                                            </Col>
                                                            <Col lg={12}>
                                                                <div>
                                                                    <Label
                                                                        htmlFor="Description"
                                                                        className="form-label"
                                                                    >
                                                                        Description
                                                                    </Label>
                                                                    <MyEditor name={'Description'} id={'Description-field'} placeholder={'List the specific use cases or industries where your model can be applied.'} />
                                                                    <small className="text-muted">
                                                                        Provide a brief description of the AI model.
                                                                    </small>
                                                                </div>
                                                            </Col>

                                                            <Col lg={12}>
                                                                <div>
                                                                    <Label
                                                                        htmlFor="phone-field"
                                                                        className="form-label"
                                                                    >
                                                                        Example Code
                                                                    </Label>

                                                                    <MyEditor name={'Example_Code'} id={'Example_Code-field'} />
                                                                    <small className="text-muted">
                                                                        Include example code if available.
                                                                    </small>
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
                                                            Back to Intro
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-label right ms-auto nexttab"
                                                            onClick={() => {
                                                                toggleTab(activeTab + 1);
                                                            }}
                                                        >
                                                            <i className="ri-bank-card-line label-icon align-middle fs-16 ms-2"></i>
                                                            Continue to Other Details
                                                        </button>
                                                    </div>
                                                </TabPane>

                                                <TabPane tabId={3}>




                                                    <div
                                                        className="collapse show"
                                                        id="paymentmethodCollapse"
                                                    >
                                                        <Row className="gy-3">
                                                            <Col lg={12}>
                                                                <div>
                                                                    <Label
                                                                        htmlFor="phone-field"
                                                                        className="form-label"
                                                                    >
                                                                        Use Cases
                                                                    </Label>

                                                                    <MyEditor name={'Use_Cases'} id={'Use_Cases-field'} />
                                                                    <small className="text-muted">
                                                                        Describe the use cases for the AI model.
                                                                    </small>
                                                                </div>
                                                            </Col>
                                                            <Col lg={12}>
                                                                <div>
                                                                    <Label
                                                                        htmlFor="phone-field"
                                                                        className="form-label"
                                                                    >
                                                                        Input / Output
                                                                    </Label>

                                                                    <MyEditor name={'Input_Output'} id={"Input_Output-field"} />
                                                                    <small className="text-muted">
                                                                        Specify the model's input and output details.
                                                                    </small>
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
                                                            Back to Other Details
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-primary btn-label right ms-auto nexttab"
                                                            onClick={() => {
                                                                toggleTab(activeTab + 1);
                                                            }}
                                                        >
                                                            <i className="fa-solid fa-camera label-icon align-middle fs-16 ms-2"></i>
                                                            Continue to Screenshots
                                                        </button>
                                                    </div>
                                                </TabPane>
                                                <TabPane tabId={4} >
                                                    <Row className="mt-2">
                                                        <Col lg={12}>


                                                            <Row>
                                                                <Col lg={6}>
                                                                    <Card>
                                                                        <CardHeader>
                                                                            <h4 className="card-title mb-0">Add Model Screenshots</h4>
                                                                        </CardHeader>

                                                                        <CardBody>
                                                                            <FilePond
                                                                                files={files}
                                                                                onupdatefiles={setFiles}
                                                                                allowMultiple={true}
                                                                                maxFiles={3}
                                                                                name="files"
                                                                                className="filepond filepond-input-multiple"
                                                                            />
                                                                            <small className="text-muted">
                                                                                Upload screenshots of the AI model's interface.
                                                                            </small>
                                                                        </CardBody>
                                                                    </Card>

                                                                </Col>
                                                                <div className="modal-footer">
                                                                    <div className="hstack gap-2 justify-content-end">
                                                                        <Link to='/admin/AImodel'>
                                                                            
                                                                            <button  type="button" className="btn btn-light" data-bs-dismiss="modal">Close</button>
                                                                        </Link>

                                                                        <button type="submit" className="btn btn-success" id="add-btn"  onClick={() => {
                                                                                toggleTab(activeTab + 1);
                                                                            }}>Add AI Model</button>

                                                                          
                                                                    
                                                                        

                                                                    </div>
                                                                </div>
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                                </TabPane>

                                                <TabPane tabId={5} id="pills-finish">
                                                    <div className="text-center py-5">
                                                        <div className="mb-4">
                                                            <lord-icon
                                                                src="https://cdn.lordicon.com/lupuorrc.json"
                                                                trigger="loop"
                                                                colors="primary:#0ab39c,secondary:#405189"
                                                                style={{ width: "120px", height: "120px" }}
                                                            ></lord-icon>
                                                        </div>
                                                        <h5>Thank you ! Your Model Added</h5>
                                                        {/* <p className="text-muted">
                                                            You will receive an order confirmation email with
                                                            details of your order.
                                                        </p> */}



                                                        <Card className="d-flex align-items-center mb-2">
                                                            <CardHeader>
                                                                <h5 className="card-title mb-0">
                                                                    <i className="fa-solid fa-robot align-bottom me-1 text-muted"></i>{" "}
                                                                    Model Details
                                                                </h5>
                                                            </CardHeader>
                                                            <CardBody>

                                                                <div className="d-flex align-items-start mb-2">
                                                                    <div className="flex-shrink-0">
                                                                        <p className="fw-semibold mb-0">Model Name:</p>
                                                                    </div>
                                                                    <div className="flex-grow-1 ms-2 padding-Almodel-finish">
                                                                        <h6 className="mb-0 text-muted">HSN Code Classifier</h6>
                                                                    </div>
                                                                </div>

                                                                <div className="d-flex align-items-start mb-2">
                                                                    <div className="flex-shrink-0">
                                                                        <p className="fw-semibold mb-0">Model Cost:</p>
                                                                    </div>
                                                                    <div className=" ms-2 padding-Almodel-finish">
                                                                        <h6 className="mb-0 text-muted">$ 200</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-start mb-2">
                                                                    <div className="flex-shrink-0">
                                                                        <p className="fw-semibold mb-0">Subscription Plan:</p>
                                                                    </div>
                                                                    <div className="ms-2 padding-Almodel-finish">
                                                                        <h6 className="mb-0 text-muted">General</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-shrink-0">
                                                                        <p className="fw-semibold mb-0">Category:</p>
                                                                    </div>
                                                                    <div className="ms-2 padding-Almodel-finish">
                                                                        <h6 className="mb-0 text-muted">Govt. & Supply Chain</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-shrink-0">
                                                                        <p className="fw-semibold mb-0">Application Type:</p>
                                                                    </div>
                                                                    <div className="ms-2 padding-Almodel-finish">
                                                                        <h6 className="mb-0 text-muted">Notebook</h6>
                                                                    </div>
                                                                </div>
                                                                <div className="d-flex align-items-start">
                                                                    <div className="flex-shrink-0">
                                                                        <p className="fw-semibold mb-0">Status:</p>
                                                                    </div>
                                                                    <div className="ms-2 padding-Almodel-finish">
                                                                        <h6 className="mb-0 " style={{ color: 'green' }} >Active</h6>

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


                        </Row>
                    </Container>
                </div>
            </React.Fragment>

        </>
    );
};

export default AImodelFrom;
