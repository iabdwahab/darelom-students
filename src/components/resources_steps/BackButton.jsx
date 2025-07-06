const BackButton = ({ currentStepIndex, setCurrentStepIndex, selections, setSelections }) => {
  function goBack() {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      setSelections(selections.slice(0, selections.length - 1));
    }
  }

  const isFirstStep = currentStepIndex === 0;

  return (
    <button className={`btn btn-danger ${isFirstStep ? 'd-none' : 'd-block'}`} onClick={goBack}>
      رجوع
    </button>
  );
};

export default BackButton;
