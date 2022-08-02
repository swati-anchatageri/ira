import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
//import UserDetails from "../components/user-profile-lite/UserDetails";
import IngredientDetails from "../components/Ingredients/recipes/IngredientsDetails";
import NutritionalValue from "../components/Ingredients/recipes/NutritionalValue";

const IngredientsView = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Ingredient Details" subtitle="Ingredients" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
      <Col lg="4">
        <IngredientDetails />
      </Col>
      <Col lg="8">
        <NutritionalValue/>
      </Col>
    </Row>
  </Container>
);

export default IngredientsView;
