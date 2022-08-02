import React,{Component,} from "react";
import PropTypes from "prop-types";
import {
  CardHeader,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  FormInput
} from  "shards-react";

import Swal from "sweetalert2";
import { toUpper } from "lodash";


class SidebarCategories extends Component{
  constructor(props) {
    super(props);
    this.addCategory = this.addCategory.bind(this)
    this.state = {
      category: [
        {
          value: "south-indian",
          title: "SOUTH INDIAN"
        },
        {
          value: "north-indian",
          title: "NORTH INDIAN"
        },
        {
          value: "italian",
          title: "ITALIAN"
        },
        {
          value: "chinese",
          title: "CHINESE"
        },
        {
          value: "arabian",
          title: "ARABIAN"
        },
        {
          value: "mexican",
          title: "MEXICAN"
        },
        {
          value:'spanish',
          title:'SPANISH'
        }
      ],
      categoryText: '',
    }

  }

  addCategory = () => {
    console.log(this.state.categoryText)
    let temp = this.state.category
    temp.push({
      value : this.state.categoryText,
      title : toUpper(this.state.categoryText)
    })
    this.setState({
      category: temp
    })
  }

  message = () =>{
    let payload = {
      categoryText: this.state.categoryText,
     
    }
  
    console.log(payload)
    Swal.fire({
      icon:'success',
      title:'Success',
      text:'Successfully added new Blog',
      // footer:'<button>Ok</button>'
    })
  }

  render(){
    const {category, categoryText} = this.state
    return(
          <>
          <CardHeader className="border-bottom">
          <h6 className="m-0">Category</h6>
          </CardHeader>
            {
              category.map((cat) =>{
                return (
                  <div>
                  
                           {/* <Card small className="mb-3" margin-Buttom="90">
                           <CardBody className="p-0">*/}
                           <ListGroup flush> 
                            <ListGroupItem className="px-3 pb-2" value="{cat.value}">
                            <FormCheckbox className="mb-1" >
                            {cat.title}
                          </FormCheckbox>
                          </ListGroupItem>
                           </ListGroup>
                          {/*</CardBody>
                          </Card> */}
                  </div>
                        
                  
                )
              }
              )
            }
            <ListGroupItem className="d-flex px-3">
          <InputGroup className="ml-auto" >
            <FormInput value={categoryText} onChange={(event)=> this.setState({categoryText: event.target.value})} placeholder="New category"  />
            <InputGroupAddon type="append" id="append" >
              <Button theme="white" className="px-2" onClick={this.addCategory}>
                <i className="material-icons">add</i>
              </Button>
              <br/>
            </InputGroupAddon>
            {/* <h2>NewCat:{NewCatagory}</h2> */}
            
          </InputGroup>
        </ListGroupItem>
        <ListGroupItem className="d-flex px-3">
        <Button outline theme="accent" size="md" onClick={this.message}>
            <i className="material-icons">save</i>Save
          </Button>
          </ListGroupItem>
    
          </>
    );
  }
}


/* // const SidebarCategories = ({ title }) => (
//   <Card small className="mb-3" margin-Buttom="90">
//     <CardHeader className="border-bottom">
//       <h6 className="m-0">{title}</h6>
//     </CardHeader>
//     <CardBody className="p-0">
//       <ListGroup flush>
//         <ListGroupItem className="px-3 pb-2">
//           <FormCheckbox className="mb-1" value="south-indian">
//             South Indian
//           </FormCheckbox>
//           <FormCheckbox className="mb-1" value="north-indian">
//             North Indian
//           </FormCheckbox>
//           <FormCheckbox className="mb-1" value="italian">
//             Italian
//           </FormCheckbox>
//           <FormCheckbox className="mb-1" value="chinese">
//             Chinese
//           </FormCheckbox>
//           <FormCheckbox className="mb-1" value="arabian">
//             Arabian
//           </FormCheckbox>
//           <FormCheckbox className="mb-1" value="mexican">
//             Mexican
//           </FormCheckbox>
//         </ListGroupItem>

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
      
//     </CardBody>
//   </Card>
// ); */

SidebarCategories.propTypes = {
  /*
   * The component's title.
   */
  title: PropTypes.string
};

SidebarCategories.defaultProps = {
  title: "Categories"
};

export default SidebarCategories;
