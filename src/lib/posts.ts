import { sync } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { MdxHeader, Post } from "@/type/types";

const BASE_PATH = "src/post";
const POST_PATH = path.join(process.cwd(), BASE_PATH);

export const getPostPath = (category?: string) => {
    const folder = category || "**";
    const mdxPaths: string[] = sync(`${POST_PATH}/${folder}/*.mdx`)

    return mdxPaths
}

export const parseMdxAbstract = (mdxPath: string) => {

    // mdx file name (slug)
    const mdxSlug = path.basename(mdxPath, ".mdx");
    const mdxCategory = path.dirname(mdxPath).split(path.sep).pop()!;

    const url = `/blog/${mdxCategory}/${mdxSlug}`;
    const categoryName = mdxCategory.charAt(0).toUpperCase() + mdxCategory.slice(1);

    return { url, mdxCategory, categoryName, mdxSlug };
}

export const parseMdxDetails = (mdxPath: string) => {
    const fileContents = fs.readFileSync(mdxPath, "utf8");
    const { data, content } = matter(fileContents);

    const mdxHeader = data as MdxHeader
    const date = new Date(mdxHeader.date);
    return { ...mdxHeader, date, content };
}

const parsePost = async (mdxPath: string) => {
    const postAbstract = parseMdxAbstract(mdxPath);
    const postDetails = parseMdxDetails(mdxPath);

    return {
        ...postAbstract,
        ...postDetails
    }
}

export const getPostList = async (category?: string): Promise<Post[]> => {
    const postPaths = getPostPath(category);
    const postList = await Promise.all(postPaths.map((post) => parsePost(post)));

    return postList;
}

const sortPostList = (PostList: Post[]) => {
    return PostList.sort((a, b) => b.date.getTime() - a.date.getTime());
}

export const getSortedPostList = async (category?: string) => {
    const postList = await getPostList(category);
    return sortPostList(postList);
}

export const getCategoryList = () => {
    const categoryPaths = sync(`${POST_PATH}/*`);
    const categoryList = categoryPaths.map((p) => p.split(path.sep).slice(-1)?.[0]);

    return categoryList;
}

export const getPostDetail = async (category: string, slug: string) => {
    const filePath = `${POST_PATH}/${category}/${slug}.mdx`;
    const detail = await parsePost(filePath);
    return detail;
};