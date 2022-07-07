import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button
} from "shards-react";
import Swal from "sweetalert2";


class NewForumQuesion extends React.Component{
  constructor(props){
    super(props)
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
        <Card small className="h-100">
    {/* Card Header */}
    <CardHeader className="border-bottom">
      <h6 className="m-0">Add New Forum Question</h6>
    </CardHeader>

    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form">
        {/* Title */}
        <FormGroup>
          <FormInput /*value={fmQue} onChange={(event)=> this.setState({fmQue: event.target.value})} */placeholder="Forum Question" />
        </FormGroup>

        {/* Body */}
        <FormGroup>
          <FormTextarea maxlength="100"  placeholder="Description" /*value={fmDesc} onChange={(event)=> this.setState({fmDesc: event.target.value})}*//>
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
      </>
    )
  }
} 
  


NewForumQuesion.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

NewForumQuesion.defaultProps = {
  title: "Add New Forum Question"
};

export default NewForumQuesion;
