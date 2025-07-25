import Link from "next/link";
import { Button } from "./ui/button";
import { Post } from "@/type/types";
import {getCategoryList} from "@/lib/posts";

interface MainPageProps {
  postList: Post[];
  category?: string;
}

export default async function MainPage({ postList, category }: MainPageProps) {

  const categoryList = getCategoryList()

  return (
    <section className="max-w-5xl mx-auto">
      <section className="p-4">
        <p className="text-3xl py-4 font-semibold">Tags</p>
        <Link href={`/blog`} className="mr-2">
          <Button>All</Button>
        </Link>
        { categoryList.map((c, index) => (
            <Link key={index} href={`/blog/${c}`} className="mr-2">
              <Button variant={category === c ? "default" : "outline"}>
                  {c.charAt(0).toUpperCase() + c.slice(1)}
              </Button>
            </Link>
        ))}
      </section>
      <section className="p-4">
        <p className="text-3xl py-4 font-semibold">Posts</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {postList.map((post, index) => {
          return (
            <div key={index}>
              <p className='text-sm text-gray-500'>
                  {post.date.toLocaleDateString()}
              </p>
              <Link href={post.url}
                className='text-lg font-medium hover:underline'
              >
                  {post.title}
              </Link>
              <p className='text-sm text-gray-400 mt-1'>
                  {post.categoryName}
              </p>
            </div>
          );
        })}
        </div>
      </section>
    </section>
  );
}
