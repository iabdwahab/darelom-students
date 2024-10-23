import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='footer bg-black py-4'>
      <div className="container text-center text-light">
        <div className='d-flex flex-wrap gap-4 gap-sm-5'>

          <Column title='تنبيهات هامة'>
            {/* <ColumnParagraph>إدارة الكلية غير مسئولة عن هذه المنصة.</ColumnParagraph> */}
            <ColumnParagraph>
              <span>للإبلاغ عن خطأ: </span>
              <Link to="/send_problem">أبلغنا من هنا</Link>.
            </ColumnParagraph>
            <ColumnParagraph>
              <span>لاقتراح تعديلات: </span>
              <Link to="/send_suggestion">اقترح من هنا</Link>.
            </ColumnParagraph>
            <ColumnParagraph>
              <span>إعلامات المنصة: </span>
              <a href="https://t.me/darelom_students">قناة التليجرام</a>.
            </ColumnParagraph>
          </Column>

          <Column title="روابط شخصية">
            <ColumnParagraph><a href="https://github.com/iabdwahab/darelom-students">ملفات المشروع على GitHub.</a></ColumnParagraph>
            <ColumnParagraph><a href="https://iabdwahab.me">معرض الأعمال.</a></ColumnParagraph>
            <ColumnParagraph><a href="https://www.linkedin.com/in/iabdwahab/">LinkedIn.</a></ColumnParagraph>
            <ColumnParagraph><a href="https://github.com/iabdwahab">GitHub.</a></ColumnParagraph>
          </Column>

        </div>
        <hr />
        <p className='m-0'>
          <span>تم إنشاء المنصة بواسطة: </span>
          {/* <span className='text-warning'>إبراهيم عبد الوهاب.</span> */}
          <span className='text-warning'>طلاب الدفعة 153.</span>
        </p>
      </div>
    </footer >
  )
}

function Column({ title, children }) {
  return (
    <div className='text-end'>
      <h4 className='mb-3'>{title}:</h4>
      {children}
    </div>
  )
}

function ColumnParagraph({ children }) {
  return <p className='m-0'>- {children}</p>
}

export default Footer