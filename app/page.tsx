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

  console.log('teste ----->', data);
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      {data.map((post) => (
        <div key={post.currentSlug}>
          <h2>{post.title}</h2>
          <p>{post.preview}</p>
        </div>
      ))}
    </div>
  );
}
