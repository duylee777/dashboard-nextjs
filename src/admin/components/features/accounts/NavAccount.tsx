'use client';

import { Settings, Trash, Download, Plus } from "lucide-react";
import Link from "next/link";
import { Button, TextInput } from "flowbite-react";

export default function NavAccount () {
    return (
        <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full mb-1">
                <div className="sm:flex">
                    <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                        <form className="lg:pr-3" action="#" method="GET">
                            <label htmlFor="users-search" className="sr-only">Search</label>
                            <div className="relative mt-1 lg:w-64 xl:w-96">
                                <TextInput id="users-search" placeholder="Search for users" />
                            </div>
                        </form>
                        <div className="flex items-center pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0">
                            <Link href="#" className="p-1 text-gray-500 rounded hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <Settings className="w-6 h-6" />
                            </Link>
                            <Link href="#" className="p-1 text-gray-500 rounded hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                                <Trash className="w-6 h-6" />
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                        <Button>
                            <Plus className="w-5 h-5 mr-2 -ml-1" />
                            Add user
                        </Button>
                        <Button as={Link} color="light" href="#">
                            <Download className="w-5 h-5 mr-2 -ml-1" />
                            Export
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}