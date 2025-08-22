import { Image } from '@/components/mdx/Image';
import {MDXComponents} from "mdx/types";
import {ExternalLink} from "@/components/mdx/Link";
import React, {ComponentProps} from "react";

type ImgProps = ComponentProps<"img">
type AnchorProps = ComponentProps<"a">

export const MdxComponents: MDXComponents = {
    img: Image as React.ComponentType<ImgProps>,
    a: ExternalLink as React.ComponentType<AnchorProps>,
}