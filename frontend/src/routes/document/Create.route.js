import { useState } from 'react';
import { Form } from 'react-router-dom';
import FieldConfig from '../../components/FieldConfig.component';

function renderFieldConfigs(qty) {
  const result = [];

  for (let i = 1; i <= qty; i++) {
    result.push(<FieldConfig key={i}/>);
  }

  return result;
}

export default function Create() {
  const [fieldConfigCount, setFieldConfigCount] = useState(1);
  const onSave = () => {
    console.log('Saved!')
  };
  const onAddMode = () => {
    setFieldConfigCount(fieldConfigCount + 1);
  };

  return (
    <div>
      <Form>
        <div>
          <label htmlFor="document_name">Document name</label>
          <input name="document_name" id="document_name" />
        </div>
        {renderFieldConfigs(fieldConfigCount)}
      </Form>
      <button onClick={onAddMode}>Add more</button>
      <button onClick={onSave}>Save</button>
    </div>
  );
}
