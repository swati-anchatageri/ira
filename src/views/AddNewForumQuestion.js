import React from "react";
import { Container, Row, Col } from "shards-react";
import Details from "./Details";
import PageTitle from "../components/common/PageTitle";
import NewForumQuestion from "../components/add-new-forum-question/NewDraft";
//import SidebarActions from "../components/add-new-forum-question/SidebarActions";
class ForumQuestion extends React.Component{
    render(){
        return (
         <Container fluid className="main-content-container px-4 pb-4">
           {/* Page Header */}
           <Row noGutters className="page-header py-4">
             <PageTitle sm="4" title="Edit Forum Questions" subtitle="Forum Questions" className="text-sm-left" />
           </Row>
       
           <Row>
             {/* Editor */}
             <Col lg="12" md="12">
               <NewForumQuestion/>
               
             </Col>
       
            
             <Col lg="3" md="12">
               <Details/>
             </Col>
           </Row>
         </Container>
       );
       
       }
}
export default ForumQuestion;