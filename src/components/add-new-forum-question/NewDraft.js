import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  //CardHeader,
  CardBody,
  Form,
  FormGroup,
  FormInput,
  FormTextarea,
  Button,
  CardFooter
} from "shards-react";
import Swal from "sweetalert2";
import forumQuestion from "../data.json";
class NewForumQuestion extends React.Component{
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setData=this.setData.bind(this);
    this.state={
        forumQuestion,
        id:forumQuestion.id,
        title:forumQuestion.title,
        selForumQuestion:{},
        fmDesc:' ',
        fmQue:''
    }
    this.canvasRef = React.createRef();
    this.setData();
      }
  
  setData=()=>{
    const currentURL = window.location.href;
    const index = currentURL.substring((currentURL.lastIndexOf('/'))+1);
    this.state.forumQuestion.forEach(element => {
      if(element.id==index){
        //debugger
        this.setState({
          selForumQuestion:element
        })
        this.state({selForumQuestion:element})
        this.setState({state:this.state})
      }
    });
    console.log(this.state.selForumQuestion)
  }
  componentDidMount(){
    this.setData()
  }
  handleChange(event){
      this.setState({id: event.target.value});
      this.setState({title: event.target.value});
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
    {/* <CardHeader className="border-bottom">
      <h6 className="m-0">Add New Forum Question</h6>
    </CardHeader> */}

    <CardBody className="d-flex flex-column">
      <Form className="quick-post-form">
      <h6><b>Title</b></h6>
        {/* Title */}
        <FormGroup>
          <FormInput text={this.element.title}/*value={fmQue} onChange={(event)=> this.setState({fmQue: event.target.value})} */ disable placeholder={this.element.title}/>
        </FormGroup>

        {/* Body */}
        <h6><b>Description</b></h6>
        <FormGroup>
          <FormTextarea maxlength="100" text={this.element.description} disable/*value={fmDesc} onChange={(event)=> this.setState({fmDesc: event.target.value})}*//>
        </FormGroup>

        {/* Create Draft */}
        {/* <FormGroup className="mb-0">
          <Button theme="accent" type="submit" onClick={this.message}>
            Add Question
          </Button>
        </FormGroup> */}
      </Form>
      <CardFooter className="cardItem">
          <Button outline theme="accent" size="sm">
            <i className="material-icons">save</i>Save
          </Button>
          </CardFooter>
    </CardBody>
  </Card>
      </>
    )
  }
} 
  


NewForumQuestion.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

NewForumQuestion.defaultProps = {
  title: "Add New Forum Question"
};

export default NewForumQuestion;
