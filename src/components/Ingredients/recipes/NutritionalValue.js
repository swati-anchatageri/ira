import React from "react";
//import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
  Form,
} from "shards-react";
import {Divider} from '@material-ui/core'
import {ingredients} from './Ingredients.json'

class NutritionalValue extends React.Component{
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
  <Card small className="mb-4">
    <CardHeader className="border-bottom">
      <h4 className="m-0">Nutritional Values Per 100 Grams</h4>
    </CardHeader>
    <ListGroup flush>
      <ListGroupItem className="p-3">
        <Row>
          <Col>
            <Form>
              <Row form>
                {/* First Name */}
                <Col md="6" className="form-group">
                  <h6 htmlFor="feFirstName">Calories: {" "}<b>{this.state.selRecipe.calory}</b></h6>
                  <Divider/>
                  <h6 htmlFor="feFirstName">Carbohydrates: {" "}<b>{this.state.selRecipe.carbs}</b></h6>
                  <Divider/>
                  <h6 htmlFor="feFirstName">Total Fat: {" "}<b>{this.state.selRecipe.fat}</b></h6>
                  <Divider/>
                  <h6 htmlFor="feFirstName">Saturated Fat: {" "}<b>{this.state.selRecipe.sfat}</b></h6>
                  <Divider/>
                  <h6 htmlFor="feFirstName">Calcium: {" "}<b>{this.state.selRecipe.calcium}</b></h6>
                  <Divider/>
                  <h6 htmlFor="feFirstName">Proteins: {" "}<b>{this.state.selRecipe.protein}</b></h6>
                  <Divider/>
                  <h6 htmlFor="feFirstName">Cholesterol: {" "}<b>{this.state.selRecipe.cholesterol}</b></h6>
                  <Divider/>
                  <h6 htmlFor="feFirstName">Iron: {" "}<b>{this.state.selRecipe.iron}</b></h6>
                  <Divider/>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </ListGroupItem>
    </ListGroup>
  </Card>
);
}
}


NutritionalValue.defaultProps = {
  title: "Nutritional Values"
};

export default NutritionalValue;
