import trophy from "../../../assets/shop/trophy.svg";
import support from "../../../assets/shop/support.svg";
import shipping from "../../../assets/shop/shipping.svg";
import warranty from "../../../assets/shop/warranty.svg";
import ShopBannerFrame from './ShopBannerFrame';

const Banner = () => {
  return (
    <div className="flex items-center justify-center bg-primary py-10">
      <div className=" flex flex-col md:flex-row  items-start justify-evenly gap-6">
      <ShopBannerFrame
          icon={trophy}
          heading="High Quality"
          desc="crafted from top materials"
        />
        <ShopBannerFrame
          icon={warranty}
          heading="Warranty Protection"
          desc="Over 2 years"
        />
        <ShopBannerFrame
          icon={shipping}
          heading="Free Shipping"
          desc="Order over 150 $"
        />
        <ShopBannerFrame
          icon={support}
          heading="24 / 7 Support"
          desc="Dedicated support"
        />
      </div>
      </div>
  )
}

export default Banner