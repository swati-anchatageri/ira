import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Discussions from "../components/forum-questions/Discussions"
//import Comments from "../components/forum-questions/SidebarActions"
//import NewQuestion from "../components/add-new-forum-question/SidebarActions";
class ForumQuestion extends React.Component{
    render(){
        return (
         <Container fluid className="main-content-container px-4 pb-4">
           {/* Page Header */}
           <Row noGutters className="page-header py-4">
             <PageTitle sm="4" title="Forum Questions" subtitle="Forum Questions" className="text-sm-left" />
           </Row>
       
           <Row>
             {/* Editor */}
             <Col lg="12" md="12">
               <Discussions/>
               
             </Col>
       
            
             {/* <Col lg="3" md="12">
               <Comments/>
               <NewQuestion/>
             </Col> */}
           </Row>
         </Container>
       );
       
       }
}
export default ForumQuestion;