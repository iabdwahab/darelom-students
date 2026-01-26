import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer bg-black py-4">
      <div className="container text-center text-light">
        <div className="d-flex flex-wrap gap-4 gap-sm-5">
          <Column title="روابط هامة">
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
            <ColumnParagraph>
              <a href="https://github.com/iabdwahab/darelom-students">ملفات المشروع على GitHub.</a>
            </ColumnParagraph>
          </Column>

          <Column title="أرشيف نتائج الأعوام">
            <ColumnParagraph>
              <Link to="/degrees/grade_1/2023_24">الفرقة الأولى / 2024.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/degrees/grade_2/2023_24">الفرقة الثانية / 2024.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/degrees/grade_3/2023_24">الفرقة الثالثة / 2024.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/degrees/grade_4/2023_24">الفرقة الرابعة / 2024.</Link>
            </ColumnParagraph>
            <hr />
            <ColumnParagraph>
              <Link to="/degrees/grade_1/2024_25">الفرقة الأولى / 2025.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/degrees/grade_2/2024_25">الفرقة الثانية / 2025.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/degrees/grade_3/2024_25">الفرقة الثالثة / 2025.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/degrees/grade_4/2024_25">الفرقة الرابعة / 2025.</Link>
            </ColumnParagraph>
          </Column>

          <Column title="أرشيف نتائج الفصول">
            <ColumnParagraph>
              <Link to="/ranking/grade_1/term_1/2024">الفرقة الأولى / الفصل الأول / 2024.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/ranking/grade_1/term_2/2024">الفرقة الأولى / الفصل الثاني / 2024.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/ranking/grade_1/term_1/2025">الفرقة الأولى / الفصل الأول / 2025.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/ranking/grade_1/term_2/2025">الفرقة الأولى / الفصل الثاني / 2025.</Link>
            </ColumnParagraph>
            <hr />
            <ColumnParagraph>
              <Link to="/ranking/grade_2/term_1/2024">الفرقة الثانية / الفصل الأول / 2024.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/ranking/grade_2/term_2/2024">الفرقة الثانية / الفصل الثاني / 2024.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/ranking/grade_2/term_1/2025">الفرقة الثانية / الفصل الأول / 2025.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/ranking/grade_2/term_2/2025">الفرقة الثانية / الفصل الثاني / 2025.</Link>
            </ColumnParagraph>
            <hr />
            <ColumnParagraph>
              <Link to="/ranking/grade_3/term_1/2024">الفرقة الثالثة / الفصل الأول / 2024.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/ranking/grade_3/term_2/2024">الفرقة الثالثة / الفصل الثاني / 2024.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/ranking/grade_3/term_1/2025">الفرقة الثالثة / الفصل الأول / 2025.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/ranking/grade_3/term_2/2025">الفرقة الثالثة / الفصل الثاني / 2025.</Link>
            </ColumnParagraph>
            <hr />
            <ColumnParagraph>
              <Link to="/ranking/grade_4/term_1/2024">الفرقة الرابعة / الفصل الأول / 2024.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/ranking/grade_4/term_2/2024">الفرقة الرابعة / الفصل الثاني / 2024.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/ranking/grade_4/term_1/2025">الفرقة الرابعة / الفصل الأول / 2025.</Link>
            </ColumnParagraph>
            <ColumnParagraph>
              <Link to="/ranking/grade_4/term_2/2025">الفرقة الرابعة / الفصل الثاني / 2025.</Link>
            </ColumnParagraph>
          </Column>

          <div>
            <Column title="حسابات مطور المنصة" className="mb-4">
              {/* <ColumnParagraph>
              <a href="https://iabdwahab.github.io">معرض الأعمال.</a>
            </ColumnParagraph> */}
              {/* <ColumnParagraph>
              <a href="https://wa.me/+201280552925">WhatsApp.</a>
            </ColumnParagraph> */}
              <ColumnParagraph>
                <a href="http://t.me/iabdwahab">Telegram.</a>
              </ColumnParagraph>
              <ColumnParagraph>
                <a href="https://www.linkedin.com/in/iabdwahab/">LinkedIn.</a>
              </ColumnParagraph>
              <ColumnParagraph>
                <a href="https://github.com/iabdwahab">GitHub.</a>
              </ColumnParagraph>
            </Column>
            <Column title="بعض أعمال المطور">
              {/* <ColumnParagraph>
              <a href="https://iabdwahab.github.io">معرض الأعمال.</a>
            </ColumnParagraph> */}
              {/* <ColumnParagraph>
              <a href="https://wa.me/+201280552925">WhatsApp.</a>
            </ColumnParagraph> */}
              <ColumnParagraph>
                <a href="https://mothalthagency.com">موقع شركة مثلث.</a>
                <ColumnParagraph>
                  <a href="https://thecapital.sa">موقع شركة "ذا كابيتال".</a>
                </ColumnParagraph>
              </ColumnParagraph>
              <ColumnParagraph>
                <a href="https://iabdwahab.github.io/assembly-endgame/">Assembly Endgame.</a>
              </ColumnParagraph>
              <ColumnParagraph>
                <a href="https://iabdwahab.github.io/positivus-agency">Positivus Agency.</a>
              </ColumnParagraph>
              <ColumnParagraph>
                <a href="https://world-ranks-iabdwahab.vercel.app">World Ranks.</a>
              </ColumnParagraph>
            </Column>
          </div>
        </div>
        <hr />
        <p className="m-0">
          <span>تم إنشاء المنصة بواسطة: </span>
          {/* <span className='text-warning'>إبراهيم عبد الوهاب.</span> */}
          <span className="text-warning">طلاب الدفعة 153.</span>
        </p>
      </div>
    </footer>
  );
};

function Column({ title, children, className }) {
  return (
    <div className={`text-end ${className}`}>
      <h4 className="mb-3">{title}:</h4>
      {children}
    </div>
  );
}

function ColumnParagraph({ children }) {
  return <p className="m-0">- {children}</p>;
}

export default Footer;
