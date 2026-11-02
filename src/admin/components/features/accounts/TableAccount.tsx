'use client';

import Image from "next/image";
import { SquarePen, Trash } from "lucide-react";

const FIELDS = [
    { name: 'name' },
    { name: 'biography' },
    { name: 'position' },
    { name: 'country' },
    { name: 'status' },
    { name: 'actions' },
];

const ACCOUNTS = [
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

export default function TableAccount () {
    return (
        <div className="flex flex-col">
            <div className="overflow-x-auto">
                <div className="inline-block min-w-full align-middle">
                    <div className="overflow-hidden shadow">
                        <table className="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600">
                            <thead className="bg-gray-100 dark:bg-gray-700">
                                <tr>
                                    <th scope="col" className="p-4">
                                        <div className="flex items-center">
                                            <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="checkbox-all" className="sr-only">checkbox</label>
                                        </div>
                                    </th>
                                    {FIELDS.map((field) => {
                                        return (
                                            <th key={field.name} scope="col" className="p-4 text-xs font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                                                {field.name}
                                            </th>
                                        );
                                    })}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700">
                                {ACCOUNTS.map ((account) => {
                                    return (
                                        <tr key={account.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                                            <td className="w-4 p-4">
                                                <div className="flex items-center">
                                                    <input id="checkbox-1" aria-describedby="checkbox-1" type="checkbox" className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" />
                                                    <label htmlFor="checkbox-1" className="sr-only">checkbox</label>
                                                </div>
                                            </td>
                                            <td className="flex items-center p-4 mr-12 space-x-6 whitespace-nowrap">
                                                <Image src={account.avatar} alt={account.name} className="w-10 h-10 rounded-full object-cover" width={40} height={40}/>
                                                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                                                    <div className="text-base font-semibold text-gray-900 dark:text-white">{account.name}</div>
                                                    <div className="text-sm font-normal text-gray-500 dark:text-gray-400">{account.email}</div>
                                                </div>
                                            </td>
                                            <td className="max-w-sm p-4 overflow-hidden text-base font-normal text-gray-500 truncate xl:max-w-xs dark:text-gray-400">{account.biography}</td>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{account.position}</td>
                                            <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white">{account.country}</td>
                                            <td className="p-4 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                                                <div className="flex items-center">
                                                    <div className={`h-2.5 w-2.5 rounded-full ${account.status == 'active' ? 'bg-green-400' : 'bg-red-400'} mr-2`}></div>  
                                                    <span className="capitalize">{account.status}</span>
                                                </div>
                                            </td>
                                            <td className="p-4 space-x-2 whitespace-nowrap">
                                                <button type="button" data-modal-target="edit-user-modal" data-modal-toggle="edit-user-modal" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                                    <SquarePen className="w-4 h-4 mr-2" />
                                                    Edit user
                                                </button>
                                                <button type="button" data-modal-target="delete-user-modal" data-modal-toggle="delete-user-modal" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900">
                                                    <Trash className="w-4 h-4 mr-2" />
                                                    Delete user
                                                </button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}