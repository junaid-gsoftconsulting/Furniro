import { Button } from "@nextui-org/react";

interface CustomButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const CustomButton = ({ text, className, onClick }: CustomButtonProps) => {
  return (
    <Button
      className={`bg-primaryDark rounded-none text-white ${className}`}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};

export default CustomButton;
