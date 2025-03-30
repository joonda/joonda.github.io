export interface PostDesc {
    id: string;
    title: string;
    date: Date;
    category: string;
}

export interface PostDetail extends PostDesc {
    content: string;
}