import data from "../data.json";
import RecentPostsCard from "./RecentPostsCard";

const RecentPosts = () => {
  const recentPosts = data.recentPosts;
  return (
    <div className="flex flex-col gap-5">
      <b className="text-2xl">Recent Posts</b>
      <div className="flex flex-col gap-6">
        {recentPosts.map((post, index) => {
          return <RecentPostsCard recentPorduct={post} key={index} />;
        })}
      </div>
    </div>
  );
};

export default RecentPosts;
