import { useRouteLoaderData, useParams, Link } from 'react-router-dom';
import Field from '../../components/Field.component';

function renderFields(fieldList) {
  return fieldList
    .sort(({ sequence: a }, { sequence: b }) => a - b)
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

  const { name, fields } = targetDocument;

  return (
    <div>
      <h1>{name}</h1>
      <div>{renderFields(fields)}</div>
      <div>
        <Link to="..">Back</Link>
      </div>
    </div>
  );
}
