import React from "react";
import {
  Form,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormInput
} from "shards-react";
import {Button, Icon} from 'semantic-ui-react';
//import Translate from "../../Translation/Trans";

export default () => (
  <Form className="main-navbar__search w-100 d-none d-md-flex d-lg-flex">
    <InputGroup seamless className="ml-3">
      <InputGroupAddon type="prepend">
        <InputGroupText>
          <i className="material-icons">search</i>
        </InputGroupText>
      </InputGroupAddon>
      <FormInput
        className="navbar-search"
        placeholder="Search for something..."
        
      />
      <Button
                            color="blue"
                            size="large"
                            onClick='/translation'
                        >
                            <Icon name='translate' />
                            Translate</Button>
    </InputGroup>
  </Form>
);
