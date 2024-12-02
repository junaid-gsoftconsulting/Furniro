interface CustomHeadingProps {
  heading: string;
  upperdesc?: string;
  lowerdesc?: string;
}

const CustomHeading = ({ heading, upperdesc,lowerdesc }: CustomHeadingProps) => {
  return (
    <div className="text-center">
        <p className="text-xl">{upperdesc}</p>
      <p className="text-4xl font-bold">{heading}</p>
      <p className="">{lowerdesc}</p>
    </div>
  );
};

export default CustomHeading;
