"use client"

import { AllPostContents } from "@/type/types";
import { MDXRemote } from "next-mdx-remote";

export default function MdxContent({source}: {source: AllPostContents}) {
    return (
        <MDXRemote {...source.content} />
    );
}