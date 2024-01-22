import Featured from "@/components/Featured";
import { client } from "@/sanity/lib/client";

async function getData() {
  const query = `
  *[_type == "post"] | order(_createdAt desc) {
    title, 
      "currentSlug": slug.current,
      body,
      preview
  }
  `;

  const data = await client.fetch(query);

  return data;
}

export default async function Home() {
  const data = await getData();

  // console.log('teste ----->', data);
  return (
    <div>
      <Featured />
    </div>
  );
}
