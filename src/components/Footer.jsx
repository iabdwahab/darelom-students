import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black py-4'>
      <div className="container text-center text-light">
        <div className='d-flex flex-wrap gap-4 gap-sm-5'>
          <div className='text-end'>
            <h4 className='mb-3'>تنبيهات هامة:</h4>
            <p className='m-0'>- إدارة الكلية غير مسئولة عن هذه المنصة.</p>
            <p className='m-0'>
              <span>- للإبلاغ عن خطأ: </span>
              <a href="https://forms.gle/nM4tsJ1bYt6YkQsw7">أبلغنا من هنا</a>.
              <span> [Google Form].</span>
            </p>
            <p className='m-0'>
              <span>- لاقتراح تعديلات: </span>
              <a href="https://forms.gle/unqbVhrNr1FJuzhN6">اقترح من هنا</a>.
              <span> [Google Form].</span>
            </p>
            <p className='m-0'>
              <span>- إعلامات المنصة: </span>
              <a href="https://t.me/darelom_students">قناة التليجرام</a>.
            </p>
          </div>
          <div className='text-end d-flex flex-column'>
            <h4 className='mb-3'>روابط شخصية:</h4>
            <p className='m-0'>- <a href="https://github.com/iabdwahab/darelom-students">ملفات المشروع على GitHub.</a></p>
            <p className='m-0'>- <a href="https://iabdwahab.me">معرض الأعمال.</a></p>
            <p className='m-0'>- <a href="https://www.linkedin.com/in/iabdwahab/">LinkedIn.</a></p>
            <p className='m-0'>- <a href="https://github.com/iabdwahab">GitHub.</a></p>
          </div>
        </div>
        <hr />
        <p className='m-0'>
          <span>تم إنشاء المنصة بواسطة: </span>
          <span className='text-warning'>إبراهيم عبد الوهاب.</span>
        </p>
      </div>
    </footer>
  )
}

export default Footer