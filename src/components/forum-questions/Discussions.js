import React from "react";
import PropTypes from "prop-types";
import Moment from "moment";
import {forumQuestion} from "../data.json";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  FormGroup,
  FormInput,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";
import { Modal} from 'react-bootstrap';
//import { forEach } from "lodash";
//import { generatePath } from "react-router-dom";
//import { useState } from "react";
//import { useParams } from "react-router-dom";
//import ForumQuestion from "../../views/AddNewForumQuestion";
//import UserAccountDetails from "../user-profile-lite/UserAccountDetails";

class Discussions extends React.Component{
  constructor(props){
    // detail/{id}
    super(props);
    this.state={
      show:false , 
      loc:"/details",
      // edit:"/new-draft",
      forumQuestion,
    }
    // this.fetchDetail(props.id)
    // const que = ()=>{
    //   //const{id} = useParams();
    //   //console.log(id);
      
    //   return(
    //     <>
    //       <p>{forumQuestion.title}</p>
    //       <p>{forumQuestion.description}</p>
    //     </>
    //   )
    // };
    //   const Home = ()=>{
    //     const [id, setId]=useState();
    //     //const history = useHistory();
      
    //     const handleProceed = (e) =>{
    //       id.push(generatePath("/forumQuestion/:id",{id}))
    //     };
    //     return(
    //       <div>
    //       <div>
    //         {forumQuestion.map((que,i)=>(
    //           <button
    //         key={i}
    //         onClick={(e) => {
    //           setId(que.id);
    //         }}
    //       >
    //         {que.title}
    //       </button>
    //         ))}
    //       </div>
    //       <Button onClick={handleProceed}>
    //       clickme
    //       </Button>
    //       </div>
    //     )
    //   }
    }
    // fetchDetail = id => {
    //   forEach(this.state.forumQuestion )
    // }

    

    handleModal(){  
      this.setState({show:!this.state.show})  
    }  
render(){
  const {forumQuestion,loc} = this.state
  return(
    <>
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
    <div align="right">
    <Button theme="white" type="submit">
            <a href={"/new-question"}>Add Question</a>
          </Button>
    </div>
    </CardHeader>

    <CardBody className="p-0">
    
      {forumQuestion.map((fmQue,idx ) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
           {/* <img src={fmQue.author.image} alt={fmQue.author.name} /> */}
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={loc+"/"+fmQue.id}>
                {fmQue.title}
              </a>{" "}
              on{" "}
              <span className="text-mutes">- {Moment(fmQue.createdAt).format('MMM Do YYYY')}</span>
              {/* style={{display:"flex",justifyContent:"flex-end"}} */}
              
              <Button theme="white">
             
                  <span className="text-light">
                   <i className="material-icons">more_vert</i>
                   
                  </span>{"       "}
                  <a href={loc+"/"+fmQue.id}> Edit</a> 
                 
                </Button>
               
            </div>
            
            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{fmQue.description}</p>
            <p className="m-0 my-1 mb-2 text-mutated"><i>Created by-</i>{fmQue.comments.map((cmnt)=>(<span>{cmnt.user.name}</span>))}</p>
            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                {/* <Button theme="white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                  Approve
                </Button> */}
                {/* <Button theme="white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{" "}
                  Reject
                </Button> */}
                
              </ButtonGroup>
            </div>
          </div>
        </div>
      ))}
    </CardBody>

    {/* use pipe for date formating */}


    <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit" onClick={()=>this.handleModal()}>
            Add Comments
          </Button>
          <Modal show={this.state.show} onHide={()=>this.handleModal()}>  
          <Modal.Header closeButton>Write your comment here.</Modal.Header>  
          <Modal.Body><FormGroup>
            <FormInput placeholder="Comment here."/>
          </FormGroup></Modal.Body>  
          <Modal.Footer>  
            <Button style={{backgroundColor:"red"}} onClick={()=>this.handleModal()}>Close</Button>  
            <Button onClick={()=>this.handleModal()}>Save</Button>  
          </Modal.Footer>  
        </Modal>  
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
};

export default Discussions;
