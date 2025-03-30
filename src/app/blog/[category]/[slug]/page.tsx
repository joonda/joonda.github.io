import { PostBody } from "@/components/postbody";
import { getPostDetail, getPostPath } from "@/lib/posts";
import Link from "next/link";
import path from "path";

// Next.js 15에서는 params가 Promise로 전달됩니다
interface PageProps {
    params: Promise<{
        category: string;
        slug: string;
    }>;
}

export function generateStaticParams() {
    const postPaths: string[] = getPostPath();
    const paramList = postPaths.map((filepath) => {
        const segments = filepath.split(path.sep);
        const category = segments[segments.length - 2];
        const slug = segments[segments.length - 1].replace('.mdx', '');

        return {category, slug};
    });
    return paramList;
}

// export async function generateMetadata({ params }: PageProps) {
//     // params를 await로 처리
//     const resolvedParams = await params;
//     const {category, slug} = resolvedParams;
    
//     const post = await getPostDetail(category, slug);

//     const title = `${post.title} | Hyun_dev`;
//     const description = post.title;
//     const imageURL: string[] = [];

//     return {
//         title,
//         description,
//         openGraph: {
//             type: "article",
//             publishedTime: post.date.toISOString(),
//             images: imageURL
//         },
//         twitter: {
//             title,
//             description,
//             image: imageURL
//         }
//     }
// }

// Next.js App Router에서 페이지 컴포넌트 정의
export default async function Page({ params }: PageProps) {
    // params를 await로 처리
    const resolvedParams = await params;
    const {category, slug} = resolvedParams;
    
    const post = await getPostDetail(category, slug);
    
    return (
        <section>
            <div>
                <Link href={"/blog"}>
                    <p>back to home</p>
                </Link>
                <p>{post.date.toLocaleDateString()}</p>
            </div>
            <div>
                <article className="prose">
                    {/* <MdxContent source={detail} /> */}
                    <PostBody post={post} />
                </article>
            </div>
        </section>
    )
}