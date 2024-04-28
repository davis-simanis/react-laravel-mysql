import { DocumentProvider } from '../../store/Document/Document.context';
import { View, Edit, Create } from './';
import NotFound from '../NotFound';

function getPageByType(type) {
  switch (type) {
    case 'view':
      return <View />;
    case 'edit':
      return <Edit />;
    case 'create':
      return <Create />;
    default:
      return <NotFound />;
  }
}

export default function DocumentsPage({ type = 'view' }) {
  return <DocumentProvider>{getPageByType(type)}</DocumentProvider>;
}
