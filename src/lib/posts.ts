import { sync } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { PostDesc } from "@/type/types";

const BASE_PATH = "src/post";
const POST_PATH = path.join(process.cwd(), BASE_PATH);

export const getAllPosts = (): PostDesc[] => {
    const postPaths: string[] = sync(`${POST_PATH}/**/*.mdx`);

    return postPaths.map((filePath) => {
        
        const id = path.basename(filePath, ".mdx")

        // filePath를 split 한뒤, 카테고리만 pop()
        const category = path.dirname(filePath).split(path.sep).pop() || "All";

        const fileContents = fs.readFileSync(filePath, "utf-8");

        const { data } = matter(fileContents);

        return {
            id,
            title: data.title,
            date: new Date(data.date),
            category,
        };
    })
}

export const getPostByCategory = (category: string): PostDesc[] => {
    const allPosts = getAllPosts();

    return allPosts.filter(post => post.category === category);
}

export const getPostList = async (category?: string): Promise<PostDesc[]> => {
    const fileNames = category ? getPostByCategory(category) : getAllPosts();

    const allPostData = fileNames.map((post) => {
        return {
            id: post.id,
            title: post.title,
            date: new Date(post.date),
            category: post.category
        }
    })

    allPostData.sort((a, b) => b.date.getTime() - a.date.getTime())

    return allPostData;
}