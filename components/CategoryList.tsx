import { client } from "@/sanity/lib/client";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `
    *[_type == "category"]
    {
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      "image": image.asset->url
    }
    `;

  const data = await client.fetch(query);

  return data;
}

export default async function CategoryList() {
    const data = await getData();
  
    return (
      <div className="my-4">
        <div className="flex gap-4 bg-white text-black p-4 rounded-xl">
          {data.map((item) => (
            <Link href={`/${item.slug}`} key={item.id}>
              <div className="flex bg-primary px-4 py-2 align-middle gap-2 rounded text-black">
                <Image src={item.image} alt={item.title} width={25} height={25} className="rounded-full"/>
                <p>{item.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // todo: implementar como componente botão ui