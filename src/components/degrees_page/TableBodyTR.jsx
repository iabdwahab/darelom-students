import { useNavigate, useParams } from 'react-router-dom';

const TableBodyTR = ({ student, grade, year }) => {
  let { id, name, rank, total, total_percentage } = student;
  const navigate = useNavigate();

  const isHided = name === 'مريم سمير أحمد عبدالصمد';

  function navigateToStudentPage() {
    if (!isHided) {
      navigate(`/degrees/${grade}/${year}/${student.id}`);
    }
  }

  if (isHided) {
    id = 'محجوب';
    name = 'محجوب';
  }

  return (
    <tr className="degree_tr-linked" onClick={navigateToStudentPage}>
      <th scope="row" className="text-center">
        {rank}
      </th>
      <td className="text-center">{id}</td>
      <td style={{ whiteSpace: 'nowrap' }}>{name}</td>
      <td className="text-center">{total}</td>
      <td className="text-center">%{total_percentage}</td>
    </tr>
  );
};

export default TableBodyTR;
