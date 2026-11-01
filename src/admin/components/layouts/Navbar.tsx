'use client';

import { DarkThemeToggle } from 'flowbite-react';
import SwitchLanguage from './SwitchLanguage';
import UserDropdown from "./UserDropdown";
import NotificationDropdown from "./NotificationDropdown";
import MobileSidebarToggle from "./MobileSidebarToggle";
import TopbarSearch from './TopbarSearch';
import Image from "next/image";
import Link from "next/link";

interface NavbarProps {
  isOpen: boolean;
  onToggleSidebar: () => void;
}

export function Navbar ({ isOpen, onToggleSidebar }: NavbarProps) {
    return (
        <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="px-3 py-3 lg:px-5 lg:pl-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center justify-start">
                        <MobileSidebarToggle 
                            isOpen={isOpen} 
                            onToggle={onToggleSidebar} 
                        />
                        <Link href="#" className="flex gap-2 ml-2 md:mr-24">
                            <Image src="/assets/imgs/logo-phenikaa-uni-mini.png" alt="logo-phenikaa-uni-mini" width={30} height={30}/>
                            <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">ITC</span>
                        </Link>
                    </div>
                    <div className="flex items-center">
                        <div className="mr-4">
                            <TopbarSearch />
                        </div>
                        <NotificationDropdown />          
                        <DarkThemeToggle />
                        <SwitchLanguage />
                        <div className="flex items-center ml-3">
                            <UserDropdown />
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}