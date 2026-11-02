'use client';

import { Button } from "flowbite-react";
import { Trash } from "lucide-react";

export default function DeleteAccount () {
    return (
        <>
            {/* <button type="button" data-modal-target="delete-user-modal" data-modal-toggle="delete-user-modal" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                <Trash className="w-4 h-4 mr-2" />
                Delete user
            </button> */}
            <Button size="sm" color="red">
                <Trash className="w-4 h-4 mr-2" />
                Delete
            </Button>
        </>
    );
}