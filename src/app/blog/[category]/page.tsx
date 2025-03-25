// app/blog/[category]/page.tsx
import { getPostList } from "@/lib/posts";
import MainPage from "@/components/mainpage";

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category } = await params;
  const postList = await getPostList(category); // getPostList 함수에서 category로 필터링된 결과를 가져옴

  return <MainPage postList={postList} />;
}
