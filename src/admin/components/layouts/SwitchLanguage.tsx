'use client';

import { Dropdown, DropdownItem } from 'flowbite-react';
import "flag-icons/css/flag-icons.min.css";
import {  Languages } from "lucide-react";

export default function SwitchLanguage () {
    return (
        <Dropdown
            arrowIcon={false}
            inline
            label=""
            renderTrigger={() => (
                <button
                    type="button"
                    className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                    <Languages />
                </button>
            )}
        >
            <div className="text-base list-none bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700">
                <DropdownItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div className="inline-flex items-center gap-1">
                        <span className="fi fi-us"></span>            
                        English (US)
                    </div>
                </DropdownItem>
                <DropdownItem className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white">
                    <div className="inline-flex items-center gap-1">
                        <span className="fi fi-vn"></span>            
                        Vietnamese
                    </div>
                </DropdownItem>
            </div>
        </Dropdown>
    );
}