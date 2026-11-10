'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import thumbnail from '@/public/assets/demo/thumbnail.jpg';
import { TabItem, Tabs, Button, Select, Checkbox, Label, FileInput, HelperText, TextInput, Textarea } from "flowbite-react";
import { CalendarDays, Newspaper, LayoutList } from "lucide-react";

// Dynamic import vô hiệu hóa SSR chuẩn kiến trúc Next.js
const TinyMCEEditor = dynamic(() => import('@/src/admin/components/common/TinyMCEEditor'), {
    ssr: false,
    loading: () => (
        <div className="h-125 w-full bg-gray-100 dark:bg-gray-800 animate-pulse rounded-lg flex items-center justify-center text-gray-400">
            Đang tải trình soạn thảo...
        </div>
    ),
}); 

export default function CreatePost () {
    const [content, setContent] = useState<string>('<p>Nội dung ban đầu...</p>');

    return (
        <>
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 dark:bg-gray-900 dark:border-gray-700">
                <div className="w-full mb-1">
                    <div className="sm:flex">
                        <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                            <Button size="sm" color="light">
                                <CalendarDays className="w-4 h-4 mr-2 -ml-1" />
                                Schedule
                            </Button>
                            <Button size="sm">
                                <Newspaper className="w-4 h-4 mr-2 -ml-1" />
                                Publish
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col divide-y lg:divide-y-0 lg:flex-row lg:divide-x divide-gray-200 dark:divide-gray-700">
                <aside className="w-80">
                    <div className="p-4 space-y-6 divide-y divide-gray-200 dark:divide-gray-700">
                        <div className="pb-6 space-y-2">
                            <Label className="block" htmlFor="categories">Category</Label>
                            <Select id="categories" required>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </Select>
                        </div>
                        <div className="pb-6 space-y-2">
                            <Label className="block" htmlFor="file">Thumbnail</Label>
                            <div className="min-w-60 max-w-80 overflow-hidden rounded-xl shadow ">
                                <Image alt="thumbnail" className="w-full h-auto" src={thumbnail} />
                            </div>
                            <FileInput id="file" />
                            <HelperText className="mt-1">A profile picture is useful to confirm your are logged into your account</HelperText>
                        </div>
                        <div className="pb-6 space-y-2">
                            <Label className="block" htmlFor="categories">Author</Label>
                            <TextInput disabled readOnly value="Admin" />
                        </div>
                        <div className="pb-6 space-y-2">
                            <Label className="block" htmlFor="categories">Status</Label>
                            <TextInput disabled readOnly value="Draft" />
                        </div>
                    </div>
                </aside>
                <div className="grow w-full">
                    <div className="p-4">
                        <Tabs>
                            <TabItem active title="Vietnamese">
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <Label className="block" htmlFor="title">Title</Label>
                                        <TextInput type="text" placeholder="Input title ..." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="block" htmlFor="slug">Slug</Label>
                                        <TextInput type="text" placeholder="Input slug ..." />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="block" htmlFor="description">Description</Label>
                                        <Textarea placeholder="Input description ..." required rows={4} />
                                    </div>
                                    <div className="space-y-2">
                                        <Label className="block" htmlFor="content">Content</Label>
                                        <TinyMCEEditor value={content} onChange={setContent} />
                                    </div>
                                </div>
                            </TabItem>
                            <TabItem title="English">
                                This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab associated content</span>.
                                Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                control the content visibility and styling.
                            </TabItem>
                        </Tabs>
                    </div>
                </div>
            </div>
            {/* <div className="flex flex-col divide-y lg:flex-row lg:divide-x border-b border-gray-200 divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
                <aside className="dark:bg-gray-900 p-4">
                    <div className="w-80 rounded-md bg-gray-50 dark:bg-gray-800">
                        <div className="space-y-4 p-4 rounded-md border border-gray-200 dark:border-gray-700">
                            <h2 className="pb-2 flex flex-row flex-nowrap items-center gap-1 font-semibold text-gray-500 dark:text-gray-400 border-b border-gray-200 dark:border-gray-700">
                                <LayoutList size={18} />
                                <span>Category</span>
                            </h2>
                            <Select id="countries" required>
                                <option>United States</option>
                                <option>Canada</option>
                                <option>France</option>
                                <option>Germany</option>
                            </Select>
                            <div className="">
                                <div className="flex items-center gap-2">
                                    <Checkbox className="bg-white" />
                                    <Label>Cate 1</Label>
                                </div>
                            </div>
                            <Button size="sm" color="light">Save</Button>
                        </div>
                    </div>
                </aside>
                <div className="">
                    <div className="p-4 grow">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae assumenda fuga earum nemo quam deserunt autem nihil rem iure inventore ducimus distinctio modi eum a est, dolore nesciunt quia voluptatem?
                    </div>
                </div>
                
            </div> */}
            {/* <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow px-4">
                            <Tabs>
                                <TabItem active title="Vietnamese">
                                    This is <span className="font-medium text-gray-800 dark:text-white">Profile tab associated content</span>.
                                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                    control the content visibility and styling.
                                </TabItem>
                                <TabItem title="English">
                                    This is <span className="font-medium text-gray-800 dark:text-white">Dashboard tab associated content</span>.
                                    Clicking another tab will toggle the visibility of this one for the next. The tab JavaScript swaps classes to
                                    control the content visibility and styling.
                                </TabItem>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>   */}
        </>
    );
}