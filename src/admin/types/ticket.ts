export interface TicketType {
    id: string; 
    ticket_code: string; // Mã sự cố (TICKET-2600001) để SV / CB, GV tra cứu trạng thái của sự cố
    // ticket_title: string; // Tiêu đề sự cố
    ticket_type: string; // Loại sự cố ( sự cố mạng, sự cố máy in, ... )
    ticket_description: string; // Mô tả sự cố
    ticket_status: string; // Trạng thái của sự cố (Đang xử lý, Đã xử lý)
    requester_code: string; // Mã sinh viên/Mã nhân viên
    requester_role: string; // Vai trò: Sinh viên, Cán bộ/Giảng viên
    requester_mail: string; // Email do trường cung cấp
    requester_phone: string; // Số điện thoại
    metadata: Record<string, unknown>; // Dữ liệu sẽ được tùy biến dựa theo ticket_type và requester_role
}

export type CreateIncidentInput = Omit<TicketType, 'id'>;