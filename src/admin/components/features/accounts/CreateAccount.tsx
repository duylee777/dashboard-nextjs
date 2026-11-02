'use client';

import { Button } from "flowbite-react";
import { Plus } from "lucide-react";

export default function CreateAccount () {
    return (
        <>
            <Button>
                <Plus className="w-5 h-5 mr-2 -ml-1" />
                Add user
            </Button>
        </>
    );
}