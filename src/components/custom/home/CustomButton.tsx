import { Button } from "@nextui-org/react";

interface CustomButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset"; 
}

const CustomButton = ({ text, className, onClick, disabled, type }: CustomButtonProps) => {
  return (
    <Button
      className={`bg-primaryDark rounded-none text-white ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
