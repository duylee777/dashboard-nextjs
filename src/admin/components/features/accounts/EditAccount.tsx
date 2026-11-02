'use client';

import { Button } from "flowbite-react";
import { SquarePen } from "lucide-react";

export default function EditAccount () {
    return (
        <>
            {/* <button type="button" data-modal-target="edit-user-modal" data-modal-toggle="edit-user-modal" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                <SquarePen className="w-4 h-4 mr-2" />
                Edit user
            </button> */}
            <Button size="sm" color="yellow">
                <SquarePen className="w-4 h-4 mr-2" />
                Edit
            </Button>
        </>
    );
}