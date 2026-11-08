import PageBreadcrumb from "@/src/admin/components/common/PageBreadcrumb";
import PageTitle from "@/src/admin/components/common/PageTitle";
import AccountList from "@/src/admin/components/features/accounts/AccountList";

export default function AccountManager () {
    return (
        <>
            <PageBreadcrumb label="Danh sách tài khoản"/>
            <PageTitle title="Danh sách tài khoản" />
            <AccountList />
        </>
    );
}