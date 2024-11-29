interface CustomInfoProps {
  icon: string;
  heading: string;
  description: string;
}
const CustomContactInfo = ({ icon, heading, description }: CustomInfoProps) => {
  return (
    <div className="flex gap-2">
      <img src={icon} alt="icon" className="w-5"/>
      <div className="flex flex-col gap-1">
        <b>{heading}</b>
        <p className="max-w-[200px]">{description}</p>
      </div>
    </div>
  );
};

export default CustomContactInfo;
