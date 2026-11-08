'use client';

import { useState } from "react";
import Link from "next/link";
import FilterPage from "./FilterPage";
import CreatePage from "./CreatePage";
import EditPage from "./EditPage";
import ConfirmDelete from "../../common/ConfirmDelete";
import { PageType } from "@/src/admin/types/page";
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Button } from "flowbite-react";
import { WandSparkles } from "lucide-react";

const FIELDS = [
    'title', 
    'slug',
    'page-parent',
    'language',
    'status',
    'description',
    'action'
];

const PAGES: PageType[] = [
    { 
        id: '1',
        title: 'Trang chủ',
        slug: 'trang-chu',
        parent: 'original',
        language: 'vietnamese',
        description: 'Trang chủ',
        createdBy: 'admin',
        status: 'publish',
        html: '',
        css: '',
        js: '',
    },
    { 
        id: '2',
        title: 'Giới thiệu',
        slug: 'gioi-thieu',
        parent: 'original',
        language: 'vietnamese',
        description: 'Giới thiệu',
        createdBy: 'admin',
        status: 'publish',
        html: '',
        css: '',
        js: '',
    },
    { 
        id: '3',
        title: 'Liên hệ',
        slug: 'lien-he',
        parent: 'original',
        language: 'vietnamese',
        description: 'Liên hệ',
        createdBy: 'admin',
        status: 'publish',
        html: '',
        css: '',
        js: '',
    },
];


export default function PageList () {
    const [pages, setPages] = useState<PageType[]>(PAGES);
    
    // Hàm xử lý lưu dữ liệu sau khi sửa
    const handleSavePage = async (updatedPage: PageType) => {
        // 1. Sau này gắn API thật tại đây:
        // await fetch(`/api/pages/${updatedPage.id}`, { method: 'PUT', body: JSON.stringify(updatedPage) });

        // 2. Cập nhật state local để hiển thị ngay thay đổi lên giao diện
        setPages((prev) =>
            prev.map((page) => (page.id === updatedPage.id ? updatedPage : page))
        );
    };

    // Xử lý Xóa
    const handleDeletePage = async (id: string) => {
        // Gọi API DELETE thực tế tại đây nếu có
        setPages((prev) => prev.filter((page) => page.id !== id));
    };

    return (
        <>
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full mb-1">
                    <div className="sm:flex">
                        <FilterPage />
                        <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                            <CreatePage />
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
                                    {PAGES.map((page) => {
                                        return (
                                            <TableRow key={page.id}>
                                                <TableCell className="p-4">
                                                    <Checkbox />
                                                </TableCell>
                                                <TableCell className="whitespace-nowrap">{page.title}</TableCell>
                                                <TableCell className="whitespace-nowrap">{page.slug}</TableCell>
                                                <TableCell className="whitespace-nowrap">{page.parent}</TableCell>
                                                <TableCell className="whitespace-nowrap">{page.language}</TableCell>
                                                <TableCell className="whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className={`h-2.5 w-2.5 rounded-full ${page.status == 'publish' ? 'bg-green-400' : 'bg-red-400'} mr-2`}></div>  
                                                        <span className="capitalize">{page.status}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell className="max-w-sm xl:max-w-xs truncate">{page.description}</TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        <Button as={Link} href="https://www.youtube.com/" target="_blank" size="sm" outline>
                                                            <WandSparkles className="w-4 h-4 mr-2" />
                                                            Design
                                                        </Button>
                                                        <EditPage page={page} onSave={handleSavePage} />
                                                        <ConfirmDelete id={page.id} itemName={page.title} onDelete={handleDeletePage} />
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