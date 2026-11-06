'use client';

import { useState } from "react";
import FilterRole from "./FilterCategory";
import CreateCategory from "./CreateCategory";
import EditCategory from "./EditCategory";
import ConfirmDelete from "../../common/ConfirmDelete";
import { CategoryType } from "@/src/admin/types/category";
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const FIELDS = [
    'name', 
    'slug',
    'category-parent',
    'language',
    'status',
    'description',
    'action'
];

const CATEGORIES: CategoryType[] = [
    { 
        id: '1',
        name: 'Trang chủ',
        slug: 'trang-chu',
        parent: 'original',
        language: 'vietnamese',
        description: 'Trang chủ',
        createdBy: 'admin',
        status: 'publish',
    },
    { 
        id: '2',
        name: 'Trang chủ',
        slug: 'trang-chu',
        parent: 'original',
        language: 'vietnamese',
        description: 'Trang chủ',
        createdBy: 'admin',
        status: 'publish',
    },
    { 
        id: '3',
        name: 'Trang chủ',
        slug: 'trang-chu',
        parent: 'original',
        language: 'vietnamese',
        description: 'Trang chủ',
        createdBy: 'admin',
        status: 'publish',
    },
];

export default function CategoryList () {
    const [categories, setCategories] = useState<CategoryType[]>(CATEGORIES);
        
    // Hàm xử lý lưu dữ liệu sau khi sửa
    const handleSaveCategory = async (updatedCategory: CategoryType) => {
        // 1. Sau này gắn API thật tại đây:
        // await fetch(`/api/categories/${updatedCategory.id}`, { method: 'PUT', body: JSON.stringify(updatedCategory) });

        // 2. Cập nhật state local để hiển thị ngay thay đổi lên giao diện
        setCategories((prev) =>
            prev.map((cate) => (cate.id === updatedCategory.id ? updatedCategory : cate))
        );
    };

    // Xử lý Xóa
    const handleDeleteCategory = async (id: string) => {
        // Gọi API DELETE thực tế tại đây nếu có
        setCategories((prev) => prev.filter((cate) => cate.id !== id));
    };

    return (
        <>
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full mb-1">
                    <div className="sm:flex">
                        <FilterRole />
                        <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                            <CreateCategory />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableHeadCell className="p-4">
                                            <Checkbox />
                                        </TableHeadCell>
                                        {FIELDS.map((field) => {
                                            return (
                                                <TableHeadCell key={field}>{field}</TableHeadCell>
                                            );
                                        })}
                                    </TableRow>
                                </TableHead>
                                <TableBody className="divide-y">
                                    {CATEGORIES.map((category) => {
                                        return (
                                            <TableRow key={category.id}>
                                                <TableCell className="p-4">
                                                    <Checkbox />
                                                </TableCell>
                                                <TableCell className="whitespace-nowrap">{category.name}</TableCell>
                                                <TableCell className="whitespace-nowrap">{category.slug}</TableCell>
                                                <TableCell className="whitespace-nowrap">{category.parent}</TableCell>
                                                <TableCell className="whitespace-nowrap">{category.language}</TableCell>
                                                <TableCell className="whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className={`h-2.5 w-2.5 rounded-full ${category.status == 'publish' ? 'bg-green-400' : 'bg-red-400'} mr-2`}></div>  
                                                        <span className="capitalize">{category.status}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="max-w-sm xl:max-w-xs truncate">{category.description}</TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        <EditCategory category={category} onSave={handleSaveCategory} />
                                                        <ConfirmDelete id={category.id} itemName={category.name} onDelete={handleDeleteCategory} />
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}