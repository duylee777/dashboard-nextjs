import type { Metadata } from "next";
import Page404 from "@/src/pages/components/Page404";

export const metadata: Metadata = {
    title: "404",
    description: "404",
};

export default function Page404Manager () {
    return (
        <>
            <Page404 />
        </>
    );
}