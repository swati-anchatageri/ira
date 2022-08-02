import Carousel from "react-material-ui-carousel";
import React from "react";
import {quicks} from "./quick .json"
import {Divider} from "@material-ui/core"
import {Card} from 'react-bootstrap'
import { Button } from "shards-react";
import {Icon} from "@material-ui/core"

class QuickRecipe extends React.Component{
        state={
            quicks,
            activeStep:0
        }
        handleNext=()=>{
            this.setState((prevState)=>({
                activeStep:prevState.activeStep+1
            }))
        };
        handleBack=()=>{
            this.setState((prevState)=>({
                activeStep:prevState.activeStep-1
            }))
        };
   
    render(){
        // const {activeStep}=this.state;
        // const {maxSteps}= quicks.length
                return(
        <div>
            
                 <Card>
                
                    <Carousel 
                    index={this.state.index}
                                
                                interval={6000}
                                animation="fade"
                                indicators={false}
                                >
                    {
                this.state.quicks.map((item,i)=>{
                    return(
                        <section class="ftco-section">
			<div class="container">
				<div class="row">
                        <div class="col-md-12" >
                        <div class="featured-carousel owl-carousel">
                        <div class="item">
                        <div class="work-wrap d-md-flex" key={i}>
                            
                                    <div class="img order-md-right" ><img src={item.img} alt="" width={600} height={400} align="right"/>
                                    <div class="text text-left text-lg-right p-4 px-xl-5 d-flex align-items-center">
                                    <div class="desc w-100">
                                    <h4 class="mb-4">{item.title}</h4>
                                    <div class="row justify-content-center">
                                    <div class="col-xl-8">
                                    <p>{item.text.map((step)=>{return<div><li>{step}</li><Divider/></div>})}</p>
                                    </div>
                                    </div>
                                    </div>
                                    </div>
                                    
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div align="center">
                                        <Button theme="white" onClick={this.handleBack} ><Icon class="material-icons" fontSize="large">arrow_back_ios</Icon></Button>
                                        <Button theme="white" onClick={this.handleNext} ><Icon class="material-icons" fontSize="large">arrow_forward_ios</Icon></Button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </section>
                                )  }) }  
                    </Carousel>
                   
                    </Card>
                  
                </div>
                        
                    )
                }
    }
export default QuickRecipe;