import MdxContent from "@/components/mdxcontent";
import { getPostDetail } from "@/lib/posts";
import { AllPostContents } from "@/type/types";
import Link from "next/link";

export default async function PostDetail ({
    params
}: {
    params: {category: string, slug: string};
}) {
    const {slug, category} = await params;
    const detail:AllPostContents = await getPostDetail(category, slug);
    return (
        <section>
            <div>
                <Link href={"/blog"}>
                    <p>back to home</p>
                </Link>
                <p>{detail.date.toLocaleDateString()}</p>
            </div>
            <div>
                <article className="prose">
                    <MdxContent source={detail} />
                </article>
            </div>
        </section>
    )
}