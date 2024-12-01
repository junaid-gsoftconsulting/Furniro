interface RecentPostsCardProps {
  recentPorduct: {
    image: string;
    desc: string;
  };
}
const RecentPostsCard = ({ recentPorduct }: RecentPostsCardProps) => {
  return (
    <div className="flex gap-2">
      <img src={recentPorduct.image} alt="recent-product" />
      <div className="flex flex-col gap-2">
        <p>{recentPorduct.desc}</p>
        <p className="text-gray-500">03 Aug 2022</p>
      </div>
    </div>
  );
};

export default RecentPostsCard;
