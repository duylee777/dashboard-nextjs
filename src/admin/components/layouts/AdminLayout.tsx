'use client';

import { useState } from 'react';
import { Navbar } from "@/src/admin/components/layouts/Navbar";
import { Sidebar } from "@/src/admin/components/layouts/Sidebar";

export default function AdminLayout ({ children }: { children: React.ReactNode }) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleToggleSidebar = () => setIsSidebarOpen((prev) => !prev);
    const handleCloseSidebar = () => setIsSidebarOpen(false);

    return (
        <>
            <Navbar isOpen={isSidebarOpen} onToggleSidebar={handleToggleSidebar} />
            <div className="flex pt-16 overflow-hidden bg-gray-50 dark:bg-gray-900">
                <Sidebar isOpen={isSidebarOpen} onClose={handleCloseSidebar} />
                <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div>
                <div id="main-content" className="relative w-full h-full overflow-y-auto bg-gray-50 lg:ml-64 dark:bg-gray-900">
                    <main>
                        <div className="px-4 py-6">{children}</div>
                    </main>
                </div>
            </div>
        </>
    );
}