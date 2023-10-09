import React, { useState } from "react";
import { Col, Container, Row } from "reactstrap";
import Widget from "./Widgets";

import Section from "./Section";

import Recent from './Recent'
import TileBox from "./TileBox";

const DashboardEcommerce = () => {
  document.title = "AI/ML Solutions | Plaine - Unleashing Innovation with Artificial Intelligence";

  const [rightColumn, setRightColumn] = useState(true);
  const toggleRightColumn = () => {
    setRightColumn(!rightColumn);
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col>
              <div className="h-100">
                <Section rightClickBtn={toggleRightColumn} />
                <Row>
                 <Widget />
                </Row>
                <Row>
                  <Col xl={8}>
                    <Recent />
                     {/* <Revenue /> */}
                  </Col>
                  {/* <SalesByLocations /> */}
                </Row>
                <Row>
                  <TileBox/>
                  {/* <BestSellingProducts />
                  <TopSellers /> */}
                </Row>
                {/* <Row>
                  <StoreVisits />
                  <RecentOrders />
                </Row> */}
              </div>
            </Col>
            {/* <RecentActivity rightColumn={rightColumn} hideRightColumn={toggleRightColumn} /> */}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardEcommerce;
