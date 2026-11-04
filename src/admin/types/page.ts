export interface PageType {
    id: string;
    title: string;
    slug: string;
    parent: string;
    language: string;
    description: string;
    createdBy: string;
    status: string;
    html: string;
    css: string;
    js: string;
}

export type CreatePageInput = Omit<PageType, 'id'>;