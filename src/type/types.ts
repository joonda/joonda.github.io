import { MDXRemoteSerializeResult } from "next-mdx-remote";

export interface PostDesc {
    id: string;
    title: string;
    date: Date;
    category: string;
}

export interface PostDetail{
    content: MDXRemoteSerializeResult;
}

export interface AllPostContents extends PostDesc, PostDetail {};