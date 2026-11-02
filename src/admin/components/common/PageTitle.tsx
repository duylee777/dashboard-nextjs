'use client';

interface PageTitleProps {
    title ?: string;
}

export default function PageTitle ({ title }: PageTitleProps) {
    return (
        <div className="p-4">
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">{title ? title : ''}</h1>
        </div>
    );
}