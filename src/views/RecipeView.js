import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
//import UserDetails from "../components/user-profile-lite/UserDetails";
import RecipeSteps from "../components/recipes/RecipeSteps";
import RecipeDetails from "../components/recipes/RecipeDetails";

const RecipeView = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Recipe Details" subtitle="Recipe" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="4">
        <RecipeDetails />
      </Col>
      <Col lg="8">
        <RecipeSteps/>
      </Col>
    </Row>
  </Container>
);

export default RecipeView;
