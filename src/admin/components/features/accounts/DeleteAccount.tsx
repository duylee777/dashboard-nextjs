'use client';

import { useState, useTransition } from "react";
import { Spinner, Button, Modal, ModalHeader, ModalBody } from "flowbite-react";
import { CircleAlert, Trash } from "lucide-react";
import { AccountData } from "@/src/admin/types/account";

interface DeleteAccountProps {
    account: AccountData;
    onDelete: (id: string) => Promise<void>;
}

export default function DeleteAccount ({ account, onDelete }: DeleteAccountProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isPending, startTransition] = useTransition();

    const handleOpen = () => setIsOpen(true);
    const handleClose = () => setIsOpen(false);

    const handleDelete = () => {
        startTransition(async () => {
            try {
                await onDelete(account.id);
                setIsOpen(false); // Đóng modal khi thành công
            } catch (error) {
                console.error('Xóa tài khoản thất bại:', error);
            }
        });
    };

    return (
        <>
            <Button size="sm" color="red" onClick={handleOpen}>
                <Trash className="w-4 h-4 mr-2" />
                Delete
            </Button>

            <Modal show={isOpen} size="md" onClose={handleClose} popup>
                <ModalHeader />
                <ModalBody>
                    <div className="text-center">
                        <CircleAlert className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                        Are you sure you want to delete this product?
                        </h3>
                        <div className="flex justify-center gap-4">
                            <Button color="red" onClick={handleDelete}>
                                
                                {isPending ? (
                                    <div className="flex items-center gap-2">
                                        <Spinner size="sm" light />
                                        <span>Deleting...</span>
                                    </div>
                                ) : (
                                    'Yes, I am sure'
                                )}
                            </Button>
                            <Button color="alternative" onClick={handleClose} disabled={isPending}>
                                No, cancel
                            </Button>
                        </div>
                    </div>
                </ModalBody>
            </Modal>
        </>
    );
}