export interface CategoryType {
    id: string;
    name: string;
    slug: string;
    parent: string;
    language: string;
    description: string;
    createdBy: string;
    status: string;
}

export type CreateCategoryInput = Omit<CategoryType, 'id'>;