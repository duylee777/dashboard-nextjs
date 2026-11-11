'use client';

import { useState, useTransition } from "react";
import { Spinner, Label, Select, Button, Modal, ModalHeader, ModalBody, ModalFooter } from "flowbite-react";
import { SquarePen } from "lucide-react";
import { TicketType } from "@/src/admin/types/ticket";

interface ChangeStatusTicketProps {
    ticket: TicketType | null;
    onSave: (updatedTicket: TicketType) => Promise<void>;
}

export default function ChangeStatusTicket({ ticket, onSave }: ChangeStatusTicketProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [ticketStatus, setTicketStatus] = useState<string>('cancel');
    const [isPending, startTransition] = useTransition();

    const handleOpen = () => {
        if (ticket) {
            setTicketStatus(ticket.ticket_status || 'cancel');
        }
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = () => {
        if (!ticket) return;

        startTransition(async () => {
            const updatedTicket: TicketType = {
                ...ticket,
                ticket_status: ticketStatus,
            };

            await onSave(updatedTicket);
            setIsOpen(false);
        });
    };

    return (
        <>
            <Button size="sm" color="yellow" outline onClick={handleOpen}>
                <SquarePen className="w-4 h-4 mr-2" />
                Change Status
            </Button>

            <Modal dismissible show={isOpen} onClose={handleClose}>
                <ModalHeader>
                    Change Status: &quot;{ticket?.ticket_code || ticket?.id || ''}&quot;
                </ModalHeader>
                <form onSubmit={handleSubmit}>
                    <ModalBody>
                        <div className="col-span-6">
                            <Label htmlFor="ticket_status" className="mb-2 block">
                                Ticket Status
                            </Label>
                            <Select
                                id="ticket_status"
                                name="ticket_status"
                                value={ticketStatus}
                                onChange={(e) => setTicketStatus(e.target.value)}
                                required
                            >
                                <option value="pending">Pending</option>
                                <option value="in_progress">In Progress</option>
                                <option value="completed">Completed</option>
                                <option value="cancel">Cancel</option>
                            </Select>
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button type="submit" disabled={isPending || !ticket}>
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
                </form>
            </Modal>
        </>
    );
}