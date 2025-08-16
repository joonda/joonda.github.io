import {Post} from "@/type/types";
import { MDXRemote } from "next-mdx-remote/rsc";
import {MdxComponents} from "@/components/mdx";

interface Props {
    post: Post;
}

export const PostBody = ({post}: Props) => {
    return (
        <MDXRemote 
            source={post.content}
            options={{
                mdxOptions: {
                    remarkPlugins: [],
                    rehypePlugins: [],
                }
            }}
            components={MdxComponents}
        />
    )
}