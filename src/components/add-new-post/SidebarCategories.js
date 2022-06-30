import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  FormInput
} from "shards-react";

const SidebarCategories = ({ title }) => (
  <Card small className="mb-3" margin-Buttom="90">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="px-3 pb-2">
          <FormCheckbox className="mb-1" value="south indian">
            South Indian
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="dnorth indiann">
            North Indian
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="ditaliant">
            Italian
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="chinese">
            Chinese
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="arabian">
            Arabian
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="mexican">
            Mexican
          </FormCheckbox>
        </ListGroupItem>

        <ListGroupItem className="d-flex px-3">
          <InputGroup className="ml-auto">
            <FormInput placeholder="New category" />
            <InputGroupAddon type="append">
              <Button theme="white" className="px-2">
                <i className="material-icons">add</i>
              </Button>
            </InputGroupAddon>
            
          </InputGroup>
        </ListGroupItem>
        <Button outline theme="accent" size="sm">
            <i className="material-icons">save</i>Save
          </Button>
      </ListGroup>
      
    </CardBody>
  </Card>
);

SidebarCategories.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string
};

SidebarCategories.defaultProps = {
  title: "Categories"
};

export default SidebarCategories;
