const TableHead = () => {
  const data = [
    { isCentered: true, text: '#' },
    { isCentered: true, text: 'رقم الجلوس' },
    { isCentered: false, text: 'الاسم' },
    { isCentered: true, text: 'الإجمالي' },
    { isCentered: true, text: 'النسبة' },
  ];

  return (
    <thead>
      <tr>
        {data.map((item, index) => {
          return (
            <th key={index} scope="col" className={`${item.isCentered && 'text-center'}`}>
              {item.text}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;
