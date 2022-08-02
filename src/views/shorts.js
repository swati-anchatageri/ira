import React from "react";
import { Container, Row, Col } from "shards-react";
import Short from "../components/shorts/short";
import PageTitle from "../components/common/PageTitle";
//import Share from "../components/shorts/share"
class ForumQuestion extends React.Component{
    render(){
        return (
         <Container fluid className="main-content-container px-4 pb-4">
           {/* Page Header */}
           <Row noGutters className="page-header py-4">
             <PageTitle sm="4" title="Inshorts" subtitle="shorts" className="text-sm-left" />
           </Row>
       
           <Row>
            
             <Col lg="12" md="12">
               <Short/>
               
             </Col>
       
            
             {/* <Col lg="3" md="12">
			 <Share/>
             </Col> */}
           </Row>
         </Container>
       );
       
       }
}
export default ForumQuestion;