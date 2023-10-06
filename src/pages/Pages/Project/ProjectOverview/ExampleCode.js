import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, Col, DropdownItem, DropdownMenu, DropdownToggle, Row, Table, UncontrolledDropdown } from 'reactstrap';

const ExampleCode = () => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <div className="text-muted">
                        <h6 className="mb-3 fw-bold text-uppercase"># Example Python code for data analysis</h6>
                        <p>import pandas as pd<br />import matplotlib.pyplot as plt</p>

                        <ul className="ps-4 vstack gap-2">
                            <li>data = pd.read_csv('data.csv')</li>
                            <li>plt.scatter(data['x'], data['y'])</li>
                            <li>plt.xlabel('X-axis')</li>
                            <li>plt.ylabel('Y-axis')</li>
                            <li>plt.title('Scatter Plot')</li>
                            <li>plt.show()</li>
                        </ul>
                    </div>
                </CardBody>
            </Card>
        </React.Fragment>
    );
};

export default ExampleCode;