import BlogCard from "@/components/BlogCard";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import SideMenu from "@/components/SideMenu";




export default async function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex">
        <div className="w-3/4">
          <BlogCard />
        </div>
        <div className="w-1/4">
          <SideMenu />
        </div>
      </div>
    </div>
  );
}
