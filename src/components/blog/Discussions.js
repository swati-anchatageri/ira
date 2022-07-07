import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

class Discussions extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loc:"/new-draft",
      forumQuestion: [
        {
        title:"What are the best food for summer?",
        createdAt: "2022-07-10",
        description: "Test Description",
        comments: [
          {
            user: {
              id: 1,
              name: "Tom"
            },
            comment: "This is a test comment"
          }
        ]
      },
      {
        title: "Forum Question",
        createdAt: "2022-07-10",
        description: "Test Description",
        comments: [
          {
            user: {
              id: 2,
              name: "Tom"
            },
            comment: "This is a test comment"
          }
        ]
      },
      {
        title: "Forum Question",
        createdAt: "2022-07-10",
        description: "Test Description",
        comments: [
          {
            user: {
              id: 3,
              name: "Tom"
            },
            comment: "This is a test comment"
          }
        ]
      },
      {
        title: "Forum Question",
        createdAt: "2022-07-10",
        description: "Test Description",
        comments: [
          {
            user: {
              id: 4,
              name: "Tom"
            },
            comment: "This is a test comment"
          }
        ]
      }
      
      ]
    }
    }
render(){
  const {forumQuestion,loc} = this.state
  return(
    <>
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">forumQuestion</h6>
    </CardHeader>

    <CardBody className="p-0">
    
      {forumQuestion.map((fmQue, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
           {/* <img src={fmQue.author.image} alt={fmQue.author.name} /> */}
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={fmQue.title}>
                {fmQue.title}
              </a>{" "}
              {/* on{" "}
              <a className="text-secondary" href={fmQue.title}>
                {fmQue.title}
              </a> */}
              <span className="text-mutes">- {fmQue.createdAt}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{fmQue.description}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button theme="white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                  Approve
                </Button>
                {/* <Button theme="white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{" "}
                  Reject
                </Button> */}
                <Button theme="white">
                  <span className="text-light">
                   <i className="material-icons">more_vert</i>
                   
                  </span>{" "}
                  <a href={loc}> Edit</a> 
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      ))}
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit">
            View All Comments
          </Button>
        </Col>
      </Row>
    </CardFooter>
  </Card>

    </>
  )
}
  }



Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

Discussions.defaultProps = {
  title: "Forum Questions",
  // forumQuesion: [
  //   {
  //   "title": "Forum Question",
  //   "createdAt": "2022-07-10",
  //   "description": "<p>Test Description<p>",
  //   "comments": [
  //     {
  //       "user": {
  //         "id": 1,
  //         "name": "Tom"
  //       },
  //       "comment": "This is a test comment"
  //     }
  //   }
  


  //   {
  //     id: 2,
  //     date: "4 days ago",
  //     author: {
  //       image: require("../../images/avatars/2.jpg"),
  //       name: "John Doe",
  //       url: "#"
  //     },
  //     post: {
  //       title: "Hello World!",
  //       url: "#"
  //     },
  //     body: "After the avalanche, it took us a week to climb out. Now..."
  //   },
  //   {
  //     id: 3,
  //     date: "5 days ago",
  //     author: {
  //       image: require("../../images/avatars/3.jpg"),
  //       name: "John Doe",
  //       url: "#"
  //     },
  //     post: {
  //       title: "Hello World!",
  //       url: "#"
  //     },
  //     body: "My money's in that office, right? If she start giving me..."
  //   }
  // ]
};

export default Discussions;
