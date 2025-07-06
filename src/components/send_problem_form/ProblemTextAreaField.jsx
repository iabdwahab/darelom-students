import TextAreaField from '../form/TextAreaField';

const ProblemTextAreaField = () => {
  return (
    <TextAreaField
      placeholder="اكتب المشكلة بالتفصيل، وإن كانت المشكلة خاصة بصفحة بعينها؛ أرسل الرابط."
      label="المشكلة:"
      invalidFeedback="نص المشكلة يجب أن يتكون من 10 أحرف على الأقل."
      rows={7}
    />
  );
};

export default ProblemTextAreaField;
