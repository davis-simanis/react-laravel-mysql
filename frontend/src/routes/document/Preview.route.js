
export default function Preview() {
  return (
    <div>
      <h3>Document title</h3>
      <div>
        <div>
          <label for="document_name">Document title</label>
          <input name="document_name" id="document_name" />
        </div>
        <div>
          <label for="document_name">Document title</label>
          <select name="document_name" id="document_name">
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div>
          <label for="field_seq">Field sequence (weight)</label>
          <input name="field_seq" id="field_seq" />
        </div>
      </div>
    </div>
  );
}
