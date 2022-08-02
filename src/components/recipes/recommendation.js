import React from "react";
//import PropTypes from "prop-types";
import {
  Badge,
  Card,
  CardFooter,
  CardBody,
 Row,
 Col,
  //ListGroupItem,
  //Progress
} from "shards-react";
//import {Divider} from "@material-ui/core"
import {recipe} from "./recipe.json";

class Recommendation extends React.Component{ 
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setData=this.setData.bind(this);
    this.state={
      recipe,
      id:recipe.id,
      title:recipe.title,
      type:recipe.type,
      selRecipe:{},
      loc:"/recipe-view",
    }
    this.setData();
  }
  setData=()=>{
    const currentURL = window.location.href;
    const index = currentURL.substring((currentURL.lastIndexOf('/')+1));
    this.state.recipe.forEach(item => {
      if(item.type==index){
        this.setState({
          selRecipe:item
        })
        this.state.selRecipe=item
        this.setState({state:this.state})
      }
    });
      console.log(this.state.selRecipe)
    
  }
  componentDidMount(){
    this.setData()
  }

  handleChange(event){
    this.setState({type: event.target.value});
    this.setState({title: event.target.value});
}

  render(){
    const loc = this.state
    return(

        <div>
        <Row>
            {
                this.state.selRecipe.map((item,i)=>(
                    
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
  }}

export default Recommendation;
