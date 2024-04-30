import { useDocumentList } from '../../store/Document/Document.context';
import DocumentList from '../../components/DocumentList';
import { useParams } from 'react-router-dom';
import DocumentView from '../../components/DocumentView';

export default function View() {
//   const { document_id: targetId } = useParams();
//   const { documentList = [] } = useDocumentList();

//   if (targetId) {
//     const targetDocument = documentList.find(
//       ({ document_id }) => String(document_id) === String(targetId)
//     );

//     return <DocumentView document={targetDocument} />;
//   }

  return <DocumentList />;
}
