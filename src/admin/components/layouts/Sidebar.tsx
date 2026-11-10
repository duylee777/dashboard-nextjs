'use client';

import Link from "next/link";
import { TextInput } from "flowbite-react";
import { LayoutDashboard, StickyNote, Users, LayoutList, Newspaper, Search, Tickets, Settings } from "lucide-react";
import { usePathname } from "next/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const MENU = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard},
    { name: 'Pages', href: '/admin/pages', icon: StickyNote},
    { name: 'Accounts', href: '/admin/accounts', icon: Users},
    { name: 'Categories', href: '/admin/categories', icon: LayoutList},
    { name: 'Posts', href: '/admin/posts', icon: Newspaper},
    { name: 'Tickets', href: '/admin/tickets', icon: Tickets},
];

export function Sidebar ({ isOpen, onClose }: SidebarProps) {
    const pathname = usePathname();

    return (
        <>
        {isOpen && (
            <div
                onClick={onClose}
                className="fixed inset-0 z-10 bg-gray-900/50 lg:hidden"
            />
        )}

        <aside id="sidebar" className={`fixed top-0 left-0 z-20 ${isOpen ? 'flex' : 'hidden'} flex-col shrink-0 w-64 h-full pt-16 font-normal duration-75 lg:flex transition-width`} aria-label="Sidebar">
            <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="flex flex-col flex-1 pt-5 pb-4 overflow-y-auto">
                    <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                        <ul className="pb-2 space-y-2">
                            <li>
                                <form action="#" method="GET" className="lg:hidden">
                                    <TextInput
                                        id="mobile-search"
                                        name="search"
                                        type="text"
                                        placeholder="Search"
                                        icon={Search}
                                    />
                                </form>
                            </li>
                            {MENU.map((item) => {
                                const Icon = item.icon;
                                const isActive = pathname === item.href;

                                return (
                                    <li key={item.href}>
                                        <Link
                                            href={item.href}
                                            className={`flex items-center p-2 text-base text-gray-900 rounded-lg group transition ${isActive ? 'bg-gray-100 dark:text-gray-200 dark:bg-gray-700' : 'hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700'}`}
                                        >
                                            <Icon 
                                                className={`w-6 h-6 text-gray-500 dark:text-gray-400 transition ${isActive ? 'text-gray-900 dark:text-white' : 'group-hover:text-gray-900 dark:group-hover:text-white'}`}
                                            />
                                            <span className="ml-3">{item.name}</span>
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="pt-2 space-y-2">
                            <Link href="admin/settings" className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700">
                                <Settings className="shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
                                <span className="ml-3">Settings</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    </>
    );
}