interface SidebarButtonsProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const SidebarButtons = ({ text, onClick, className }: SidebarButtonsProps) => {
  return (
    <button
      className={`rounded-none py-1 px-4 ${className}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SidebarButtons;
