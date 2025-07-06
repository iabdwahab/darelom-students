import TextAreaField from '../form/TextAreaField';

const QuestionTextAreaField = () => {
  return (
    <TextAreaField
      placeholder="اكتب نص السؤال هنا."
      label="نص السؤال:"
      invalidFeedback="نص السؤال يجب أن يتكون من 10 أحرف على الأقل."
    />
  );
};

export default QuestionTextAreaField;
