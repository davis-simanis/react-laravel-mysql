import DocumentList from '../../components/DocumentList';
import { useRouteLoaderData } from 'react-router-dom';

export default function View() {
  const documentList = useRouteLoaderData('documents');

  return <DocumentList documentList={documentList} />;
}
