import { Table } from '../Table';
import { Link } from 'react-router-dom';
// import { useDocumentList } from '../../store/Document/Document.context';

export default function DocumentList({ documentList = [] }) {
  // const { documentList } = useDocumentList();
  // const documents = documentList.map(({ document_id, ...rest }) => ({
  //   document_id,
  //   ...rest,
  //   preview_btn: <Link to={`${document_id}`}>preview document</Link>
  // }));

  return (
    <>
      <Link to="create">New document form</Link>
      <Table data={documentList} />
    </>
  );
}
