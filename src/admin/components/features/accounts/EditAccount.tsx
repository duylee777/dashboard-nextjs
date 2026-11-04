'use client';

import { useState, useTransition } from "react";
import { Spinner, Label, TextInput, Textarea, Button, Select, Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { SquarePen } from "lucide-react";
import { AccountType } from "@/src/admin/types/account";

interface EditAccountProps {
    account: AccountType | null;
    onSave: (updateAccount: AccountType) => Promise<void>;
}

const DEFAULT_FORM: AccountType = {
    id: '',
    avatar: '',
    name: '',
    email: '',
    position: '',
    country: '',
    status: 'active',
    biography: '',
};

export default function EditAccount ({ account, onSave }: EditAccountProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState<AccountType>(DEFAULT_FORM);
    const [isPending, startTransition] = useTransition();

    // Khi bấm nút Edit: Đặt lại dữ liệu mới nhất từ props và mở Modal
    const handleOpen = () => {
        setFormData(account ?? DEFAULT_FORM);
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    // Lắng nghe sự thay đổi của các ô input
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // Xử lý nộp form
    // Hàm handleAction nhận tham số kiểu FormData nếu cần, hoặc tự đọc từ state nội bộ
    const handleAction = () => {
        startTransition(async () => {
            await onSave(formData);
            setIsOpen(false)
        });
    };

    return (
        <>
            <Button size="sm" color="yellow" outline onClick={handleOpen}>
                <SquarePen className="w-4 h-4 mr-2" />
                Edit
            </Button>

            {/* Edit User Modal */}
            <Modal dismissible show={isOpen} onClose={handleClose} >
                <ModalHeader>Add new user</ModalHeader>
                <form onSubmit={handleAction}>
                    <ModalBody>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <Label htmlFor="name">Name</Label>
                                <TextInput type="text" value={formData.name} onChange={handleChange} placeholder="Input first name ..." required shadow />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Label htmlFor="email">Email</Label>
                                <TextInput type="text" placeholder="Input email ..." required shadow />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Label htmlFor="position">Position</Label>
                                <TextInput type="text" placeholder="Input position ..." required shadow />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Label htmlFor="status">Status</Label>
                                <Select required>
                                    <option>Active</option>
                                    <option>Offline</option>
                                </Select>
                            </div>
                            <div className="col-span-6">
                                <Label htmlFor="typography">Typography</Label>
                                <Textarea placeholder="Input typography ..." required shadow rows={4} />
                            </div>
                        </div>
                    </ModalBody>
                </form>
                <ModalFooter>
                    <Button type="submit">
                        {isPending ? (
                            <div className="flex items-center gap-2">
                                <Spinner size="sm" light />
                                <span>Saving...</span>
                            </div>
                        ) : (
                            'Save changes'
                        )}
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    );
}