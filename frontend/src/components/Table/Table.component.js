import Row from './Row.component';

function renderTableBody(rows) {
  return (
    <tbody className="Table-Body">
      {rows.map((row, i) => (
        <Row data={Object.values(row)} key={i} />
      ))}
    </tbody>
  );
}

function renderTableHead(titles) {
  return (
    <thead className="Table-Head">
      <Row data={titles} cellType="th" />
    </thead>
  );
}

export default function Table({ data = [] }) {
  const [firstRow] = data;
  const titles = Object.keys(firstRow || {});

  return (
    <table border="1" className="Table">
      {renderTableHead(titles)}
      {renderTableBody(data)}
    </table>
  );
}
