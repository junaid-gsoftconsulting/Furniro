import backgroundImage from "/assets/shop/breadcrum.png";
import { Link, useLocation } from "react-router-dom";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

const BreadcrumCard = () => {
  const location = useLocation();
  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div key={crumb}>
          <Link to={currentLink}>{crumb}</Link>
        </div>
      );
    });

  return (
    <div
      className="bg-cover flex flex-col gap-3 justify-center items-center h-64 text-2xl"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="font-semibold">
        <p>{crumbs}</p>
      </div>
      {/* <Link to={currentLink}>{crumbs}</Link> */}
      <Breadcrumbs>
        <BreadcrumbItem href="/">Home</BreadcrumbItem>
        <BreadcrumbItem href={currentLink}>{crumbs}</BreadcrumbItem>
      </Breadcrumbs>
    </div>
  );
};

export default BreadcrumCard;
