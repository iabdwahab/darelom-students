const FieldContainer = ({ field, marginBottom = 3 }) => {
  return <div className={`mb-${marginBottom}`}>{field}</div>;
};

export default FieldContainer;
