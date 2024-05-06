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

  if(!firstRow) {
    return <h2>No rows to render</h2>
  }

  const titles = Object.keys(firstRow || {});
  
  return (
    <table className="table table-bordered table-striped">
      {renderTableHead(titles)}
      {renderTableBody(data)}
    </table>
  );
}
