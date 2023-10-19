import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard  
import DashboardEcommerce from "../pages/DashboardEcommerce";



import Dashboard from "../pages/Dashboard";
import AdminDashboard from "../pages/Admin/AdminDashboard/index";
import UserManagement from "../pages/Admin/UserManagement/index";
import PurchaseHistorys from "../pages/Admin/PurchaseHistory/index";
import Supporttickets from "../pages/Admin/SupportTicket/index";



// Support Tickets
import TicketsDetails from '../pages/HelpSupportTickets/TicketsDetails';

// //Ecommerce Pages






import EcommerceCheckout from "../pages/Ecommerce/EcommerceCheckout";





// Widgets
import Widgets from '../pages/Widgets/Index';


//AuthenticationInner pages
import BasicSignIn from '../pages/AuthenticationInner/Login/BasicSignIn';
import CoverSignIn from '../pages/AuthenticationInner/Login/CoverSignIn';
import BasicSignUp from '../pages/AuthenticationInner/Register/BasicSignUp';
import CoverSignUp from "../pages/AuthenticationInner/Register/CoverSignUp";
import BasicPasswReset from '../pages/AuthenticationInner/PasswordReset/BasicPasswReset';

//pages
import Starter from '../pages/Pages/Starter/Starter';
import SimplePage from '../pages/Pages/Profile/SimplePage/SimplePage';
import SimplePages from '../pages/Admin/UserManagement/SimplePage';
import Settings from '../pages/Pages/Profile/Settings/Settings';
import Team from '../pages/Pages/Team/Team';
import TeamMembers from '../pages/TeamMembers/TeamMembers';
import Timeline from '../pages/Pages/Timeline/Timeline';
import Faqs from '../pages/Pages/Faqs/Faqs';
import SiteMap from '../pages/Pages/SiteMap/SiteMap';
import SearchResults from '../pages/Pages/SearchResults/SearchResults';
import PrivecyPolicy from '../pages/Pages/PrivacyPolicy.js'
import TermsCondition from '../pages/Pages/TermsCondition'

import CoverPasswReset from '../pages/AuthenticationInner/PasswordReset/CoverPasswReset';
import BasicLockScreen from '../pages/AuthenticationInner/LockScreen/BasicLockScr';
import CoverLockScreen from '../pages/AuthenticationInner/LockScreen/CoverLockScr';
import BasicLogout from '../pages/AuthenticationInner/Logout/BasicLogout';
import CoverLogout from '../pages/AuthenticationInner/Logout/CoverLogout';
import BasicSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/BasicSuccessMsg';
import CoverSuccessMsg from '../pages/AuthenticationInner/SuccessMessage/CoverSuccessMsg';
import BasicTwosVerify from '../pages/AuthenticationInner/TwoStepVerification/BasicTwosVerify';
import CoverTwosVerify from '../pages/AuthenticationInner/TwoStepVerification/CoverTwosVerify';
import Basic404 from '../pages/AuthenticationInner/Errors/Basic404';
import Cover404 from '../pages/AuthenticationInner/Errors/Cover404';
import Alt404 from '../pages/AuthenticationInner/Errors/Alt404';
import Error500 from '../pages/AuthenticationInner/Errors/Error500';

import BasicPasswCreate from "../pages/AuthenticationInner/PasswordCreate/BasicPasswCreate";
import CoverPasswCreate from "../pages/AuthenticationInner/PasswordCreate/CoverPasswCreate";
import Offlinepage from "../pages/AuthenticationInner/Errors/Offlinepage";

//login
import Login from "../pages/Authentication/Login";
import AdminLogin from "../pages/Admin/AdminAuthentication/Login";
import ForgetPasswordPageadmin from "../pages/Admin/AdminAuthentication/ForgetPassword";
import ForgetPasswordPage from "../pages/Authentication/ForgetPassword";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import AdminRegister from "../pages/Admin/AdminAuthentication/Register";



import ApiKey from '../pages/APIKey/index'


// User Profile
import UserProfile from "../pages/Authentication/user-profile";

import ManageProfile from "../pages/Pages/ManageProfile/Settings/ManageProfile";
import ListSupportTicket from "../pages/HelpSupportTickets/ListSupportTicekts";
import HelpFaqs from "../pages/Pages/HelpFaqs/Faqs";
import Notebook from "../pages/Pages/HelpProject/Notebook";
import NotebookOverview from "../pages/Pages/HelpProject/NotebookOverview";
import Project from "../pages/Pages/Project/Projectlist";
import Models from "../pages/Models/Models";
import MainProjectOverview from "../pages/Pages/Project/ProjectOverview";
import ModelsDetails from "../pages/Models";
import UiEmbedVideo from "../pages/Tutorials/UiEmbedVideo/UiEmbedVideo";

import ManageBilling from "../pages/ManageBilling";
import PaymentDetails from "../pages/ManageBilling/PaymentDetails";

import InvoiceList from "../pages/Invoices/InvoiceList";
import InvoiceCreate from "../pages/Invoices/InvoiceCreate";
import InvoiceDetails from "../pages/Invoices/InvoiceDetails"
import ModelsCatlog from "../pages/Admin/AiMl-Models/modelcatlog/ModelsCatlog";
import AImodel from "../pages/Admin/AiMl-Models/AI model/AImodel";
import AImodelForm from "../pages/Admin/AiMl-Models/AI model/AlmodelForm";
import FAQs from "../pages/Admin/FAQS/FAQs";
import Tutorials from "../pages/Admin/Tutorials/Tutorials";
import ChangePassword from "../pages/Admin/AdminAuthentication/ChangePassword";
import VideoLink from "../pages/Admin/Tutorials/VideoLink";

const authProtectedRoutes = [
  { path: "/aiml-models", component: <Models /> },
  { path: "/models-details", component: <ModelsDetails /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/admin/dashboard", component: <AdminDashboard /> },
  { path: "/admin/Management", component: <UserManagement /> },
  { path: "/admin/ModelsCategory", component: <ModelsCatlog /> },
  { path: "/admin/AImodel", component: <AImodel /> },
  { path: "/admin/AddNewModel", component: <AImodelForm /> },
  { path: "/admin/FAQs", component: <FAQs /> },
  { path: "/admin/Tutorials", component: <Tutorials /> },
  { path: "/admin/PurchaseHistory", component: <PurchaseHistorys /> },
  { path: "/admin/supportticket", component: <Supporttickets /> },
  { path: "/admin/UserProfile", component: <SimplePages /> },
  { path: "/admin/ChangePassword", component: <ChangePassword /> },
  { path: "/admin/Video", component: <VideoLink /> },




  // { path: "/dashboard", component: <DashboardEcommerce /> },
  { path: "/index", component: <DashboardEcommerce /> },

  { path: "/payment-history", component: <ManageBilling /> },
  { path: "/payment-details", component: <PaymentDetails /> },

  { path: "/apps-ecommerce-checkout", component: <EcommerceCheckout /> },

  //Projects
  { path: "/notebook", component: <Notebook /> },
  { path: "/project", component: <Project /> },
  { path: "/notebook-overview", component: <NotebookOverview /> },
  { path: "/project-overview", component: <MainProjectOverview /> },


  //Supports Tickets
  { path: "/apps-tickets-details", component: <TicketsDetails /> },
  { path: "/apps-supoort-ticket", component: <ListSupportTicket /> },

  // Widgets
  { path: "/widgets", component: <Widgets /> },
  { path: "/apps-invoices-list", component: <InvoiceList /> },
  { path: "/apps-invoices-details", component: <InvoiceDetails /> },
  { path: "/apps-invoices-create", component: <InvoiceCreate /> },
  { path: '/team-members', component: <TeamMembers /> },

  //Pages
  { path: "/pages-starter", component: <Starter /> },
  { path: "/pages-profile", component: <SimplePage /> },
  { path: "/pages-profile-settings", component: <Settings /> },
  { path: "/pages-manage-profile", component: <ManageProfile /> },
  { path: "/pages-team", component: <Team /> },
  { path: "/pages-timeline", component: <Timeline /> },
  { path: "/pages-faqs", component: <Faqs /> },
  { path: "/faqs", component: <HelpFaqs /> },
  { path: "/pages-sitemap", component: <SiteMap /> },
  { path: "/pages-search-results", component: <SearchResults /> },
  { path: "/pages-privecy-policy", component: <PrivecyPolicy /> },
  { path: "/pages-terms-condition", component: <TermsCondition /> },

  //APIkey
  { path: "/apps-api-key", component: <ApiKey /> },
  { path: '/tutorial', component: <UiEmbedVideo /> },

  //User Profile
  { path: "/profile", component: <UserProfile /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/admin", component: <AdminLogin /> },
  { path: "/admin-forgot-password", component: <ForgetPasswordPageadmin /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },
  { path: "/admin-register", component: <AdminRegister /> },

  //AuthenticationInner pages
  { path: "/auth-signin-basic", component: <BasicSignIn /> },
  { path: "/auth-signin-cover", component: <CoverSignIn /> },
  { path: "/auth-signup-basic", component: <BasicSignUp /> },
  { path: "/auth-signup-cover", component: <CoverSignUp /> },
  { path: "/auth-pass-reset-basic", component: <BasicPasswReset /> },
  { path: "/auth-pass-reset-cover", component: <CoverPasswReset /> },
  { path: "/auth-lockscreen-basic", component: <BasicLockScreen /> },
  { path: "/auth-lockscreen-cover", component: <CoverLockScreen /> },
  { path: "/auth-logout-basic", component: <BasicLogout /> },
  { path: "/auth-logout-cover", component: <CoverLogout /> },
  { path: "/auth-success-msg-basic", component: <BasicSuccessMsg /> },
  { path: "/auth-success-msg-cover", component: <CoverSuccessMsg /> },
  { path: "/auth-twostep-basic", component: <BasicTwosVerify /> },
  { path: "/auth-twostep-cover", component: <CoverTwosVerify /> },
  { path: "/auth-404-basic", component: <Basic404 /> },
  { path: "/auth-404-cover", component: <Cover404 /> },
  { path: "/auth-404-alt", component: <Alt404 /> },
  { path: "/auth-500", component: <Error500 /> },

  { path: "/auth-pass-change-basic", component: <BasicPasswCreate /> },
  { path: "/auth-pass-change-cover", component: <CoverPasswCreate /> },
  { path: "/auth-offline", component: <Offlinepage /> },

];

export { authProtectedRoutes, publicRoutes };