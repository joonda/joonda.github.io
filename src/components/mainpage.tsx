import Link from "next/link";
import { Button } from "./ui/button";
import { PostDesc } from "@/type/types";
import { getPostList } from "@/lib/posts";

interface MainPageProps {
  postList: PostDesc[];
}

export default async function MainPage({ postList }: MainPageProps) {
  const posts = getPostList();
  let categories = posts.map((post) => post.category);
  categories = [...new Set(categories)];

  return (
    <section className="max-w-5xl mx-auto">
      <section className="p-4">
        <p className="text-3xl py-4 font-bold">Tags</p>
        <Link href={`/blog`} className="mr-2">
          <Button>All</Button>
        </Link>
        {categories.map((category, index) => {
          return (
            <Link key={index} href={`/blog/${category}`} className="mr-2">
              <Button key={index}>{category}</Button>
            </Link>
          );
        })}
      </section>
      <section className="p-4">
        <p className="text-3xl py-4 font-bold">Posts</p>
        <div className="flex gap-4">
        {postList.map((post, index) => {
          return (
            <div key={index} >
              <p>{post.date.toLocaleDateString()}</p>
              <Link href={`/blog/${post.category}/${post.id}`}>{post.title}</Link>
              <p>{post.category}</p>
            </div>
          );
        })}
        </div>
      </section>
    </section>
  );
}
