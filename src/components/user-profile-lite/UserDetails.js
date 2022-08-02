import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  //Button,
  ListGroup,
  ListGroupItem,
  //Progress
} from "shards-react";

const UserDetails = ({ userDetails }) => (
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="rounded-circle"
          src={userDetails.avatar}
          alt={userDetails.name}
          width="110"
        />
      </div>
      <h4 className="mb-0">{userDetails.name}</h4>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
          <strong className="text-muted d-block mb-2">
            {userDetails.performanceReportTitle}
          </strong>
        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <strong className="text-muted d-block mb-2">
          {userDetails.metaTitle}
        </strong>
        <span>{userDetails.metaValue}</span>
      </ListGroupItem>
    </ListGroup>
  </Card>
);

UserDetails.propTypes = {
  /**
   * The user details object.
   */
  userDetails: PropTypes.object
};

UserDetails.defaultProps = {
  userDetails: {
    name: "Swati Anchatageri",
    avatar: require("./../../images/avatars/0.jpg"),
    metaTitle: "Description",
    metaValue:
      "I know that certain foods can helps to lose weight and lower risk for disease. Discovering my  path to better health and nutrition. it is necessary to know certain nutrients, vitamins, and minerals naturally found in food can improve our health and help us live a long, active life."
  }
};

export default UserDetails;