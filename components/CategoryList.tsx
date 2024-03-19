import Image from "next/image";
import Link from "next/link";
import { getCategories } from "@/sanity/lib/querys";

import { Category } from "@/types/Category";
import { Button } from "./ui/button";
export default async function CategoryList() {
  const data = await getCategories();

  return (
    <div className="my-8">
      <div className="flex flex-wrap justify-center gap-4">
        {data.map((item: Category) => (
          <Button asChild variant={"link"} className="text-white text-xs" key={item._id}>
            <Link href={`/${item.slug}`}>
              {item.title}
            </Link>
          </Button>
        ))}
      </div>
    </div>
  );
}

// todo: implementar como componente botão ui
