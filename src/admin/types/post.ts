export interface PostType {
    id: string;
    title: string;
    slug: string;
    thumbnail: string;
    content: string;
    category: string;
    language: string;
    author: string;
    status: string;
}

export type CreatePostInput = Omit<PostType, 'id'>;