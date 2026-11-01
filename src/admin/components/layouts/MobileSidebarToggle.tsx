'use client';

import { TextAlignStart, X } from 'lucide-react'; // Hoặc Lucide icons

interface MobileSidebarToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

export default function MobileSidebarToggle({ isOpen, onToggle }: MobileSidebarToggleProps) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls="sidebar"
      className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700"
    >
      <span className="sr-only">Toggle sidebar</span>
      {isOpen ? (
        <X className="w-6 h-6" />
      ) : (
        <TextAlignStart className="w-6 h-6" />
      )}
    </button>
  );
}