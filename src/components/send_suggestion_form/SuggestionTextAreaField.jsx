import TextAreaField from '../form/TextAreaField';

const SuggestionTextAreaField = () => {
  return (
    <TextAreaField
      placeholder="اكتب اقتراحك هنا."
      label="الاقتراح:"
      invalidFeedback="نص الاقتراح يجب أن يتكون من 10 أحرف على الأقل."
      rows={7}
    />
  );
};

export default SuggestionTextAreaField;
