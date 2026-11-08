'use client';

import Link from "next/link";
import { TextInput } from "flowbite-react";
import { Settings, Trash } from "lucide-react";

export default function FilterCategory () {
    return (
        <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
            <form className="lg:pr-3" action="#" method="GET">
                <label htmlFor="categories-search" className="sr-only">Search</label>
                <div className="relative mt-1 lg:w-64 xl:w-96">
                    <TextInput id="categories-search" placeholder="Search for categories" />
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
    );
}