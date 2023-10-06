// Import Images
import slack from "../../assets/images/brands/slack.png";
import dribbble from "../../assets/images/brands/dribbble.png";
import mailChimp from "../../assets/images/brands/mail_chimp.png";
import dropbox from "../../assets/images/brands/dropbox.png";
import avatar2 from "../../assets/images/users/avatar-2.jpg";
import avatar3 from "../../assets/images/users/avatar-3.jpg";
import avatar4 from "../../assets/images/users/avatar-4.jpg";
import avatar5 from "../../assets/images/users/avatar-5.jpg";
import avatar6 from "../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../assets/images/users/avatar-8.jpg";
import avatar9 from "../../assets/images/users/avatar-9.jpg";
import avatar10 from "../../assets/images/users/avatar-10.jpg";

import avatar11 from "../../assets/images/users/Jupyter Notebook.png";
import avatar12 from "../../assets/images/users/Google Colab.png";
import avatar13 from "../../assets/images/users/JupyterLab.png";
import avatar14 from "../../assets/images/users/Deepnote.png";
import avatar15 from "../../assets/images/users/Azure Notebooks.png";
import avatar16 from "../../assets/images/users/Databricks Community Edition.png";
import avatar17 from "../../assets/images/users/RStudio Server.png";
import avatar18 from "../../assets/images/users/Cocalc.png";
import avatar19 from "../../assets/images/users/Zeppelin.png";
import avatar20 from "../../assets/images/users/nteract.png";
import avatar21 from "../../assets/images/users/Polyaxon.png";
import avatar22 from "../../assets/images/users/SageMaker Notebooks.png";
import avatar23 from "../../assets/images/users/Databricks Community Edition.png";
import avatar24 from "../../assets/images/users/Kaggle Notebooks.png";
import avatar25 from "../../assets/images/users/Project Jupyter.png";
import avatar26 from "../../assets/images/users/—Pngtree—notebook business writing books_6281400.png";

const projectList = [
    {
        id: 1,
        isDesign1: true,
        img: avatar11,
        imgbgColor: "warning",
        label: "Jupyter Notebook",
        caption: "The most popular open-source notebook for data science and machine learning.You can set up Jupyter Notebook on an AWS EC2 instance.",
        number: "18/42",
        progressBar: "34%",
        subItem: [
            { id: 1, imgFooter: avatar26 },
        ],
        date: "10 Jul, 2021",
        ratingClass: ""
    },
    {
        id: 2,
        isDesign1: true,
        img: avatar12,
        imgbgColor: "danger",
        label: "Google Colab",
        caption: "A cloud-based Jupyter notebook environment with free GPU support.Google Colab is not directly deployable on AWS, but you can use Jupyter on AWS.",
        number: "22/56",
        progressBar: "54%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "18 May, 2021",
        ratingClass: "active"
    },
    {
        id: 3,
        isDesign1: true,
        img: avatar13,
        imgbgColor: "success",
        label: "JupyterLab",
        caption:
            "An interactive development environment that builds upon Jupyter Notebook. You can deploy JupyterLab on AWS EC2 instances.",
        number: "14/20",
        progressBar: "65%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "21 Feb, 2021",
        ratingClass: "active"
    },
    {
        id: 4,
        isDesign1: true,
        img: avatar14,
        imgbgColor: "info",
        label: "Deepnote",
        caption:
            "An online data science notebook with real-time collaboration features. Deepnote is a cloud service and not directly deployable on AWS.",
        number: "20/34",
        progressBar: "78%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "03 Aug, 2021",
        ratingClass: ""
    },
    {
        id: 5,
        isDesign1: true,
        img: avatar15,
        imgbgColor: "warning",
        label: "Azure Notebooks",
        caption: "A cloud-based Jupyter notebook service integrated with Microsoft Azure. Azure Notebooks is a Microsoft service, but you can use Jupyter on AWS.",
        number: "18/42",
        progressBar: "34%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "10 Jul, 2021",
        ratingClass: ""
    },
    {
        id: 6,
        isDesign1: true,
        img: avatar16,
        imgbgColor: "danger",
        label: "Databricks Community Edition",
        caption: " A collaborative Apache Spark-based platform with notebook functionality. You can use Databricks on AWS as a managed service. ",
        number: "22/56",
        progressBar: "54%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "18 May, 2021",
        ratingClass: "active"
    },
    {
        id: 7,
        isDesign1: true,
        img: avatar17,
        imgbgColor: "success",
        label: "RStudio Server",
        caption: "An integrated development environment for R, which includes an R notebook feature.  You can deploy RStudio Server on AWS instances.",
        number: "14/20",
        progressBar: "65%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "21 Feb, 2021",
        ratingClass: "active"
    },
    {
        id: 8,
        isDesign1: true,
        img: avatar18,
        imgbgColor: "info",
        label: "Cocalc",
        caption:
            "An online platform for collaborative data science with Jupyter notebook support. Cocalc provides a dedicated version for AWS deployment.",
        number: "20/34",
        progressBar: "78%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "03 Aug, 2021",
        ratingClass: ""
    },
    {
        id: 9,
        isDesign1: true,
        img: avatar19,
        imgbgColor: "warning",
        label: "Zeppelin",
        caption: "A web-based notebook for data analytics and  visualization, particularly suited for big data. You can deploy Apache Zeppelin on AWS EC2 instances.",
        number: "18/42",
        progressBar: "34%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "10 Jul, 2021",
        ratingClass: ""
    },
    {
        id: 10,
        isDesign1: true,
        img: avatar20,
        imgbgColor: "danger",
        label: "nteract ",
        caption: "A desktop-based Jupyter notebook app with a focus on data visualization. You can deploy nteract on AWS EC2 instances.",
        number: "22/56",
        progressBar: "54%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "18 May, 2021",
        ratingClass: "active"
    },
    {
        id: 11,
        isDesign1: true,
        img: avatar21,
        imgbgColor: "success",
        label: "Polyaxon",
        caption:
            "An open-source platform for building, training, and deploying machine learning models with notebook integration. You can deploy Polyaxon on AWS infrastructure.",
        number: "14/20",
        progressBar: "65%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "21 Feb, 2021",
        ratingClass: "active"
    },
    {
        id: 12,
        isDesign1: true,
        img: avatar22,
        imgbgColor: "info",
        label: "SageMaker Notebooks",
        caption: "Part of Amazon SageMaker, it provides hosted Jupyte  notebooks for machine learning tasks. SageMaker Notebooks is an AWS-managed service.",
        number: "20/34",
        progressBar: "78%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "03 Aug, 2021",
        ratingClass: ""
    },
    {
        id: 13,
        isDesign1: true,
        img: avatar23,
        imgbgColor: "success",
        label: "Domino Data Lab",
        caption:
            "A platform for data science and model deployment, including Jupyter notebook support.  Domino Data Lab offers AWS-based solutions.",
        number: "14/20",
        progressBar: "65%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "21 Feb, 2021",
        ratingClass: "active"
    },
    {
        id: 14,
        isDesign1: true,
        img: avatar24,
        imgbgColor: "info",
        label: "Kaggle Notebooks",
        caption:
            "Part of the Kaggle platform, it offers Jupyter notebook support and access to datasets for competitions. Kaggle Notebooks are not directly deployable on AWS, but you can use Jupyter on AWS.",
        number: "20/34",
        progressBar: "78%",
        subItem: [
            { id: 1, imgFooter: avatar26 },

        ],
        date: "03 Aug, 2021",
        ratingClass: ""
    },
    {
        id: 15,
        isDesign1: true,
        img: avatar25,
        imgbgColor: "info",
        label: "Project Jupyter",
        caption:
            "The organization behind Jupyter notebooks, hostingv various related projects and tools. You can deploy various Jupyter-related tools and notebooks on AWS instances.",
        number: "20/34",
        progressBar: "78%",
        subItem: [
            { id: 1, imgFooter: avatar26 },
        ],
        date: "03 Aug, 2021",
        ratingClass: ""
    },
];
export { projectList };