import PageBreadcrumb from "@/src/admin/components/common/PageBreadcrumb";
import PageTitle from "@/src/admin/components/common/PageTitle";
import PageList from "@/src/admin/components/features/pages/PageList";

export default function PageManager () {
    return (
        <>
            <PageBreadcrumb label="Danh sách trang"/>
            <PageTitle title="Danh sách trang" />
            <PageList />
        </>
    );
}