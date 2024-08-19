import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';


const Steps = ({ stepsList }) => {
  const location = useLocation();
  const [currentStepIndex, setCurrentStepIndex] = useState(location.state?.initialStepIndex || 0);
  const [selections, setSelections] = useState(location.state?.selections || []);

  const currentStep = stepsList[currentStepIndex];
  return (
    <div>
      <div className='d-flex justify-content-between align-content-center'>
        <h2>{currentStep.title}</h2>
        <BackButton currentStepIndex={currentStepIndex} setCurrentStepIndex={setCurrentStepIndex} selections={selections} setSelections={setSelections} />
      </div>
      <div className='row g-2 my-2'>
        {currentStep.options.map((option, index) => {
          return (
            <div className='col-sm-6' key={index}>
              <StepButton option={option} stepsList={stepsList} currentStepIndex={currentStepIndex} setCurrentStepIndex={setCurrentStepIndex} selections={selections} setSelections={setSelections} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

function StepButton({ option, stepsList, currentStepIndex, setCurrentStepIndex, selections, setSelections }) {
  const navigate = useNavigate();
  function handleStep() {

    if (option.option_data === 'test_yourself') {
      return navigate('/test_yourself');
    }

    if (currentStepIndex < stepsList.length - 1 && (option.will_next)) {
      setCurrentStepIndex(currentStepIndex + 1);
      setSelections([...selections, option.option_data]);
    } else {
      navigate(`${selections.join('/')}/${option.option_data}`);
    }
  }

  const isAvailalbe = option.available;

  return (
    <button className={`btn btn-primary w-100 p-2 ${!isAvailalbe ? 'disabled' : ''}`} onClick={handleStep}>
      <span>{option.option_text} </span>
      <span>{!isAvailalbe ? '[قريبًا]' : ''}</span>
    </button>
  )
}

function BackButton({ currentStepIndex, setCurrentStepIndex, selections, setSelections }) {
  function goBack() {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      setSelections(selections.slice(0, selections.length - 1));
    }
  }

  const isFirstStep = currentStepIndex === 0;

  return (
    <button className={`btn btn-danger ${isFirstStep ? 'd-none' : 'd-block'}`} onClick={goBack}>رجوع</button>
  )
}

export default Steps