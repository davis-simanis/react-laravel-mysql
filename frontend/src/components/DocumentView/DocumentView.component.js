import { Link } from 'react-router-dom';

export default function DocumentView({ document = {} }) {
  const { document_name } = document;
  // TODO implement logic to resolve fields based on document configs
  return (
    <div className="DocumentView">
      <div className="DocumentView-Title">{document_name}</div>
      <div className="DocumentView-FieldsWrapper">
        HERE GOES ALL CONFIGURED DOCUMENT FIELDS
      </div>
      <div className="DocumentView-Back">
        <Link to="/documents">Back</Link>
      </div>
    </div>
  );
}
