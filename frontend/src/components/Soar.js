import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import Selector from './Selector';
import { fetchNamespaces,fetchPodsByNamespcae } from '../store/actions/data'
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DataService from '../services/data.service';

const steps = ['Select Namespace', 'Select Pod', 'Kill Pod'];

function _renderStepContent(step,data,handleNamespaceChange,handlePodChange,namespace,pod) {
    switch (step) {
      case 0:
        return (<Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">NameSpace</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={namespace}
            label={"Namespace"}
            onChange={handleNamespaceChange}
          >
          {((data.namespaces.namespaces)?(data.namespaces.namespaces):(steps)).map(val => {
                 return <MenuItem key={val} value={val}>{val}</MenuItem>
          })}
          </Select>
        </FormControl>
      </Box>)
      case 1:
        return (<Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Pod</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={pod}
                label={"Pod"}
                onChange={handlePodChange}
              >
              {((data.pods[namespace])?(data.pods[namespace]):(["No Pods"])).map(val => {
                     return <MenuItem key={val} value={val}>{val}</MenuItem>
              })}
              </Select>
            </FormControl>
          </Box>)
    //   case 2:
    //     return <Selector data="Kill" values={steps}/>;
      default:
        return <div>{pod}</div>;
    }
  }

export default function Soar() {

  const [activeStep, setActiveStep] = useState(0);
  const [selectedNamespace, setSelectedNamespace] = useState("");
  const [completed, setCompleted] = useState({});
  const namespaces = useSelector((state) => state.data)
  const pods = useSelector((state) => state.data)
  const dispatch = useDispatch();
  const [namespace, setNamespace] = React.useState('default');
  const [pod, setPod] = React.useState('SelectPod');
  const handleNamespaceChange = (event) => {
    setNamespace(event.target.value);
  };
  const handlePodChange = (event) => {
      setPod(event.target.value);
  }
  useEffect(() => {
      dispatch(fetchNamespaces());
  },[])
  useEffect(()=> {
      dispatch(fetchPodsByNamespcae());
  },[namespace]);

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    DataService.openshift_delete_pod(namespace,pod)
    // handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you&apos;re finished
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Box sx={{ flex: '1 1 auto' }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
            {_renderStepContent(activeStep,namespaces,handleNamespaceChange,handlePodChange,namespace,pod)}
            <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: '1 1 auto' }}/>
              <Button onClick={handleNext} sx={{ mr: 1 }}>
                Next
              </Button>
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography variant="caption" sx={{ display: 'inline-block' }}>
                    Step {activeStep + 1} already completed
                  </Typography>
                ) : (
                  <Button onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1
                      ? 'Finish'
                      : 'Complete Step'}
                  </Button>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}
