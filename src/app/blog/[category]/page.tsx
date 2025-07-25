// app/blog/[category]/page.tsx
import {getSortedPostList, getCategoryList} from "@/lib/posts";
import MainPage from "@/components/mainpage";

interface CategoryPageProps {
  params: { category: string };
}

export async function generateStaticParams() {
  const categoryList = getCategoryList();
  const paramList = categoryList.map(category => ({category}))
  return paramList
}

export default async function CategoryPage( { params }: CategoryPageProps) {

  const postList = await getSortedPostList(params.category); // getPostList 함수에서 category로 필터링된 결과를 가져옴

  return <MainPage postList={postList} category={params.category} />;
}
