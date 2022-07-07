import React from "react";
//import ReactQuill from "react-quill";
import { Card, CardBody, Form, FormInput } from "shards-react";

//import GoogleMap from "./GoogleMap"
import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Location = () => (
  <Card small className="mb-3">
    <CardBody>
      <Form className="add-new-post">
        <FormInput size="lg" className="mb-3" placeholder="Location of the restaurant" required/>
        {/* <ReactQuill className="add-new-post__editor mb-1" /> */}
        
      </Form>
     
    </CardBody>
    {/* <GoogleMap />
    <br />
    <br /> */}
  </Card>
  
);

export default Location;
