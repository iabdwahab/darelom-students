import React, { useEffect, useRef } from 'react'
import FieldContainer from '../form/FieldContainer'
import Form from '../form/Form'
import TextField from '../form/TextField';
import SubmitButton from '../form/SubmitButton';
import TextAreaField from '../form/TextAreaField';
const AddInfluencer = () => {
  const formRef = useRef(null);

  useEffect(() => {
    const form = formRef.current;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      form.classList.add('was-validated')

    })
  });

  return (
    <>
      <Form formRef={formRef} >
        <FieldContainer marginBottom={1} field={<TextField id='name-input' placeholder='اسم الشخص' label='اسم الشخص' />} />
        <FieldContainer marginBottom={1} field={<TextField id='image-input' placeholder='رابط الصورة' label="رابط الصورة" />} />
        <FieldContainer marginBottom={1} field={<TextAreaField id='description-input' placeholder='تعريف' label="تعريف" invalidFeedback='نص التعريف يجب أن يتكون من 20 حرف على الأقل.' minLength={20} />} />
        <SubmitButton text='إضافة شخص' />
      </Form>
    </>
  )
}

export default AddInfluencer