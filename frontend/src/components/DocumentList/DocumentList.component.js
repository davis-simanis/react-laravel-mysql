import { Table } from '../Table';
import { Link } from 'react-router-dom';

function renderPreviewLink(to) {
  return <Link to={String(to)}>Document preview</Link>;
}

function formatData(data) {
  return data.map(({ createdAt, name, fields, id }) => ({
    id,
    'document title': name,
    'created at': createdAt,
    'document size': fields?.length,
    preview: renderPreviewLink(id)
  }));
}

export default function DocumentList({ documentList = [] }) {
  return (
    <div className="DocumentList">
      <Link to="create">New document form</Link>
      <Table data={formatData(documentList)} />
    </div>
  );
}
