import Link from "next/link";
import { Button } from "./ui/button";
import { PostDesc } from "@/type/types";
import { getAllPosts } from "@/lib/posts";

interface MainPageProps {
    postList:PostDesc[];
}

export default async function MainPage({postList}: MainPageProps) {

  const posts = getAllPosts()
  const categories = posts.map(post => post.category);

  return (
    <section className="max-w-5xl mx-auto">
      <section className="p-4">
        <p className="text-3xl">Tags</p>
        <div>
          {categories.map((category, index) => {
            return (
              <Link key={index} href={`/blog/${category}`}>
                <Button key={index}>{category}</Button>
              </Link>
            );
          })}
        </div>
      </section>
      <section className="p-4">
        <p className="text-3xl">Posts</p>
        <div>
          {postList.map((post, index) => {
            return (
              <div key={index}>
                <p>{post.date.toLocaleDateString()}</p>
                <Link href={`/blog/${post.category}/${post.id}`}>
                  {post.title}
                </Link>
                <p>{post.category}</p>
              </div>
            );
          })}
        </div>
      </section>
    </section>
  );
}
