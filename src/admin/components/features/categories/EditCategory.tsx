'use client';

import { useState, useTransition } from "react";
import { Spinner, Label, TextInput, Textarea, Button, Select, Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { SquarePen } from "lucide-react";
import { CategoryType } from "@/src/admin/types/category";

interface EditCategoryProps {
    category: CategoryType | null;
    onSave: (updateCategory: CategoryType) => Promise<void>
}

const DEFAULT_CATEGORY: CategoryType = {
    id: '',
    name: '',
    slug: '',
    parent: '',
    language: '',
    description: '',
    createdBy: '',
    status: 'inactive',
}

export default function EditCategory ({ category, onSave}: EditCategoryProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [formData, setFormData] = useState<CategoryType>(DEFAULT_CATEGORY);
    const [isPending, startTransition] = useTransition();

    // Khi bấm nút Edit: Đặt lại dữ liệu mới nhất từ props và mở Modal
    const handleOpen = () => {
        setFormData(category ?? DEFAULT_CATEGORY);
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

            <Modal dismissible show={isOpen} onClose={handleClose} >
                <ModalHeader>Edit &quot;{formData.name}&quot;</ModalHeader>
                <form onSubmit={handleAction}>
                    <ModalBody>
                        <div className="grid grid-cols-6 gap-6">
                            <div className="col-span-6 sm:col-span-3">
                                <Label htmlFor="name">Name</Label>
                                <TextInput type="text" value={formData.name} onChange={handleChange} placeholder="Input name ..." required shadow />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Label htmlFor="slug">Slug</Label>
                                <TextInput type="text" placeholder="Input slug ..." required shadow />
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Label htmlFor="category-parent">Category Parent</Label>
                                <Select required>
                                    <option>Original</option>
                                    <option>Accounts</option>
                                    <option>Pages</option>
                                    <option>Categories</option>
                                </Select>
                            </div>
                            <div className="col-span-6 sm:col-span-3">
                                <Label htmlFor="language">Language</Label>
                                <Select required>
                                    <option>Vietnamese</option>
                                    <option>English</option>
                                </Select>
                            </div>
                            <div className="col-span-6">
                                <Label htmlFor="description">Description</Label>
                                <Textarea placeholder="Input description ..." required shadow rows={4} />
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