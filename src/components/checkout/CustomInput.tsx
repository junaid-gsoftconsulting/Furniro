interface CustomInputProps {
  type: string;
  className?: string;
  name?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CustomInput = ({
  type,
  className,
  name,
  placeholder,
  onChange,
  ...rest
}: CustomInputProps) => {
  return (
    <div className="flex flex-col w-full">
      <label className="font-semibold">{name}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`border border-black rounded-lg p-2 ${className}`}
        onChange={onChange}
        {...rest}
      />
    </div>
  );
};

export default CustomInput;
