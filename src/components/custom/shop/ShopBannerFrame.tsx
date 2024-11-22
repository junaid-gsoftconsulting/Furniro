
interface ShopBannerFrameProps {
  icon: string;
  heading: string;
  desc: string;
}

const ShopBannerFrame = ({ icon, heading, desc }: ShopBannerFrameProps) => {
  return (
    <div className="flex gap-3">
      <img src={icon} alt="icon" />
      <div className="flex flex-col">
        <p className="text-2xl">{heading}</p>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default ShopBannerFrame;
