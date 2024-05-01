export default function Field({config}) {
  const { field_name, field_type } = config;

  return (
    <div className="Field">
      <label htmlFor={field_type}>{field_name}</label>
      <input name={field_type} />
    </div>
  );
}
