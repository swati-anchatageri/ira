import React from "react";
import PropTypes from "prop-types";
import PageTitle from "../components/common/PageTitle";
import {  Container, Row } from "shards-react";
import {
  Card,
  //CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";
import Swal from "sweetalert2";


class NewQuestion extends React.Component{
  constructor(props){
    super(props);
      this.state={
        fmQue:" ",
        fmDesc:" "
        
      }
  }
  addForumQuestion = () => {
    console.log(this.state.fmQue)
    console.log(this.state.fmDesc)
    let temp = this.state.fmQue
    let temp2 = this.state.fmDesc
    this.setState({
      fmQue: temp,
      fmDesc: temp2
    })
  }

  message = () =>{
    let payload = {
      fmQue: this.state.fmQue,
      fmDesc: this.state.fmDesc
     
    }
  
    console.log(payload)
    Swal.fire({
      icon:'success',
      title:'Success',
      text:'Successfully added new Forum Question',
      // footer:'<button>Ok</button>'
    })
  }

  render(){
   // const [fmQue,fmDesc]=this.state
    return(
      <>
      <Container fluid className="main-content-container px-4 pb-4">
      <Row noGutters className="page-header py-4">
             <PageTitle sm="4" title="Add New Forum Questions" subtitle="Forum Questions" className="text-sm-left" />
           </Row>
        <Card small className="h-100">
    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form">
      
        {/* Title */}
        <h6><b>Title</b></h6>
        <FormGroup>
          <FormInput placeholder="Forum Question" />
        </FormGroup>
        {/* Body */}
        <h6><b>Description</b></h6>
        <FormGroup>
          <FormTextarea maxlength="100"  placeholder="Description" />
        </FormGroup>
        {/* Create Draft */}
        <FormGroup className="mb-0">
          <Button theme="accent" type="submit" onClick={this.message}>
            Add Question
          </Button>
        </FormGroup>
      </Form>
    </CardBody>
  </Card>
  </Container>
      </>
    )
  }
} 
  


NewQuestion.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

NewQuestion.defaultProps = {
  title: "Add New Forum Question"
};

export default NewQuestion;
