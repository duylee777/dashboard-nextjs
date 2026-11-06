'use client';

import { useState } from "react";
import { Label, TextInput, Textarea, Button, Select, Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { Plus } from "lucide-react";

export default function CreateCategory () {
    const [openModal, setOpenModal] = useState(false);

    return (
        <>
            <Button onClick={() => setOpenModal(true)}>
                <Plus className="w-5 h-5 mr-2 -ml-1" />
                Add category
            </Button>

            <Modal dismissible  show={openModal} onClose={() => setOpenModal(false)}>
                <ModalHeader>Add new category</ModalHeader>
                <ModalBody>
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <Label htmlFor="name">Name</Label>
                            <TextInput type="text" placeholder="Input name ..." required shadow />
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
                <ModalFooter>
                    <Button onClick={() => setOpenModal(false)}>Add page</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}