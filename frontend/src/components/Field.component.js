function renderOptions(options) {
  return options.map(({ value, label }, i) => (
    <option value={value} key={i}>
      {label}
    </option>
  ));
}

function renderSelect({ name, label = name, type, options = [] }) {
  return (
    <div className="Field">
      <label className="Field-Label" htmlFor={name}>
        {label}
      </label>
      <select
        className="Field-Select"
        name={name}
        type={type}
      >
        {renderOptions(options)}
      </select>
    </div>
  );
}

function renderInput({ name, label = name, type, isRequired = false }) {
  return (
    <div className="Field">
      <label className="Field-Label" htmlFor={name}>
        {label}
      </label>
      <input
        className="Field-Input"
        name={name}
        type={type}
        required={isRequired}
      />
    </div>
  );
}

export default function Field({ config = {} }) {
  switch (String(config.type)) {
    case '3':
      return renderSelect(config);
    default:
      return renderInput(config);
  }
}
