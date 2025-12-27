export default function TextInput({
  name,
  value,
  placeholder,
  onChange,
  type = "text"
}) {
  return (
    <input
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
