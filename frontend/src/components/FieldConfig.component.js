export default function fieldConfigs({id = '0'}) {
  return (
    <div>
      <div>
        <label htmlFor="sequence">Field sequence (weight)</label>
        <input name={`sequence_${id}`} />
      </div>
      <div>
        <label htmlFor="type">Field type</label>
        <select name={`type_${id}`}>
          <option>Input</option>
          <option>Checkbox</option>
          <option>Textbox</option>
        </select>
      </div>
      <div>
        <label htmlFor="name">Field name</label>
        <input name={`name_${id}`} />
      </div>
      <div>
        <label htmlFor="isMandatory">Mandatory</label>
        <input name={`isMandatory_${id}`} type="checkbox" />
      </div>
    </div>
  );
}
