import type { Metadata } from "next";
import Page500 from "@/src/pages/components/Page500";

export const metadata: Metadata = {
    title: "500",
    description: "500",
};

export default function Page500Manager () {
    return (
        <>
            <Page500 />
        </>
    );
}