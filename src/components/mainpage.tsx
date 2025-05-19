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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postList.map((post, index) => {
          return (
            <div key={index}>
              <p className='text-sm text-gray-500'>
                  {post.date.toLocaleDateString()}
              </p>
              <Link href={`/blog/${post.category}/${post.id}`}
                className='text-lg font-medium hover:underline'
              >
                  {post.title}
              </Link>
              <p className='text-sm text-gray-400 mt-1'>
                  {post.category}
              </p>
            </div>
          );
        })}
        </div>
      </section>
    </section>
  );
}
