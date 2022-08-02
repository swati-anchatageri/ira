import React from "react";
import { Container, Row, Col } from "shards-react";
import "../../node_modules/video-react/dist/video-react.css";
import PageTitle from "../components/common/PageTitle";
import Chat from "../components/chat/chat";
import Webinar from "../components/webinar/webinar";

const ChatView = () => (
  <Container fluid className="main-content-container px-4">
    <Row noGutters className="page-header py-4">
      <PageTitle title="Webinar And Chat" subtitle="Webinar" md="12" className="ml-sm-auto mr-sm-auto" />
    </Row>
    <Row>
    <Col lg="8">
        <Webinar />
      </Col>
      <Col lg="4">
        <Chat />
      </Col>
    </Row>
  </Container>
);

export default ChatView;
