import { Link } from 'react-router-dom';

const LinkButton = ({ text, to }) => {
  return (
    <Link to={to} className="btn btn-primary p-2 w-100 fw-bold">
      {text}
    </Link>
  );
};

export default LinkButton;
