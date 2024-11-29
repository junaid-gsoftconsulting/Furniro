interface CustomPaymentMethodProps {
  methodId: string;
  label: string;
  description: string;
  isActive: boolean;
  onClick: (methodId: string) => void;
}

const CustomPaymentMethod = ({
  methodId,
  label,
  description,
  isActive,
  onClick,
}: CustomPaymentMethodProps) => {
  return (
    <div>
      <div
        className="flex justify-start items-center gap-2"
        onClick={() => onClick(methodId)}
      >
        <div className="flex h-2">
          <div
            className={`p-1 rounded-full border border-black cursor-pointer ${
              isActive ? "bg-black" : "bg-white"
            }`}
          />
        </div>
        <div className="">{label}</div>
      </div>
      {isActive && <div>{description}</div>}
    </div>
  );
};

export default CustomPaymentMethod;
