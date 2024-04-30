export default function fieldConfigs() {
  return (
    <div>
      <div>
        <label htmlFor="sequence">Field sequence (weight)</label>
        <input name="sequence" id="sequence" />
      </div>
      <div>
        <label htmlFor="type">Field type</label>
        <select name="type" id="type">
          <option>Input</option>
          <option>Checkbox</option>
          <option>Textbox</option>
        </select>
      </div>
      <div>
        <label htmlFor="name">Field name</label>
        <input name="name" id="name" />
      </div>
      <div>
        <label htmlFor="isMandatory">Mandatory</label>
        <input name="isMandatory" id="isMandatory" type="checkbox" />
      </div>
    </div>
  );
}
