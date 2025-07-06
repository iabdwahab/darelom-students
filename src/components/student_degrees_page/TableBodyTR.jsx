const TableBodyTR = ({ subject, student, index }) => {
  const subjectDegree = student.degrees[index];

  const isSucceed = subjectDegree >= 50 ? 'bg-success' : 'bg-danger';

  return (
    <tr>
      <th key={index} scope="row">
        {subject.name}
      </th>
      <td className={`text-center text-light ${isSucceed}`}>{subjectDegree}</td>
    </tr>
  );
};

export default TableBodyTR;
