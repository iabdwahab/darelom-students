import { Link } from 'react-router-dom';

const SendQuestionTermSelector = () => {
  return (
    <div className="row g-2">
      <div className="col-sm-6">
        <Link to="term_1" className="btn btn-primary w-100">
          الفصل الدراسي الأول
        </Link>
      </div>
      <div className="col-sm-6">
        <Link to="term_2" className="btn btn-primary w-100">
          الفصل الدراسي الثاني
        </Link>
      </div>
    </div>
  );
};

export default SendQuestionTermSelector;
