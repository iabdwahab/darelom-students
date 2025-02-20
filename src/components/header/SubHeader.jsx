import { Link } from "react-router-dom"

const SubHeader = () => {
  return (
    <>
      <div className='subheader bg-dark text-light fs-6' style={{ padding: '11px 0' }}>
        <div className='container-xl text-center'>
          إعلامات وتحديثات المنصة: <a href="https://t.me/darelom_students">قناة التليجرام.</a>
        </div>
      </div>
      <div className='subheader bg-dark border-top text-light fs-6' style={{ padding: '11px 0' }}>
        <div className='container-xl text-center'>
          يمكنكم الآن الاطلاع على: <Link to="/degrees/grade_2/2024_25">ترتيب الفرقة الثانية 2025.</Link>
        </div>
      </div>
    </>
  )
}

export default SubHeader