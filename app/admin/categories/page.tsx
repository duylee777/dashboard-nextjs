import PageBreadcrumb from "@/src/admin/components/common/PageBreadcrumb";
import PageTitle from "@/src/admin/components/common/PageTitle";
import CategoryList from "@/src/admin/components/features/categories/CategoryList";

export default function CategoryManager () {
    return (
        <>
            <PageBreadcrumb label="Danh sách danh mục" />
            <PageTitle title="Danh sách danh mục" />
            <CategoryList />
        </>
    );
}