'use client';

import Link from "next/link";
import Image from "next/image";
import ImgMaintenance from "@/public/assets/imgs/maintenance.svg";
import { ChevronLeft } from "lucide-react";

export default function PageMaintenance () {
    return (
        <main className="bg-gray-50 dark:bg-gray-900">
            <div className="flex flex-col justify-center items-center px-6 mx-auto h-screen xl:px-0 dark:bg-gray-900">
                <div className="block mb-5 md:max-w-md">
                    <Image src={ImgMaintenance} alt="maintenance image" loading="eager" />
                </div>
                <div className="text-center xl:max-w-4xl">
                    <h1 className="mb-3 text-2xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl dark:text-white">Under Maintenance</h1>
                    <p className="mb-5 text-base font-normal text-gray-500 md:text-lg dark:text-gray-400">Sorry for the inconvenience but we&apos;re performing some maintenance at the moment. If you need to you can always <Link href="#" className="text-primary-700 hover:underline dark:text-primary-500">contact us</Link>, otherwise we&apos;ll be back online shortly!.</p>
                    <Link href="/" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-3 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                        <ChevronLeft className="mr-2 -ml-1 w-5 h-5"  />
                        <span>Go back home</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}