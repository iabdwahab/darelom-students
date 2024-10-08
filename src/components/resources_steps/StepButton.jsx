import React from 'react'
import { useNavigate } from 'react-router-dom';

const StepButton = ({ option, stepsList, currentStepIndex, setCurrentStepIndex, selections, setSelections }) => {
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

  let isAvailalbe = true;

  if (currentStepIndex > 0 && !option.availableAt?.includes(selections[0])) {
    isAvailalbe = false
  }

  const btnText = `${option.option_text} ${!isAvailalbe ? '[قريبًا]' : ''}`;
  const classNames = `btn btn-primary w-100 p-2 ${!isAvailalbe ? 'disabled' : ''}`;

  return (
    <button className={classNames} onClick={handleStep}>
      {btnText}
    </button>
  )

}

export default StepButton