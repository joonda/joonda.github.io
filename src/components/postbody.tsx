import {Post} from "@/type/types";
import { MDXRemote } from "next-mdx-remote/rsc";

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
        />
    )
}