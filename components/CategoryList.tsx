import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/sanity/lib/querys";
import { Button } from "./ui/button";
import { Category } from "@/types/Category";
export default async function CategoryList() {
    const data = await getCategories();
  
    return (
      <div className="my-4">
        <div className="flex gap-4 bg-white text-black p-4 rounded-xl">
          {data.map((item: Category) => (
            <Link href={`/${item.slug}`} key={item._id}>
              <Button size={"sm"} className="shadow-lg">{item.title}</Button>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // todo: implementar como componente botão ui

