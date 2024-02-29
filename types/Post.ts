export type Post = {
    _id: number;
    _createdAt: string;
    title: string;
    author: string;
    image: string;
    categories: { title: string }[];
    slug: string;
    content: any;
    excerpt: any;
  };