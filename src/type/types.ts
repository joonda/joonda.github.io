export interface MdxHeader {
    title: string;
    date: Date;
}

export interface Post extends MdxHeader {
    url: string;
    mdxCategory: string;
    categoryName: string;
    mdxSlug: string;
    content: string;
}