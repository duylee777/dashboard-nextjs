import PageBreadcrumb from "@/src/admin/components/common/PageBreadcrumb";
import PageTitle from "@/src/admin/components/common/PageTitle";
import PostList from "@/src/admin/components/features/posts/PostList";

export default function PageManager () {
    return (
        <>
            <PageBreadcrumb label="Danh sách bài viết"/>
            <PageTitle title="Danh sách bài viết" />
            <PostList />
        </>
    );
}