'use client';

import { useState } from "react";
import { Label, TextInput, Textarea, Button, Select, Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { Plus } from "lucide-react";

export default function CreateAccount () {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>
                <Plus className="w-5 h-5 mr-2 -ml-1" />
                Add user
            </Button>

            {/* Add User Modal */}
            <Modal dismissible  show={openModal} onClose={() => setOpenModal(false)}>
                <ModalHeader>Add new user</ModalHeader>
                <ModalBody>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <Label htmlFor="first-name">First Name</Label>
                            <TextInput type="text" placeholder="Input first name ..." required shadow />
                        </div>
                        <div className="col-span-6 sm:col-span-3">
                            <Label htmlFor="last-name">Last Name</Label>
                            <TextInput type="text" placeholder="Input last name ..." required shadow />
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
                <ModalFooter>
                    <Button onClick={() => setOpenModal(false)}>Add user</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}