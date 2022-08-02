/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  FormGroup
  //CardFooter
} from "shards-react";
//import GoogleMap from "./GoogleMap";
const Loc ="/new-question"
const SidebarActions = ({ title }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="p-3">
        <FormGroup className="mb-0">
          <Button theme="white" type="submit" >
            <a href={Loc}>Add Question</a>
          </Button>
        </FormGroup>
        </ListGroupItem>
      </ListGroup>
    </CardBody>       
  </Card>
);

SidebarActions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarActions.defaultProps = {
  title: "New Forum Question"
};

export default SidebarActions;
