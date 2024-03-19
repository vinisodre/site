"use client"

import BlogCard from "@/components/BlogCard";
import CategoryList from "@/components/CategoryList";
import Featured from "@/components/Featured";
import SideMenu from "@/components/SideMenu";




export default function Home() {
  return (
    <div>
      <Featured />
      <CategoryList />
      <div className="flex flex-col lg:flex-row gap-4">
        <div className="flex-1 lg:flex-auto lg:w-3/4">
          <BlogCard />
        </div>
        <div className="flex-1 lg:flex-auto lg:w-1/4">
          <SideMenu />
        </div>
      </div>
    </div>
  );
}
