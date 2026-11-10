import PageBreadcrumb from "@/src/admin/components/common/PageBreadcrumb";
import PageTitle from "@/src/admin/components/common/PageTitle";
import TicketList from "@/src/admin/components/features/tickets/TicketList";

export default function IncidentManager () {
    return (
        <>
            <PageBreadcrumb label="Danh sách sự cố"/>
            <PageTitle title="Danh sách sự cố" />
            <TicketList />
        </>
    );
}