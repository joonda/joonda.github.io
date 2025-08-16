import { Image } from '@/components/mdx/Image';
import {MDXComponents} from "mdx/types";
import {ExternalLink} from "@/components/mdx/Link";

export const MdxComponents: MDXComponents = {
    img: Image as any,
    a: ExternalLink as any,
}