import React from 'react';
import { Container } from 'reactstrap';
import Section from './Section';


const ProjectOverview = () => {
    document.title="AI/ML Solutions | Plaine - Unleashing Innovation with Artificial Intelligence";

    return (
        <React.Fragment>
            <div className="page-content">                
                <Container fluid>                    
                <Section />
                </Container>
            </div>
        </React.Fragment>
    );
};

export default ProjectOverview;