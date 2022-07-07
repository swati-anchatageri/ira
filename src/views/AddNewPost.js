import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
//import Location from "../components/add-new-post/Location";
import SidebarActions from "../components/add-new-post/SidebarActions";
import SidebarCategories from "../components/add-new-post/SidebarCategories";

class AddNewPost extends React.Component{
  // useState
  // useEffects to pass from parent to child
  // all functions will be constant
render(){
 return (
  <Container fluid className="main-content-container px-4 pb-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Add New Post" subtitle="Blog Posts" className="text-sm-left" />
    </Row>

    <Row>
      {/* Editor */}
      <Col lg="9" md="12">
        <Editor />
        {/* <Location /> */}
      </Col>

      {/* Sidebar Widgets */}
      <Col lg="3" md="12">
        <SidebarActions />
        <br />
        <br />
        <br />
        <SidebarCategories />
      </Col>
    </Row>
  </Container>
);

}
}
export default AddNewPost;
