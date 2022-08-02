import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Quick from "../components/quickrecipe/quick";
//import UserAccountDetails from "../components/user-profile-lite/UserAccountDetails";

const QuickView = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Quick Recipes" subtitle="quicks" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="12">
        <Quick />
      </Col>
    </Row>
  </Container>
);

export default QuickView;
