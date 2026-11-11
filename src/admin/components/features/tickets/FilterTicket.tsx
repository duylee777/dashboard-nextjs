'use client';

import Link from "next/link";
import { TextInput } from "flowbite-react";
import { Settings } from "lucide-react";

export default function FilterTicket () {
    return (
        <div className="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
            <form className="lg:pr-3" action="#" method="GET">
                <label htmlFor="tickets-search" className="sr-only">Search</label>
                <div className="relative mt-1 lg:w-64 xl:w-96">
                    <TextInput id="tickets-search" placeholder="Search for tickets" />
                </div>
            </form>
            <div className="flex items-center pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0">
                <Link href="#" className="p-1 text-gray-500 rounded hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                    <Settings className="w-6 h-6" />
                </Link>
            </div>
        </div>
    );
}