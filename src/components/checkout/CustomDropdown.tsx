interface CustomDropdownProps {
  label: string;
  options: string[];
  className?: string;
}

const CustomDropdown = ({ label, options, className }: CustomDropdownProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor="" className="font-semibold mb-2">
        {label}
      </label>
      <select
        defaultValue="select"
        className="border border-black rounded-lg p-2"
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
