'use client';

import { useState } from "react";
import Image from "next/image";
import AdminPaginate from "./AdminPaginate";
import FilterAccount from "./FilterAccount";
import CreateAccount from "./CreateAccount";
import EditAccount from "./EditAccount";
import DeleteAccount from "./DeleteAccount";
import ExportAccount from "./ExportAccount";
import { AccountData } from "@/src/admin/types/account";
import { Checkbox, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";

const FIELDS = [
    { name: 'name' },
    { name: 'biography' },
    { name: 'position' },
    { name: 'country' },
    { name: 'status' },
    { name: 'actions' },
];

const ACCOUNTS: AccountData[] = [
    { 
        id: '1',
        avatar: '/assets/demo/neil-sims.png', 
        name: 'Neil Sims', 
        email: 'neil.sims@flowbite.com',
        position: 'Front-end developer',
        country: 'United States',
        status: 'active',
        biography: 'I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.'
    },
    { 
        id: '2',
        avatar: '/assets/demo/roberta-casas.png', 
        name: 'Roberta Casas', 
        email: 'roberta.casas@flowbite.com',
        position: 'Designer',
        country: 'Spain',
        status: 'offline',
        biography: 'I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.'
    },
    { 
        id: '3',
        avatar: '/assets/demo/jese-leos.png', 
        name: 'Jese Leos', 
        email: 'jese.leos@flowbite.com',
        position: 'Marketing',
        country: 'United States',
        status: 'active',
        biography: 'I love working with React and Flowbites to create efficient and user-friendly interfaces. In my spare time, I enjoys baking, hiking, and spending time with my family.'
    },
];

export default function AccountList () {
    const [accounts, setAccounts] = useState<AccountData[]>(ACCOUNTS);

    // Hàm xử lý lưu dữ liệu sau khi sửa
    const handleSaveAccount = async (updatedAccount: AccountData) => {
        // 1. Sau này gắn API thật tại đây:
        // await fetch(`/api/accounts/${updatedAccount.id}`, { method: 'PUT', body: JSON.stringify(updatedAccount) });

        // 2. Cập nhật state local để hiển thị ngay thay đổi lên giao diện
        setAccounts((prev) =>
            prev.map((acc) => (acc.id === updatedAccount.id ? updatedAccount : acc))
        );
    };

    // Xử lý Xóa
    const handleDeleteAccount = async (id: string) => {
        // Gọi API DELETE thực tế tại đây nếu có
        setAccounts((prev) => prev.filter((acc) => acc.id !== id));
    };

    return (
    <>
        {/* filter + create + export */}
        <div className="p-4 bg-white block sm:flex items-center justify-between border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
            <div className="w-full mb-1">
                <div className="sm:flex">
                    <FilterAccount />
                    <div className="flex items-center ml-auto space-x-2 sm:space-x-3">
                        <CreateAccount />
                        <ExportAccount />
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
                                    <TableHeadCell className="p-4">
                                        <Checkbox />
                                    </TableHeadCell>
                                    {FIELDS.map((field) => {
                                        return (
                                            <TableHeadCell key={field.name}>{field.name}</TableHeadCell>
                                        );
                                    })}
                                </TableRow>
                            </TableHead>
                            <TableBody className="divide-y">
                                {ACCOUNTS.map((account) => {
                                    return (
                                        <TableRow key={account.id}>
                                            <TableCell className="p-4">
                                                <Checkbox />
                                            </TableCell>
                                            <TableCell className="whitespace-nowrap space-x-2">
                                                <div className="inline-block">
                                                    <Image src={account.avatar} alt={account.name} className="w-10 h-10 rounded-full object-cover" width={40} height={40}/>
                                                </div>
                                                <div className="inline-block">
                                                    <div className="text-base font-semibold text-gray-900 dark:text-white">{account.name}</div>
                                                    <div className="">{account.email}</div>
                                                </div>
                                            </TableCell>
                                            <TableCell className="max-w-sm xl:max-w-xs truncate">{account.biography}</TableCell>
                                            <TableCell className="whitespace-nowrap">{account.position}</TableCell>
                                            <TableCell className="whitespace-nowrap">{account.country}</TableCell>
                                            <TableCell className="whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className={`h-2.5 w-2.5 rounded-full ${account.status == 'active' ? 'bg-green-400' : 'bg-red-400'} mr-2`}></div>  
                                                    <span className="capitalize">{account.status}</span>
                                                </div>
                                            </TableCell>
                                            <TableCell>
                                                <div className="flex items-center gap-2">
                                                    <EditAccount account={account} onSave={handleSaveAccount} />
                                                    <DeleteAccount account={account} onDelete={handleDeleteAccount} />
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

        <AdminPaginate />
    </>
    );
}