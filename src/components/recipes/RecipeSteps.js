import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
//import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import {Card, CardHeader} from "shards-react"
import {recipe} from "./recipe.json";
import {Divider} from "@material-ui/core"
//import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
//import {angle-double-right} from "@fortawesome/free-solid-svg-icons"

export default function RecipeSteps () {
  // const handleChange = handleChange.bind;
  // const setData = setData.bind;
  const [activeStep, setActiveStep] = useState(0);
  //const id = recipe.id;
  const [step, setStep] = useState([]);
  const [selRecipe, setSelRecipe] = useState(recipe);
  const [pcounter, setPCounter]= useState(60);
  //const [ccounter,setCCounter]= useState(recipe.ctime);
    
   
    

  const handleNext = () => {
    // this.setState({
    //   setActiveStep: this.state.prevActiveStep+1
    // })

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    // this.setState({
    //   setActiveStep: this.state.prevActiveStep-1
    // })
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  setInterval(() => setPCounter(pcounter-1), 1000);

  const setData=()=>{
    const currentURL = window.location.href;
    const index = currentURL.substring((currentURL.lastIndexOf('/')+1));
    recipe.forEach(item => {
      if(item.id==index){
        setSelRecipe(item)
        setStep(item.step)
      }
    });
    console.log(selRecipe)
    
  }
  // useEffect
  useEffect(()=>{
    setData();
    // handleChange();
    // handleBack();
    // handleNext();
    // handleReset();
  },[])
  

   const handleChange = (event) =>{
    useState({id: event.target.value});
    useState({title: event.target.value});
}

  return (
    
    <div>
    <Card>
    <CardHeader>
      <div>
        <h4>Cooking Steps</h4>
        <Divider/>
        <div align="right">
        {/* Timer : {pcounter} */}
        <img className="d-inline-block align-top mr-1"
             style={{ maxWidth: '25px' }}
             src={require("../../assets/angles-right-solid.svg")} alt="" title='Next' onClick={handleNext}/>{" "}
             <img className="d-inline-block align-top mr-1"
             style={{ maxWidth: '25px' }}
             src={require("../../assets/circle-play-solid.svg")} alt="" title='Reset' onClick={handleReset}/>{" "}
             
             <img className="d-inline-block align-top mr-1"
             style={{ maxWidth: '25px' }}
             src={require("../../assets/angles-left-solid.svg")} alt="" title='Back' onClick={handleBack}/>
        </div>
        <Divider/>
      </div>
    </CardHeader>
    <Box sx={{ maxWidth: 400 }}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {step.map((steps,index) => (
          <Step key={steps.label}>
            <StepLabel
              optional={
                index === 2 ? (
                  <Typography variant="caption">Last step</Typography>
                ) : null
              }
            >
              {steps.label}
            </StepLabel>
            <StepContent>
              <Typography>{steps.steps.map((step)=>{return<div><li>{step}</li><Divider/></div>})}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  {/* <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button> */}
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === step.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          {/* <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
            Reset
          </Button> */}
        </Paper>
      )}
    </Box>
    </Card>
    </div>
  );
}

