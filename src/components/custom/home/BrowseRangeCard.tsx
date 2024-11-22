
interface BrowseRangeCardProps {
  image: string;
  heading: string;
}
const BrowseRangeCard = ({ image, heading }: BrowseRangeCardProps) => {
  return (
    <div className="flex flex-col gap-2 ">
      <img
        src={image}
        alt="Browse our ranges"
        className="bg-cover rounded-lg"
      />
      <p className="text-center text-lg font-semibold">{heading}</p>
    </div>
  );
};

export default BrowseRangeCard;
