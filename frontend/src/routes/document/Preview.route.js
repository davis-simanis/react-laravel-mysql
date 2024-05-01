import { useRouteLoaderData, useParams, Link } from 'react-router-dom';
import Field from '../../components/Field.component';

function renderFields(fieldList) {
  return fieldList
    .sort(({ field_seq: a }, { field_seq: b }) => a - b)
    .map((config, i) => <Field config={config} key={i} />);
}

export default function Preview() {
  const documentList = useRouteLoaderData('documents');
  const { documentId: targetId } = useParams();
  const targetDocument = documentList.find(
    ({ id }) => String(id) === String(targetId)
  );

  if (!targetDocument) {
    return (
      <div>
        <h1>No document with id {targetId}</h1>
        <div>
          <Link to="..">Back</Link>
        </div>
      </div>
    );
  }

  const { document_name, fields } = targetDocument;

  return (
    <div>
      <h1>{document_name}</h1>
      <div>{renderFields(fields)}</div>
      <div>
        <Link to="..">Back</Link>
      </div>
    </div>
  );
}
