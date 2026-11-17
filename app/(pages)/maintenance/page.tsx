import type { Metadata } from "next";
import PageMaintenance from "@/src/pages/components/PageMaintenance";

export const metadata: Metadata = {
    title: "500",
    description: "500",
};

export default function PageMaintenanceManager () {
    return (
        <>
            <PageMaintenance />
        </>
    );
}