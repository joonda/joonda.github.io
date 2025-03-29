import { sync } from "glob";
import path from "path";
import fs from "fs";
import matter from "gray-matter";
import { AllPostContents, PostDesc } from "@/type/types";
import { serialize } from "next-mdx-remote/serialize";

const BASE_PATH = "src/post";
const POST_PATH = path.join(process.cwd(), BASE_PATH);

export const getAllPosts = (): PostDesc[] => {
    const postPaths: string[] = sync(`${POST_PATH}/**/*.mdx`);

    return postPaths.map((filePath) => {
        
        const id = path.basename(filePath, ".mdx")

        // filePath를 split 한뒤, 카테고리만 pop()
        const category = path.dirname(filePath).split(path.sep).pop() || "All";
        
        const formattedCategory = category.charAt(0).toUpperCase() + category.slice(1);

        const fileContents = fs.readFileSync(filePath, "utf-8");

        const { data } = matter(fileContents);

        return {
            id,
            title: data.title,
            date: new Date(data.date),
            category: formattedCategory
        };
    })
}

export const getPostList = (category?: string): PostDesc[] => {
    const allPosts = getAllPosts();

    const filteredPosts = category ? allPosts.filter(post => post.category === category) : allPosts

    return filteredPosts.sort((a, b) => b.date.getTime() - a.date.getTime())
}

export const getPostDetail = async (
    category: string, slug: string
): Promise<AllPostContents> => {
    const filePath = path.join(POST_PATH, category, `${slug}.mdx`)

    const fileContents = fs.readFileSync(filePath, "utf-8")

    const {data, content} = matter(fileContents)

    const mdxSource = await serialize(content);

    return {
        id: slug,
        title: data.title,
        date: new Date(data.date),
        category,
        content: mdxSource
    }
}