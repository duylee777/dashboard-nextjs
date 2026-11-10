import PageBreadcrumb from "@/src/admin/components/common/PageBreadcrumb";
import PageTitle from "@/src/admin/components/common/PageTitle";
import CreatePost from "@/src/admin/components/features/posts/CreatePost";

export default function PostCreateManager () {
    return (
        <>
            <PageBreadcrumb label="Tạo mới bài viết"/>
            <PageTitle title="Tạo mới bài viết" />
            <CreatePost />
        </>
    );
}