const OptionsField = ({ optionsRef }) => {
  const optionsInputsNames = ['الأول', 'الثاني', 'الثالث', 'الرابع'];

  return (
    <>
      <label className="fw-bold fs-5 mb-1">الاختيارات:</label>
      <div className="row g-2">
        {optionsInputsNames.map((el, index) => {
          return (
            <div key={index} className="col-sm-6">
              <input
                type="text"
                className="form-control"
                placeholder={`الاختيار ${el}.`}
                ref={(option) => (optionsRef.current[index] = option)}
                required
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OptionsField;
