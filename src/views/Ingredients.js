import React from "react";
import { Container, Row, Col } from "shards-react";
import PageTitle from "../components/common/PageTitle";
import Ingredients from "../components/Ingredients/recipes/Ingredients";
//import SidebarActions from "../components/add-new-forum-question/SidebarActions";
class Recipes extends React.Component{
    render(){
        return (
         <Container fluid className="main-content-container px-4 pb-4">
           {/* Page Header */}
           <Row noGutters className="page-header py-4">
             <PageTitle sm="4" title="Ingredients" subtitle="Ingredients" className="text-sm-left" />
           </Row>
       
           <Row>
             {/* Editor */}
             <Col lg="12" md="12">
               {/* <NewForumQuestion/> */}
               <Ingredients/>
             </Col>
       
{/*             
             <Col lg="3" md="12">
               
             </Col> */}
           </Row>
         </Container>
       );
       
       }
}
export default Recipes;