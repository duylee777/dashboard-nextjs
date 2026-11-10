'use client';

import { useState } from "react";
import Link from "next/link";
import FilterPost from "./FilterPost";
import ConfirmDelete from "../../common/ConfirmDelete";
import { PostType } from "@/src/admin/types/post";
import { Button, Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Plus, SquarePen } from "lucide-react";

const FIELDS = [
    'title', 
    'post',
    'language',
    'status',
    'action'
];

const POSTS: PostType[] = [
    { 
        id: '1',
        title: 'Bài viết 1',
        slug: 'bai-viet-1',
        thumbnail: 'https://images.pexels.com/photos/8937450/pexels-photo-8937450.jpeg?_gl=1*1hm0cqz*_ga*NTMxMzQyMDMzLjE3ODQ2ODQ0MjU.*_ga_8JE65Q40S6*czE3OTM5NTcwMDkkbzgkZzEkdDE3OTM5NTcwMjIkajQ3JGwwJGgw',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia molestias reiciendis esse voluptatum assumenda ipsam dolores deserunt voluptates cupiditate placeat, molestiae iste totam nulla culpa ipsa reprehenderit veritatis nemo minima?',
        category: 'hướng dẫn',
        language: 'vietnamese',
        author: 'admin',
        status: 'pulish'
    },
    { 
        id: '2',
        title: 'Bài viết 2',
        slug: 'bai-viet-2',
        thumbnail: 'https://images.pexels.com/photos/4160099/pexels-photo-4160099.jpeg?_gl=1*66w3wr*_ga*NTMxMzQyMDMzLjE3ODQ2ODQ0MjU.*_ga_8JE65Q40S6*czE3OTM5NTcwMDkkbzgkZzEkdDE3OTM5NTcxNDckajUyJGwwJGgw',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia molestias reiciendis esse voluptatum assumenda ipsam dolores deserunt voluptates cupiditate placeat, molestiae iste totam nulla culpa ipsa reprehenderit veritatis nemo minima?',
        category: 'hướng dẫn',
        language: 'vietnamese',
        author: 'admin',
        status: 'pulish'
    },
    { 
        id: '3',
        title: 'Bài viết 3',
        slug: 'bai-viet-3',
        thumbnail: 'https://images.pexels.com/photos/4106626/pexels-photo-4106626.jpeg?_gl=1*agbixl*_ga*NTMxMzQyMDMzLjE3ODQ2ODQ0MjU.*_ga_8JE65Q40S6*czE3OTM5NTcwMDkkbzgkZzEkdDE3OTM5NTcxNzQkajI1JGwwJGgw',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia molestias reiciendis esse voluptatum assumenda ipsam dolores deserunt voluptates cupiditate placeat, molestiae iste totam nulla culpa ipsa reprehenderit veritatis nemo minima?',
        category: 'hướng dẫn',
        language: 'vietnamese',
        author: 'admin',
        status: 'pulish'
    }
];

export default function PostList () {
    const [posts, setPosts] = useState<PostType[]>(POSTS);
            
    // Hàm xử lý lưu dữ liệu sau khi sửa
    const handleSavePost = async (updatedPost: PostType) => {
        // 1. Sau này gắn API thật tại đây:
        // await fetch(`/api/posts/${updatedPost.id}`, { method: 'PUT', body: JSON.stringify(updatedPost) });

        // 2. Cập nhật state local để hiển thị ngay thay đổi lên giao diện
        setPosts((prev) =>
            prev.map((post) => (post.id === updatedPost.id ? updatedPost : post))
        );
    };

    // Xử lý Xóa
    const handleDeletePost = async (id: string) => {
        // Gọi API DELETE thực tế tại đây nếu có
        setPosts((prev) => prev.filter((post) => post.id !== id));
    };

    return (
        <>
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full mb-1">
                    <div className="sm:flex">
                        <FilterPost />
                        <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                            {/* <Createpost /> */}
                            <Button as={Link} href="/admin/posts/create">
                                <Plus className="w-5 h-5 mr-2 -ml-1" />
                                Add post
                            </Button>
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
                                    {POSTS.map((post) => {
                                        return (
                                            <TableRow key={post.id}>
                                                <TableCell className="p-4">
                                                    <Checkbox />
                                                </TableCell>
                                                <TableCell className="whitespace-nowrap">{post.title}</TableCell>
                                                <TableCell className="whitespace-nowrap">{post.slug}</TableCell>
                                                <TableCell className="whitespace-nowrap">{post.language}</TableCell>
                                                <TableCell className="whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className={`h-2.5 w-2.5 rounded-full ${post.status == 'publish' ? 'bg-green-400' : 'bg-red-400'} mr-2`}></div>  
                                                        <span className="capitalize">{post.status}</span>
                                                    </div>
                                                </TableCell>
                                                {/* <TableCell className="max-w-sm xl:max-w-xs truncate">{post.description}</TableCell> */}
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        {/* <Editpost post={post} onSave={handleSavepost} /> */}
                                                        <Button size="sm" color="yellow" outline as={Link} href="#">
                                                            <SquarePen className="w-4 h-4 mr-2" />
                                                            Edit
                                                        </Button>
                                                        <ConfirmDelete id={post.id} itemName={post.title} onDelete={handleDeletePost} />
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