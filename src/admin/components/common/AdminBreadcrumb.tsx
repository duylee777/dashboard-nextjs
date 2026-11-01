'use client';

import Link from "next/link";
import { Breadcrumb, BreadcrumbItem } from "flowbite-react";
import { LayoutDashboard } from "lucide-react";
import { usePathname } from "next/navigation";

interface BreadcrumbProps {
    label?: string;
}

const ROUTE_NAME_MAP: Record<string, string> = {
    dashboard: 'Dashboard',
    pages: 'Pages',
    accounts: 'Accounts',
    roles: 'Roles & Permissions',
    categories: 'Categories',
    posts: 'Posts',
    issues: 'Issues',
    settings: 'Settings',
};

export default function AdminBreadcrumb ({ label }: BreadcrumbProps) {
    const pathname = usePathname();

    // Gom nhãn tùy chỉnh ở cuối
    const endLabel = label ? label : [];

    // Tách URL (bỏ 'admin')
    const allSegments = pathname.split('/').filter((s) => s && s !== 'admin');

    // Nếu có endLabels, chỉ tự động lấy 1 cấp danh mục đầu tiên (VD: 'accounts')
    const autoSegments = endLabel.length > 0 ? allSegments.slice(0, 1) : allSegments;

    return (
        <Breadcrumb aria-label="Admin Breadcrumb">
            <BreadcrumbItem icon={LayoutDashboard}>
                <Link href="/admin/dashboard">Dashboard</Link>
            </BreadcrumbItem>

            {autoSegments.map((segment, index) => {
                const href = `/admin/${allSegments.slice(0, index + 1).join('/')}`;
                const autoLabel = ROUTE_NAME_MAP[segment] || segment.replace(/-/g, ' ');
                const isLast = !label && index === autoSegments.length - 1;

                if (isLast) {
                    return (
                        <BreadcrumbItem key={href}>
                            <span className="capitalize font-semibold">{autoLabel}</span>
                        </BreadcrumbItem>
                    );
                }

                return (
                    <BreadcrumbItem key={href}>
                        <Link href={href} className="capitalize">{autoLabel}</Link>
                    </BreadcrumbItem>
                );
            })}

            {label && (
                <BreadcrumbItem>
                    <span className="font-semibold">{label}</span>
                </BreadcrumbItem>
            )}
        </Breadcrumb>
    );
};