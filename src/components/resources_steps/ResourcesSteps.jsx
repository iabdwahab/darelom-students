import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BackButton from './BackButton';
import StepButton from './StepButton';

const ResourcesSteps = ({ stepsList }) => {
  const location = useLocation();
  const [currentStepIndex, setCurrentStepIndex] = useState(location.state?.initialStepIndex || 0);
  const [selections, setSelections] = useState(location.state?.selections || []);
  const currentStep = stepsList[currentStepIndex];

  return (
    <div>
      <div className="d-flex justify-content-between align-content-center">
        <h2>{currentStep.title}</h2>
        <BackButton
          currentStepIndex={currentStepIndex}
          setCurrentStepIndex={setCurrentStepIndex}
          selections={selections}
          setSelections={setSelections}
        />
      </div>
      <div className="row g-2 my-2">
        {currentStep.options.map((option, index) => {
          if (currentStepIndex === 0 || option.availableAt?.includes(selections[0])) {
            return (
              <div className="col-sm-6" key={index}>
                <StepButton
                  option={option}
                  stepsList={stepsList}
                  currentStepIndex={currentStepIndex}
                  setCurrentStepIndex={setCurrentStepIndex}
                  selections={selections}
                  setSelections={setSelections}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default ResourcesSteps;
