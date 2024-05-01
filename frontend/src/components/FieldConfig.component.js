import Field from './Field.component';

export default function FieldConfigs({ id }) {
  const fields = [
    { label: 'Field sequence (weight)', name: `sequence-${id}`, type: 'number' },
    {
      label: 'Field type',
      name: `type-${id}`,
      type: 'select',
      options: [
        { value: 1, label: 'checkbox' },
        { value: 2, label: 'number' },
        { value: 3, label: 'select' }
      ]
    },
    { label: 'Field name', name: `name-${id}`, type: 'text' },
    {
      label: 'Mandatory',
      name: `isMandatory-${id}`,
      type: 'checkbox',
      isRequired: false
    }
  ];

  return (
    <div className="FieldConfig">
      {fields.map((config, i) => (
        <Field config={config} key={i} />
      ))}
    </div>
  );
}
