import React, { useEffect, useState } from 'react'

const Steps = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [steps, setSteps] = useState([]);

  useEffect(() => {
    fetch('/src/data/steps.json')
      .then(res => res.json())
      .then(data => {
        setSteps(data);
      })
  }, []);

  return (
    <div>
      <div className='d-flex justify-content-between'>
        <h2 className='fw-bold'>{steps.length ? steps[currentStep].title : null}</h2>
        <div className='d-flex gap-2'>
          <BackButton currentStep={currentStep} setCurrentStep={setCurrentStep} />
          <BackButton isBackHomeButton={true} currentStep={currentStep} setCurrentStep={setCurrentStep} />
        </div>
      </div>

      <ul className='list-unstyled py-4 px-0 row row-cols-sm-2 row-gap-3'>
        {steps.length ? steps[currentStep].options.map(
          (option, index) => {
            return (
              <li key={index} className='px-2'>
                <StepButton option={option} steps={steps} currentStep={currentStep} setCurrentStep={setCurrentStep} />
              </li>
            )
          }
        ) : null}
      </ul>
    </div>
  )
}

function StepButton({ currentStep, setCurrentStep, steps, option }) {

  function goNext() {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  }

  const isOptionAvailable = option.available || option.available === undefined;

  return <button onClick={goNext} className={`btn btn-primary w-100 p-2 ${!isOptionAvailable ? 'disabled' : ''} `}>{option.text} {!isOptionAvailable ? '[قريبًا]' : ''}</button >
}

function BackButton({ currentStep, setCurrentStep, isBackHomeButton }) {

  function goBack() {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  }

  function goHome() {
    setCurrentStep(0);
  }

  function checkDisplay() {
    return currentStep <= 0 ? 'd-none' : '';
  }

  const classNames = `btn btn-danger pt-sm-2 me-auto ${checkDisplay()}`;
  const clickHandler = isBackHomeButton ? goHome : goBack;
  const text = isBackHomeButton ? 'القائمة الرئيسة' : 'رجوع';

  return <button onClick={clickHandler} className={classNames}>{text}</button>
}


export default Steps;