import React from "react";
//import PropTypes from "prop-types";
import {
  Badge,
  Card,
  CardHeader,
  //Button,
  ListGroup,
  ListGroupItem,
  Progress
} from "shards-react";
import {Divider} from "@material-ui/core"
import {recipe} from "./recipe.json";

class RecipeDetails extends React.Component{ 
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setData=this.setData.bind(this);
    this.state={
      recipe,
      id:recipe.id,
      title:recipe.title,
      selRecipe:{}
    }
    this.setData();
  }
  setData=()=>{
    const currentURL = window.location.href;
    const index = currentURL.substring((currentURL.lastIndexOf('/')+1));
    this.state.recipe.forEach(item => {
      if(item.id==index){
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
    this.setState({id: event.target.value});
    this.setState({title: event.target.value});
}

  render(){
    
    return(
  <Card small className="mb-4 pt-3">
    <CardHeader className="border-bottom text-center">
      <div className="mb-3 mx-auto">
        <img
          className="sqare"
          src={this.state.selRecipe.img}
          alt={this.state.selRecipe.title}
          width="300"
        />
      </div>
      <h4 className="mb-0">{this.state.selRecipe.title}</h4>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="px-4">
        <div className="progress-wrapper">
        <h6>Time Taken</h6>
          {/* <strong className="text-muted d-block mb-2">
            {this.state.selRecipe.time} mins
          </strong> */}
          <Progress multi>
      <Progress bar max={this.state.selRecipe.time} value={this.state.selRecipe.ptime} />
      <Progress bar max={this.state.selRecipe.ctime} theme="warning" value={this.state.selRecipe.ctime} />
    </Progress>
            <span className="progress-value">
              {this.state.selRecipe.time} mins
            </span>
            <div>
              <Badge pill className="primary">
              {" "}
              </Badge><span>  Preperation time   {this.state.selRecipe.ptime} mins</span>
            </div>
            <div><Badge pill style={{backgroundColor:"#F4C430"}}>
              {" "}
              </Badge><span>  Cooking time  {this.state.selRecipe.ctime} mins</span></div>

        </div>
      </ListGroupItem>
      <ListGroupItem className="p-4">
        <h5 className="dark">
          <b>Ingredients</b>
        </h5>
        <strong>{this.state.selRecipe.ingredients.map((item)=>{return<div><li>{item}</li><Divider/></div>})}</strong>
      </ListGroupItem>
    </ListGroup>
  </Card>
);
  }}

export default RecipeDetails;
