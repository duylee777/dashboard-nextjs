'use client';

import Link from "next/link";
import { Button } from "flowbite-react";
import { Download } from "lucide-react";

export default function ExportAccount () {
    return (
        <>
            <Button as={Link} color="light" href="#">
                <Download className="w-5 h-5 mr-2 -ml-1" />
                Export
            </Button>
        </>
    ); 
}