interface CustomInputProps {
  type: string;
  className?: string;
  name?: string;
  placeholder?: string
}

const CustomInput = ({ type, className, name, placeholder }: CustomInputProps) => {
  return (
    <div className="flex flex-col w-full">
      <label className="font-semibold">{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`border border-black rounded-lg p-2 ${className}`}
      />
    </div>
  );
};

export default CustomInput;
