import React from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import { Link } from 'react-router-dom';

//import images
import avatar1 from "../../../../assets/images/users/avatar-1.jpg";
import avatar4 from "../../../../assets/images/users/avatar-4.jpg";
import avatar3 from "../../../../assets/images/users/avatar-3.jpg";
import avatar2 from "../../../../assets/images/users/avatar-2.jpg";
import avatar6 from "../../../../assets/images/users/avatar-6.jpg";
import avatar7 from "../../../../assets/images/users/avatar-7.jpg";
import avatar8 from "../../../../assets/images/users/avatar-8.jpg";
import image2 from "../../../../assets/images/small/img-2.jpg";
import image3 from "../../../../assets/images/small/img-3.jpg";
import image4 from "../../../../assets/images/small/img-4.jpg";

const UseCases = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div className="text-muted">
                        <h6 className='mb-3 fw-bold text-uppercase'>Data Exploration and Analysis:</h6>
                        <p>Jupyter Notebook is widely used for data exploration and analysis tasks. Data scientists and analysts can load datasets, perform data cleaning, visualize data, and analyze patterns using Python libraries such as Pandas, NumPy, and Matplotlib.</p>

                        <br />

                        <h6 className='mb-3 fw-bold text-uppercase'>Machine Learning and Model Development:</h6>
                        <p>Jupyter Notebook is a preferred environment for developing and prototyping machine learning models. Users can experiment with different algorithms, preprocess data, and train models using popular machine learning libraries like Scikit-Learn, TensorFlow, and PyTorch.</p>

                        <br />

                        <h6 className='mb-3 fw-bold text-uppercase'>Scientific Research:</h6>
                        <p>Scientists and researchers across various domains use Jupyter Notebook to document and share their research findings. It allows for the combination of code, text, and visualizations to present research results effectively.</p>

                        <br />

                        <h6 className='mb-3 fw-bold text-uppercase'>Education and Learning:</h6>
                        <p>Jupyter Notebook is an excellent tool for teaching and learning programming, data science, and machine learning. Instructors can create interactive tutorials and exercises, while students can practice coding and see immediate results.</p>

                        <br />

                        <h6 className='mb-3 fw-bold text-uppercase'>Data Visualization:</h6>
                        <p>Users can create rich data visualizations, including charts, graphs, and interactive dashboards, using libraries like Matplotlib, Seaborn, Plotly, and Bokeh within Jupyter Notebook.</p>

                        <br />

                        <h6 className='mb-3 fw-bold text-uppercase'>Automating Repetitive Tasks:</h6>
                        <p>Jupyter Notebook can be used to automate repetitive data processing or analysis tasks. Users can create reusable scripts and workflows to save time and reduce manual errors.</p>

                        <br />

                        <h6 className='mb-3 fw-bold text-uppercase'>Report Generation:</h6>
                        <p>Jupyter Notebook allows for the generation of reports that combine code execution, visualizations, and explanations. Reports can be exported to various formats such as PDF or HTML for sharing with colleagues or stakeholders.</p>

                        <br />

                        <h6 className='mb-3 fw-bold text-uppercase'>Text and Natural Language Processing:</h6>
                        <p>Jupyter Notebook is valuable for text analysis and natural language processing (NLP) tasks. Users can perform text preprocessing, sentiment analysis, text classification, and entity recognition using NLP libraries like NLTK and spaCy.</p>

                        <br />

                        <h6 className='mb-3 fw-bold text-uppercase'>Financial Analysis:</h6>
                        <p>Professionals in finance and investment use Jupyter Notebook for tasks such as portfolio optimization, risk analysis, and financial modeling. Libraries like QuantLib and pandas-datareader are commonly employed.</p>

                        <br />

                        <h6 className='mb-3 fw-bold text-uppercase'>GIS and Geospatial Analysis:</h6>
                        <p>Jupyter Notebook supports geospatial data analysis and visualization. Users can work with geographic data, create maps, and perform spatial analysis using libraries like GeoPandas and Folium.</p>

                        <br />

                        <h6 className='mb-3 fw-bold text-uppercase'>Biology and Bioinformatics:</h6>
                        <p>Researchers in biology and bioinformatics use Jupyter Notebook for DNA sequencing analysis, protein structure prediction, and other computational biology tasks. Bioinformatics libraries such as Biopython are often utilized.</p>

                        <br />

                        <h6 className='mb-3 fw-bold text-uppercase'>Web Scraping and Data Extraction:</h6>
                        <p>Jupyter Notebook is used for web scraping and data extraction tasks. Users can write Python code to scrape data from websites, parse HTML/XML, and store data for further analysis.</p>

                        <br />
                    </div>
                </CardBody>

            </Card>
        </React.Fragment>
    );
};

export default UseCases;