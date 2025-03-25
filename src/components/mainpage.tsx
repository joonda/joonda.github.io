import Link from "next/link";
import { Button } from "./ui/button";
import { PostDesc } from "@/type/types";

interface MainPageProps {
    postList:PostDesc[];
}

export default async function MainPage({postList}: MainPageProps) {

  return (
    <section>
      <section>
        <div>
          {postList.map((post, index) => {
            return (
              <Link key={index} href={`/blog/${post.category}`}>
                <Button key={index}>{post.category}</Button>
              </Link>
            );
          })}
        </div>
      </section>
      <section>
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
