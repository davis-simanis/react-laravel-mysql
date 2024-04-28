import DocumentList from './DocumentList.component';
import { useDocumentList } from '../../store/Document/Document.context';
import axios from 'axios';

export default function DocumentListContainer() {
  const { documentList, updateList } = useDocumentList();

  if (!documentList) {
    axios
      .get('http://localhost/api/documents')
      .then(({ data }) => {
        updateList(data);
      })
      .catch((error) => console.log(error));

    return null;
  }

  return <DocumentList documents={documentList} />;
}
