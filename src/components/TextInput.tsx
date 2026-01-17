interface TextInputFields {
  value: string;
  type: string;
  name: string;
  label: string;
  onChange: (value: any) => void;
  error: any;
  placeholder: any;
}

const TextInput: React.FC<TextInputFields> = ({
  value,
  type,
  name,
  label,
  onChange,
  error,
  placeholder,
}) => {
  return (
    <div>
      <div className="m-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        <input
          className="w-full border border-gray-200 p-3 rounded-lg focus:ring-2 focus:ring-amber-500 outline-none transition"
          placeholder={placeholder}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
      {<p className="text-red-500 m-2">{error}</p>}
    </div>
  );
};
export default TextInput;
