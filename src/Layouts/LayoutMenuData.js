import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Navdata = () => {
    const history = useNavigate();

    //New data
    const [isDashboard2, setIsDashboard2] = useState(false);
    const [isAiMlModels, setIsAIMLModels] = useState(false);
    const [isProject, setIsProject] = useState(false);
    const [isAiMlNotebooks, setIsAIMLNotebooks] = useState(false);
    const [isMonitoringandHealth, setIsMonitoringAndHealth] = useState(false);
    const [isManagebilling, setIsManageBilling] = useState(false);
    const [isHelp, setIsHelp] = useState(false);
    const [isManageprofile, setIsManageProfile] = useState(false);
    const [isSettings, setIsSettings] = useState(false);
    const [isTutorials, setIsTutorials] = useState(false);
    const [isTeamMembers, setIsTeamMembers] = useState(false);

    //state data
    const [isDashboard, setIsDashboard] = useState(false);
    const [isApps, setIsApps] = useState(false);
    const [isAuth, setIsAuth] = useState(false);
    const [isPages, setIsPages] = useState(false);
    const [isPages2, setIsPages2] = useState(false);
    const [isBaseUi, setIsBaseUi] = useState(false);
    const [isAdvanceUi, setIsAdvanceUi] = useState(false);
    const [isForms, setIsForms] = useState(false);
    const [isTables, setIsTables] = useState(false);
    const [isCharts, setIsCharts] = useState(false);
    const [isIcons, setIsIcons] = useState(false);
    const [isMaps, setIsMaps] = useState(false);
    const [isMultiLevel, setIsMultiLevel] = useState(false);

    // Apps
    const [isEmail, setEmail] = useState(false);
    const [isSubEmail, setSubEmail] = useState(false);
    const [isEcommerce, setIsEcommerce] = useState(false);
    const [isEcommerce2, setIsEcommerce2] = useState(false);
    const [isProjects2, setIsProjects2] = useState(false);
    const [isProjects, setIsProjects] = useState(false);
    const [isTasks, setIsTasks] = useState(false);
    const [isCRM, setIsCRM] = useState(false);
    const [isCrypto, setIsCrypto] = useState(false);
    const [isInvoices, setIsInvoices] = useState(false);
    const [isInvoices2, setIsInvoices2] = useState(false);
    const [isSupportTickets, setIsSupportTickets] = useState(false);
    const [isSupportTickets2, setIsSupportTickets2] = useState(false);
    const [isNFTMarketplace, setIsNFTMarketplace] = useState(false);
    const [isLanding, setIsLanding] = useState(false);
    const [isJobs, setIsJobs] = useState(false);
    const [isJobs2, setIsJobs2] = useState(false);
    const [isJobList, setIsJobList] = useState(false);
    const [isJobList2, setIsJobList2] = useState(false);
    const [isCandidateList, setIsCandidateList] = useState(false);

    // Authentication
    const [isSignIn, setIsSignIn] = useState(false);
    const [isSignUp, setIsSignUp] = useState(false);
    const [isPasswordReset, setIsPasswordReset] = useState(false);
    const [isPasswordCreate, setIsPasswordCreate] = useState(false);
    const [isLockScreen, setIsLockScreen] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [isSuccessMessage, setIsSuccessMessage] = useState(false);
    const [isVerification, setIsVerification] = useState(false);
    const [isError, setIsError] = useState(false);

    // Pages
    const [isProfile, setIsProfile] = useState(false);
    const [isProfile2, setIsProfile2] = useState(false);

    // Charts
    const [isApex, setIsApex] = useState(false);

    // Multi Level
    const [isLevel1, setIsLevel1] = useState(false);
    const [isLevel2, setIsLevel2] = useState(false);

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

    function updateIconSidebar(e) {
        if (e && e.target && e.target.getAttribute("subitems")) {
            const ul = document.getElementById("two-column-menu");
            const iconItems = ul.querySelectorAll(".nav-icon.active");
            let activeIconItems = [...iconItems];
            activeIconItems.forEach((item) => {
                item.classList.remove("active");
                var id = item.getAttribute("subitems");
                if (document.getElementById(id))
                    document.getElementById(id).classList.remove("show");
            });
        }
    }

    useEffect(() => {
        document.body.classList.remove('twocolumn-panel');
        if (iscurrentState !== 'Dashboard2') {
            setIsDashboard2(false);
        }
        if (iscurrentState !== 'Project') {
            setIsProject(false);
        }
        if (iscurrentState !== 'AI/ML Models') {
            setIsAIMLModels(false);
        }
        if (iscurrentState !== 'AI/ML Notebooks') {
            setIsAIMLNotebooks(false);
        }
        if (iscurrentState !== 'Manage Billing') {
            setIsManageBilling(false);
        }
        if (iscurrentState !== 'Help') {
            setIsHelp(false);
        }
        if (iscurrentState !== 'Manage Profile') {
            setIsManageProfile(false);
        }
        if (iscurrentState !== 'Settings') {
            setIsSettings(false);
        }
        if (iscurrentState !== 'Tutorials') {
            setIsTutorials(false);
        }
        if (iscurrentState !== 'Team Members') {
            setIsTeamMembers(false);
        }
        if (iscurrentState !== 'Dashboard') {
            setIsDashboard(false);
        }
        if (iscurrentState !== 'Apps') {
            setIsApps(false);
        }
        if (iscurrentState !== 'Auth') {
            setIsAuth(false);
        }
        if (iscurrentState !== 'Pages') {
            setIsPages(false);
        }
        if (iscurrentState !== 'Landing') {
            setIsLanding(false);
        }
        if (iscurrentState !== 'BaseUi') {
            setIsBaseUi(false);
        }
        if (iscurrentState !== 'AdvanceUi') {
            setIsAdvanceUi(false);
        }
        if (iscurrentState !== 'Forms') {
            setIsForms(false);
        }
        if (iscurrentState !== 'Tables') {
            setIsTables(false);
        }
        if (iscurrentState !== 'Charts') {
            setIsCharts(false);
        }
        if (iscurrentState !== 'Icons') {
            setIsIcons(false);
        }
        if (iscurrentState !== 'Maps') {
            setIsMaps(false);
        }
        if (iscurrentState !== 'MuliLevel') {
            setIsMultiLevel(false);
        }
        if (iscurrentState === 'Widgets') {
            history("/widgets");
            document.body.classList.add('twocolumn-panel');
        }
    }, [
        history,
        iscurrentState,
        isProject,
        isDashboard2,
        isAiMlModels,
        isAiMlNotebooks,
        isMonitoringandHealth,
        isManagebilling,
        isHelp,
        isManageprofile,
        isSettings,
        isTutorials,
        isTeamMembers,
        isDashboard,
        isApps,
        isAuth,
        isPages,
        isBaseUi,
        isAdvanceUi,
        isForms,
        isTables,
        isCharts,
        isIcons,
        isMaps,
        isMultiLevel
    ]);

    const menuItems = [
        {
            label: "Menu",
            isHeader: true,
        },
        {
            id: "dashboard2",
            label: "Dashboards",
            icon: "ri-dashboard-2-line",
            link: "/#",
            stateVariables: isDashboard2,
            click: function (e) {
                e.preventDefault();
                setIsDashboard2(!isDashboard2);
                setIscurrentState('Dashboard2');
                updateIconSidebar(e);
            },
                // subItems: [
                //     {
                //         id: "appsprojects",
                //         label: "Projects",
                //         link: "/#",
                //         isChildItem: true,
                //         click: function (e) {
                //             e.preventDefault();
                //             setIsProjects2(!isProjects2);
                //         },
                //         parentId: "dashboard2",
                //         stateVariables: isProjects2,
                //         childItems: [
                //             { id: 1, label: "List", link: "/apps-projects-list2", parentId: "dashboard2", },
                //             { id: 2, label: "Overview", link: "/apps-projects-overview2", parentId: "dashboard2", },
                //         ]
                //     },
                //     {
                //         id: "invoices",
                //         label: "Invoices",
                //         link: "/#",
                //         isChildItem: true,
                //         click: function (e) {
                //             e.preventDefault();
                //             setIsInvoices2(!isInvoices2);
                //         },
                //         parentId: "dashboard2",
                //         stateVariables: isInvoices2,
                //         childItems: [
                //             { id: 1, label: "List View", link: "/apps-invoices-list2" },
                //             { id: 2, label: "Details", link: "/apps-invoices-details2" },
                //         ]
                //     },
                //     {
                //         id: "supportTickets",
                //         label: "Support Tickets",
                //         link: "/#",
                //         isChildItem: true,
                //         click: function (e) {
                //             e.preventDefault();
                //             setIsSupportTickets2(!isSupportTickets2);
                //         },
                //         parentId: "dashboard2",
                //         stateVariables: isSupportTickets2,
                //         childItems: [
                //             { id: 1, label: "List View", link: "/apps-tickets-list2" },
                //             { id: 2, label: "Ticket Details", link: "/apps-tickets-details2" },
                //         ]
                //     },
                //     {
                //         id: "job",
                //         label: "Jobs",
                //         link: "/#",
                //         parentId: "dashboard2",
                //         badgeName: "New",
                //         badgeColor: "success",
                //         isChildItem: true,
                //         click: function (e) {
                //             e.preventDefault();
                //             setIsJobs2(!isJobs2);
                //         },
                //         stateVariables: isJobs2,
                //         childItems: [
                //             {
                //                 id: 2,
                //                 label: "Job Lists",
                //                 link: "/#",
                //                 parentId: "dashboard2",
                //                 isChildItem: true,
                //                 stateVariables: isJobList2,
                //                 click: function (e) {
                //                     e.preventDefault();
                //                     setIsJobList2(!isJobList2);
                //                 },
                //                 childItems: [
                //                     {
                //                         id: 2,
                //                         label: "Grid",
                //                         link: "/apps-job-grid-lists2",
                //                         parentId: "dashboard2",
                //                     },
                //                 ],
                //             },
                //         ],
                //     },
                //     {
                //         id: "appsecommerce",
                //         label: "Ecommerce",
                //         link: "/#",
                //         isChildItem: true,
                //         click: function (e) {
                //             e.preventDefault();
                //             setIsEcommerce2(!isEcommerce2);
                //         },
                //         parentId: "dashboard2",
                //         stateVariables: isEcommerce2,
                //         childItems: [
                //             { id: 7, label: "Shopping Cart", link: "/apps-ecommerce-cart2", parentId: "dashboard2" },
                //             { id: 8, label: "Checkout", link: "/apps-ecommerce-checkout2", parentId: "dashboard2" },
                //         ]
                //     },
                //     {
                //         id: "faqs",
                //         label: "FAQs",
                //         link: "/pages-faqs2",
                //         parentId: "dashboard2"
                //     },
                //     {
                //         id: "profile",
                //         label: "Profile",
                //         link: "/#",
                //         isChildItem: true,
                //         click: function (e) {
                //             e.preventDefault();
                //             setIsProfile2(!isProfile2);
                //         },
                //         parentId: "dashboard2",
                //         stateVariables: isProfile2,
                //         childItems: [
                //             { id: 2, label: "Settings", link: "/pages-profile-settings2", parentId: "dashboard2" },
                //         ]
                //     },
                //     {
                //         id: "pricing",
                //         label: "Pricing",
                //         link: "/pages-pricing2",
                //         parentId: "dashboard2"
                //     },
                // ]
        },
        {
            id: "project",
            label: "Project",
            icon: "ri-projector-line",
            link: "/project",
            stateVariables: isProject,
            click: function (e) {
                e.preventDefault();
                setIsProject(!isProject);
                setIscurrentState('Project');
                updateIconSidebar(e);
            },
        },
        {
            id: "ai/mlmodels",
            label: "AI/ML Models",
            icon: "ri-apps-2-line",
            link: "/models-details",
            stateVariables: isAiMlModels,
            click: function (e) {
                e.preventDefault();
                setIsAIMLModels(!isAiMlModels);
                setIscurrentState('AI/ML Models');
                updateIconSidebar(e);
            },
        },
        {
            id: "ai/mlnotebooks",
            label: "Notebooks",
            icon: "mdi mdi-notebook-edit-outline",
            link: "/notebook",
            stateVariables: isAiMlNotebooks,
            click: function (e) {
                e.preventDefault();
                setIsAIMLNotebooks(!isAiMlNotebooks);
                setIscurrentState('AI/ML Notebooks');
                updateIconSidebar(e);
            },
        },
        {
            id: "managebilling",
            label: "Manage Billing",
            icon: "mdi mdi-progress-wrench",
            link: "/#",
            stateVariables: isManagebilling,
            click: function (e) {
                e.preventDefault();
                setIsManageBilling(!isManagebilling);
                setIscurrentState('Manage Billing');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "paymenthistory",
                    label: "Payment History",
                    link: "/payment-history",
                    parentId: "managebilling",
                },
            ]
        },
        {
            id: "help",
            label: "Help",
            icon: "bx bx-help-circle",
            link: "/#",
            stateVariables: isHelp,
            click: function (e) {
                e.preventDefault();
                setIsHelp(!isHelp);
                setIscurrentState('Help');
                updateIconSidebar(e);
            },
            subItems: [
                {
                    id: "supportticket",
                    label: "Support Ticket",
                    link: "/apps-supoort-ticket",
                    parentId: "help",
                },
                {
                    id: "faqs",
                    label: "FAQs",
                    link: "/faqs",
                    parentId: "help",
                },
            ]
        },
        {
            id: "manageprofile",
            label: "Manage Profile",
            icon: " ri-profile-line",
            link: "/pages-manage-profile",
            stateVariables: isManageprofile,
            click: function (e) {
                e.preventDefault();
                setIsManageProfile(!isManageprofile);
                setIscurrentState('Manage Profile');
                updateIconSidebar(e);
            },
        },
        {
            id: "tutorials",
            label: "Tutorials",
            icon: "ri-video-line",
            link: "/tutorial",
            stateVariables: isTutorials,
            click: function (e) {
                e.preventDefault();
                setIsTutorials(!isTutorials);
                setIscurrentState('Tutorials');
                updateIconSidebar(e);
            },
        },
        {
            id: "teammembers",
            label: "Team Members",
            icon: " ri-team-line",
            link: "/team-members",
            stateVariables: isTeamMembers,
            click: function (e) {
                e.preventDefault();
                setIsTeamMembers(!isTeamMembers);
                setIscurrentState('Team Members');
                updateIconSidebar(e);
            },
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;