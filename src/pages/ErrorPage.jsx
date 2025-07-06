import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="min-vh-100 d-flex flex-column gap-4 justify-content-center align-items-center">
      <h1>الصفحة غير موجودة.</h1>
      <Link to="/" className="btn btn-primary">
        الصفحة الرئيسية
      </Link>
    </div>
  );
};

export default ErrorPage;
