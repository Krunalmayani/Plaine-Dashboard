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
    const [model, setmodel] = useState(false);
    const [isManageprofile, setIsManageProfile] = useState(false);
    const [isSettings, setIsSettings] = useState(false);
    const [isTutorials, setIsTutorials] = useState(false);
    const [isTeamMembers, setIsTeamMembers] = useState(false);
    const [UserManagement, setIsUserManagement] = useState(false);
    const [PurchaseHistory, setPurchaseHistory] = useState(false);

    //state data
    const [isDashboard, setIsDashboard] = useState(false);

    const obj = JSON.parse(sessionStorage.getItem("authUser")).role
    console.log('obj   LLL', obj);

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
        if (iscurrentState !== 'Model') {
            setmodel(false);
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
        if (iscurrentState === 'Widgets') {
            history("/widgets");
            document.body.classList.add('twocolumn-panel');
        }
        if (iscurrentState !== 'UserManagement') {
            setIsUserManagement(false)
        }
        if (iscurrentState !== 'Purchase History') {
            setPurchaseHistory(false)
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
        model,
        isManageprofile,
        isSettings,
        isTutorials,
        isTeamMembers,
        isDashboard,
        UserManagement,
        PurchaseHistory


    ]);

    const menuItems =
        obj ?
            [
                {
                    label: "Menu",
                    isHeader: true,
                },
                {
                    id: "dashboard2",
                    label: "Dashboards",
                    icon: "ri-dashboard-2-line",
                    link: "/admin/dashboard",
                    stateVariables: isDashboard2,
                    click: function (e) {
                        e.preventDefault();
                        setIsDashboard2(!isDashboard2);
                        setIscurrentState('Dashboard2');
                        updateIconSidebar(e);
                    },
                },
                {
                    id: "UserManagement",
                    label: "User Management",
                    icon: " ri-team-fill",
                    link: "/admin/Management",
                    stateVariables: UserManagement,
                    click: function (e) {
                        e.preventDefault();
                        setIsDashboard2(!UserManagement);
                        setIscurrentState('UserManagement');
                        updateIconSidebar(e);
                    },
                },
                {
                    id: "Model",
                    label: "AI/ML Models",
                    icon: "fa-solid fa-robot",
                    link: "/#",
                    stateVariables: model,
                    click: function (e) {
                        e.preventDefault();
                        setmodel(!model);
                        setIscurrentState('Model');
                        updateIconSidebar(e);
                    },
                    subItems: [
                        {
                            id: "supportticket",
                            label: "Model Category",
                            link: "/admin/ModelsCategory",
                            parentId: "Model",
                        },
                        {
                            id: "faqs",
                            label: "AI Models",
                            link: "/admin/AImodel",
                            parentId: "Model",
                        },
                    ]
                },
                {
                    id: "help",
                    label: "Help",
                    icon: "las la-question-circle",
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
                            link: "/admin/supportticket",
                            parentId: "help",
                        },
                        {
                            id: "faqs",
                            label: "FAQs",
                            icon: " las la-question-circle",
                            link: "/admin/FAQs",
                            parentId: "help",
                        },
                    ]
                },
               
                {
                    id: "UserManagement",
                    label: "Tutorials",
                    icon: " ri-video-line",
                    link: "/admin/Tutorials",
                    stateVariables: UserManagement,
                    click: function (e) {
                        e.preventDefault();
                        setIsDashboard2(!UserManagement);
                        setIscurrentState('UserManagement');
                        updateIconSidebar(e);
                    },
                },
                {
                    id: "PurchaseHistory",
                    label: "Purchase History",
                    icon: "ri-bank-card-line",
                    link: "/admin/PurchaseHistory",
                    stateVariables: PurchaseHistory,
                    click: function (e) {
                        e.preventDefault();
                        setIsDashboard2(!PurchaseHistory);
                        setIscurrentState('PurchaseHistory');
                        updateIconSidebar(e);
                    },
                },


            ]
            :

            [
                {
                    label: "Menu",
                    isHeader: true,
                },
                {
                    id: "dashboard2",
                    label: "Dashboards",
                    icon: "ri-dashboard-2-line",
                    link: "/dashboard",
                    stateVariables: isDashboard2,
                    click: function (e) {
                        e.preventDefault();
                        setIsDashboard2(!isDashboard2);
                        setIscurrentState('Dashboard2');
                        updateIconSidebar(e);
                    },
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