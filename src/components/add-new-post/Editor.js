import React from "react";
import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

class Editor extends React.Component{

  render (){
    return (
      <>
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
      <h6><b>Title</b></h6>
        <FormInput size="lg" className="mb-3" id="title" placeholder="Your Post Title" onChange={(event)=> this.setState({title: event.target.value})} required />
       
        <h6><b>Description</b></h6>
        <ReactQuill className="add-new-post__editor mb-1" required/>
       
        <h6><b>Location</b></h6>
        <FormInput size="lg" className="mb-3" id="title" placeholder="Location of the Restaurant" onChange={(event)=> this.setState({location: event.target.value})}required />
      </Form>
    </CardBody>
  </Card>
  </>
    )
  }
}

export default Editor;
