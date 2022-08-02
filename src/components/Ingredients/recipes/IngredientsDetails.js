import React from "react";
//import PropTypes from "prop-types";
import {
  //Badge,
  Card,
  CardFooter,
  CardHeader,
  //Button,
  //ListGroup,
 // ListGroupItem,
 // Progress
} from "shards-react";
//import {Divider} from "@material-ui/core"
import {ingredients} from "./Ingredients.json";

class IngredientDetails extends React.Component{ 
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.setData=this.setData.bind(this);
    this.state={
      ingredients,
      id:ingredients.id,
      title:ingredients.title,
      selRecipe:{}
    }
    this.setData();
  }
  setData=()=>{
    const currentURL = window.location.href;
    const index = currentURL.substring((currentURL.lastIndexOf('/')+1));
    this.state.ingredients.forEach(item => {
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
    <CardFooter>
    <span className="card-text d-inline-block mb-3">Category : {this.state.selRecipe.category}</span>
    </CardFooter>
  </Card>
);
  }}

export default IngredientDetails;
