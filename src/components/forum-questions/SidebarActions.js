/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import PropTypes from "prop-types";
import { Modal} from 'react-bootstrap';
import {
  Card,
  CardHeader,
  FormGroup,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  FormInput,
  //CardFooter
} from "shards-react";
//import GoogleMap from "./GoogleMap";

class SidebarActions extends React.Component {
  constructor(){  
    super();  
    this.state={  
      show:false  
    }  
  }  
  handleModal(){  
    this.setState({show:!this.state.show})  
  }  
  render(){
    return(
      <>
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">Comments</h6>
    </CardHeader>

    <CardBody className="p-0">
    {/* <GoogleMap /> */}
      <ListGroup flush>
        <ListGroupItem className="p-3">
        
        
          {/* <span className="d-flex mb-2">
            <i className="material-icons mr-1">flag</i>
            <strong className="mr-1">Status:</strong> Draft{" "}
            <a className="ml-auto" href="#">
              Edit
            </a>

          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">visibility</i>
            <strong className="mr-1">Visibility:</strong>{" "}
            <strong className="text-success">Public</strong>{" "}
            <a className="ml-auto" href="#">
              Edit
            </a>
          </span>
          <span className="d-flex mb-2">
            <i className="material-icons mr-1">calendar_today</i>
            <strong className="mr-1">Schedule:</strong> Now{" "}
            <a className="ml-auto" href="#">
              Edit
            </a>
          </span>
          <span className="d-flex">
            <i className="material-icons mr-1">score</i>
            <strong className="mr-1">Readability:</strong>{" "}
            <strong className="text-warning">Ok</strong>
          </span>
        </ListGroupItem> */}
        {/* <ListGroupItem className="d-flex px-3 border-0"> */}
        <FormGroup className="mb-0">
          <Button theme="white" type="submit" >
            Add comment
          </Button>
          <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
          <Modal.Header closeButton>Write your comment here.</Modal.Header>  
          <Modal.Body><FormGroup>
            <FormInput placeholder="Comment here."/>
          </FormGroup></Modal.Body>  
          <Modal.Footer>  
            <Button onClick={()=>this.handleModal()}>Close</Button>  
            <Button onClick={()=>this.handleModal()}>Save</Button>  
          </Modal.Footer>  
        </Modal>  
        </FormGroup>

        </ListGroupItem>
      </ListGroup>
    </CardBody>

    
        {/* <CardFooter className="cardItem">
          <Button outline theme="accent" size="sm">
            <i className="material-icons">save</i>Save
          </Button>
          </CardFooter> */}
          {/* <Button theme="accent" size="sm" className="ml-auto">
            <i className="material-icons">file_copy</i> Publish
          </Button> */}


       
  </Card>
  </>
    )
  }
}


SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarActions.defaultProps = {
  title: "Comments"
};

export default SidebarActions;
