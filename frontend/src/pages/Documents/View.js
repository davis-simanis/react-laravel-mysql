import { DocumentProvider } from '../../store/Document/Document.context';
import DocumentList from '../../components/DocumentList';

export default function View() {
  return (
    <DocumentProvider>
      <DocumentList />
    </DocumentProvider>
  );
}
