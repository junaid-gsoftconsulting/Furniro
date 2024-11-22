import { Button } from "@nextui-org/react";

interface CustomButtonProps {
  text: string;
  className?: string;
}

const CustomButton = ({ text, className }: CustomButtonProps) => {
  return (
    <Button className={`bg-primaryDark rounded-none text-white ${className}`}>
      {text}
    </Button>
  );
};

export default CustomButton;
