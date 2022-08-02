import React from "react";
//import PropTypes from "prop-types";
//import Moment from "moment";
import {recipe} from "./recipe.json";
import {
    Badge,
  Card,
  //CardHeader,
  CardBody,
  CardFooter,
  //CardFooter,
  Col,
  Row
} from "shards-react";
//import { Modal} from 'react-bootstrap';
class Recipe extends React.Component{
  constructor(props){
    
    super(props);
    this.state={
      
      loc:"/recipe-view",
      loc2:"/recommendation",
      recipe
    }
}
render(){
    const {loc,loc2}=this.state
    return(

        <div>
        <Row>
            {
                this.state.recipe.map((item,i)=>(
                    
                    <Col lg="4" md="6" sm="12" className="mb-4" key={i}>
              <Card small className="card-post card-post--1">
                <div
                  className="card-post__image"
                  style={{ backgroundImage: `url(${item.img})` }}
                >   
                <Badge
                    pill
                    className={`card-post__category bg-${item.cat}`}

                  >{" "}</Badge>
                </div>
                
                <CardBody>
                  <h5 className="card-title">
                    <a href={loc+'/'+item.id} className="text-fiord-blue">
                      {item.title}
                    </a>
                  </h5>
                  <h6><b>
                  <a href={loc2+'/'+item.type} className="text-fiord-blue">
                      Category: {item.type}
                    </a></b>
                  </h6>
                </CardBody>
                <CardFooter>
               <p> <span className="card-text d-inline-block mb-3"><i class="material-icons">av_timer</i>{item.ctime} mins</span>
               <span className="card-text d-inline-block mb-3" style={{float:"right"}}><i class="material-icons">battery_full</i>{item.cal}</span></p>
                </CardFooter>
              </Card>
            </Col>
           
                ))
            }
            </Row>
        </div>
    )
}
}
export default Recipe;