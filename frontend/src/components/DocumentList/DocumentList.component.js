import { Table } from '../Table';
import { Link } from 'react-router-dom';

function renderPreviewLink(to) {
  return <Link to={String(to)}>Document preview</Link>;
}

function formatData(data) {
  return data.map(({ created_at, document_name, fields, id }) => ({
    id,
    'document title': document_name,
    'created at': created_at,
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
