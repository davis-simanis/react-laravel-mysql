import { useState } from 'react';
import { Form } from 'react-router-dom';
import FieldConfig from '../../components/FieldConfig.component';

function renderFieldConfigs(qty) {
  const result = [];

  for (let i = 1; i <= qty; i++) {
    result.push(<FieldConfig key={i} id={i}/>);
  }

  return result;
}

export default function Create() {
  const [fieldConfigCount, setFieldConfigCount] = useState(1);
  const onAddMode = (e) => {
    e.preventDefault();
    setFieldConfigCount(fieldConfigCount + 1);
  };

  return (
    <div>
      <Form method="post" action='..'>
        <div>
          <label htmlFor="document_name">Document name</label>
          <input name="document_name" />
        </div>
        {renderFieldConfigs(fieldConfigCount)}
        <button onClick={onAddMode}>Add more</button>
        <button type="submit">Save</button>
      </Form>
    </div>
  );
}
