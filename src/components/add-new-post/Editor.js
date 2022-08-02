import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

class Editor extends React.Component{

  constructor(props){
    console.log(props)
    super(props);
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleDescChange = this.handleDescChange.bind(this)
    this.state={
      editor: this.props.passJson
    }

  }

  handleTitleChange = (event)=> {
    // debugger
    let k = event.target.value
    console.log(k)
    this.setState(prevState=>({
      editor:{
        ...prevState.editor,
        title: k
      }

    }))
    this.props.parentCallback(this.state.editor)
  }
  handleDescChange = (event)=> {
    // debugger
    let k = event
    console.log(k)
    this.setState(prevState=>({
      editor:{
        ...prevState.editor,
        description: k
      }

    }))
    this.props.parentCallback(this.state.editor)
  }
  handleLocChange = (event)=> {
    // debugger
    let d = event.target.value
    console.log(d)
    this.setState(prevState=>({
      editor:{
        ...prevState.editor,
        location: d
      }

    }))
    this.props.parentCallback(this.state.editor)
  }

  render (){
    return (
      <>
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
      <h6><b>Title</b></h6>
        <FormInput size="lg" className="mb-3" id="title" placeholder="Your Post Title" onChange={this.handleTitleChange} required />
       
        <h6><b>Description</b></h6>
        <ReactQuill className="add-new-post__editor mb-1" placeholder="Description" onChange={this.handleDescChange} required/>
       
        <h6><b>Location</b></h6>
        <FormInput size="lg" className="mb-3" id="title" placeholder="Location of the Restaurant" onChange={this.handleLocChange}required />
      </Form>
    </CardBody>
  </Card>
  </>
    )
  }
}

export default Editor;
