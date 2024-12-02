interface CustomDropdownProps {
  label: string;
  options: string[];
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CustomDropdown = ({
  label,
  options,
  className,
  onChange,
}: CustomDropdownProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor="" className="font-semibold mb-2">
        {label}
      </label>
      <select
        defaultValue="select"
        className="border border-black rounded-lg p-2"
        onChange={onChange}
      >
        <option value="select" disabled>
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CustomDropdown;
