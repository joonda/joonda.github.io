// app/blog/[category]/page.tsx
import { getSortedPostList, getCategoryList } from "@/lib/posts";
import MainPage from "@/components/mainpage";

interface CategoryPageProps {
  params: Promise<{ category: string }>;  // Promise로 변경
}

export function generateStaticParams() {
  const categoryList = getCategoryList();
  return categoryList.map(category => ({ category }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;  // params를 await로 처리
  const postList = await getSortedPostList(category);
  return <MainPage postList={postList} category={category} />;
}