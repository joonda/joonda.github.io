// app/blog/[category]/page.tsx
import { getPostList, getPostPath } from "@/lib/posts";
import MainPage from "@/components/mainpage";
import path from "path";

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export function generateStaticParams() {
  const postPaths: string[] = getPostPath();
  const categoryList = postPaths.map((filepath) => {
    const segments = filepath.split(path.sep);
    const category = segments[segments.length - 2];

    return {category}
  })
  return categoryList
}


export default async function CategoryPage( {params}: CategoryPageProps) {

  const resolvedParams = await params
  const { category } = resolvedParams;
  const postList = await getPostList(category); // getPostList 함수에서 category로 필터링된 결과를 가져옴

  return <MainPage postList={postList} />;
}
