interface Option {
  id: string | number;
  name: string;
  value: string;
  label: string;
}

interface DropDownFields{
  options: Option[];
  onChange: (value:any) => void;
  label: string;
  name: string;
  
}

const DropDown:React.FC<DropDownFields> = ({ options, onChange, label, name }) => {
  return (
    <div className="col-12 row">
      <div>
        <label className="float-start" htmlFor="option">
          {label}
        </label>
      </div>
      <div>
        <select
          className="form-control mb-3"
          id="option"
          name={name}
          onChange={(e) => onChange(e.target.value)}
        >
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default DropDown;
