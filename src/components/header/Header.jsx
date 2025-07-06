import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header text-center border-bottom py-3">
      <h1 className="fw-bold">
        <Link to="/" className="text-dark">
          منصة طلاب دار العلوم
        </Link>
      </h1>
      {/* <p className='text-danger fw-bold m-0'>[المنصة غير تابعة لإدارة الكلية]</p> */}
    </header>
  );
};

export default Header;
