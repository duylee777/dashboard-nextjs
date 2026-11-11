'use client';

import { useState } from "react";
import FilterTicket from "./FilterTicket";
import ExportTicket from "./ExportTicket";
import ChangeStatusTicket from "./ChangeStatusTicket";
import { TicketType } from "@/src/admin/types/ticket";
import { Button, Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const FIELDS = [
    'ticket_code', // Mã sự cố (TICKET-2600001) để SV / CB, GV tra cứu trạng thái của sự cố
    'ticket_type', // Loại sự cố ( sự cố mạng, sự cố máy in, ... )
    'ticket_description', // Mô tả sự cố
    'ticket_status', // Trạng thái của sự cố (Đang xử lý, Đã xử lý)
    //'requester_code', // Mã sinh viên/Mã nhân viên
    //'requester_role', // Vai trò: Sinh viên, Cán bộ/Giảng viên
    //'requester_mail', // Email do trường cung cấp
    //'requester_phone', // Số điện thoại
    //'metadata', // Dữ liệu sẽ được tùy biến dựa theo ticket_type và requester_role
    'action'
];

const TICKETS: TicketType[] = [
    { 
        id: '1', 
        ticket_code: 'ITC-26-00001',
        ticket_type: 'Sự cố tài khoản',
        ticket_description: 'Không vào được tài khoản email',
        ticket_status: 'processing',
        requester_code: '248905638',
        requester_role: 'student',
        requester_mail: 'st.248905638@phenikaa-uni.edu.vn',
        requester_phone: '0998777666',
        metadata: {
            mail_personal: "an.nguyenvan@gmail.com",
            course: "K20"
        }
    },
    { 
        id: '2', 
        ticket_code: 'ITC-26-00002',
        ticket_type: 'Sự cố mạng',
        ticket_description: 'Không vào được mạng tại phòng A4.205',
        ticket_status: 'processing',
        requester_code: 'PU2113',
        requester_role: 'lecturer',
        requester_mail: 'linh.nguyen@phenikaa-uni.edu.vn',
        requester_phone: '0998315853',
        metadata: {}
    },
    { 
        id: '3', 
        ticket_code: 'ITC-26-00003',
        ticket_type: 'Sự cố tài khoản',
        ticket_description: 'Không vào được tài khoản email',
        ticket_status: 'processing',
        requester_code: 'PU3333',
        requester_role: 'staff',
        requester_mail: 'duc.ngovan@phenikaa-uni.edu.vn',
        requester_phone: '0998333222',
        metadata: {
            mail_personal: "nvduc@gmail.com",
            department: "Ban truyền thông"
        }
    }
];

export default function TicketList () {
    const [tickets, setTickets] = useState<TicketType[]>(TICKETS);

    // Hàm xử lý lưu dữ liệu sau khi sửa
    const handleSaveTicket = async (updatedTicket: TicketType) => {
        // 1. Sau này gắn API thật tại đây:
        // await fetch(`/api/tickets/${updatedTicket.id}`, { method: 'PUT', body: JSON.stringify(updatedTicket) });

        // 2. Cập nhật state local để hiển thị ngay thay đổi lên giao diện
        setTickets((prev) =>
            prev.map((ticket) => (ticket.id === updatedTicket.id ? updatedTicket : ticket))
        );
    };

    // Xử lý Xóa
    const handleDeleteTicket = async (id: string) => {
        // Gọi API DELETE thực tế tại đây nếu có
        setTickets((prev) => prev.filter((ticket) => ticket.id !== id));
    };

    return (
        <>
            <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="w-full mb-1">
                    <div className="sm:flex">
                        <FilterTicket />
                        <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                            <ExportTicket />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="overflow-x-auto">
                    <div className="inline-block min-w-full align-middle">
                        <div className="overflow-hidden shadow">
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        {FIELDS.map((field) => {
                                            return (
                                                <TableHeadCell key={field}>{field}</TableHeadCell>
                                            );
                                        })}
                                    </TableRow>
                                </TableHead>
                                <TableBody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                    {TICKETS.map((ticket) => {
                                        return (
                                            <TableRow key={ticket.id}>
                                                <TableCell className="whitespace-nowrap">{ticket.ticket_code}</TableCell>
                                                <TableCell className="whitespace-nowrap">{ticket.ticket_type}</TableCell>
                                                <TableCell className="whitespace-nowrap">{ticket.ticket_description}</TableCell>
                                                <TableCell className="whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className={`h-2.5 w-2.5 rounded-full ${ticket.ticket_status == 'publish' ? 'bg-green-400' : 'bg-red-400'} mr-2`}></div>  
                                                        <span className="capitalize">{ticket.ticket_status}</span>
                                                    </div>
                                                </TableCell>
                                                <TableCell>
                                                    <div className="flex items-center gap-2">
                                                        <ChangeStatusTicket ticket={ticket} onSave={handleSaveTicket} />
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}