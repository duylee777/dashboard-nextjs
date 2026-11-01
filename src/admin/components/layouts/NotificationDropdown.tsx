'use client';

import { Dropdown, DropdownItem, DropdownDivider } from 'flowbite-react';
import { Bell, MessageCircleText, Eye } from 'lucide-react';
import Image from 'next/image';

export default function NotificationDropdown() {
  return (
    <Dropdown
      arrowIcon={false}
      inline
      label=""
      renderTrigger={() => (
        <button
          type="button"
          className="p-2 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
        >
          <span className="sr-only">View notifications</span>
          <Bell className="w-6 h-6" />
        </button>
      )}
      className="w-full max-w-sm rounded-lg shadow-lg"
    >
      {/* Tiêu đề Dropdown */}
      <div className="block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        Notifications
      </div>
      <DropdownDivider />

      {/* Danh sách thông báo */}
      <div className="divide-y divide-gray-100 dark:divide-gray-600">
        {/* Thông báo 1 */}
        <DropdownItem href="#" className="flex px-4 py-3 whitespace-normal hover:bg-gray-100 dark:hover:bg-gray-600">
          <div className="relative shrink-0">
            <Image src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Bonnie Green" className="rounded-full w-11 h-11" width={40} height={40} />
            <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 border border-white rounded-full bg-blue-700 dark:border-gray-700">
              <MessageCircleText className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="w-full pl-3 text-left">
            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
              New message from <span className="font-semibold text-gray-900 dark:text-white">Bonnie Green</span>: {"Hey, what's up? All set for the presentation?"}
            </div>
            <div className="text-xs font-medium text-blue-700 dark:text-blue-500">a few moments ago</div>
          </div>
        </DropdownItem>

        {/* Thông báo 2 */}
        <DropdownItem href="#" className="flex px-4 py-3 whitespace-normal hover:bg-gray-100 dark:hover:bg-gray-600">
          <div className="relative shrink-0">
            <Image src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Jese Leos" className="rounded-full w-11 h-11" width={40} height={40} />
            <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-gray-900 border border-white rounded-full dark:border-gray-700">
              <MessageCircleText className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="w-full pl-3 text-left">
            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">Jese leos</span> and <span className="font-medium text-gray-900 dark:text-white">5 others</span> started following you.
            </div>
            <div className="text-xs font-medium text-blue-700 dark:text-blue-500">10 minutes ago</div>
          </div>
        </DropdownItem>

        {/* Thông báo 3 */}
        <DropdownItem href="#" className="flex px-4 py-3 whitespace-normal hover:bg-gray-100 dark:hover:bg-gray-600">
          <div className="relative shrink-0">
            <Image src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Joseph Mcfall" className="rounded-full w-11 h-11" width={40} height={40} />
            <div className="absolute flex items-center justify-center w-5 h-5 ml-6 -mt-5 bg-red-600 border border-white rounded-full dark:border-gray-700">
              <MessageCircleText className="w-3 h-3 text-white" />
            </div>
          </div>
          <div className="w-full pl-3 text-left">
            <div className="text-gray-500 font-normal text-sm mb-1.5 dark:text-gray-400">
              <span className="font-semibold text-gray-900 dark:text-white">Joseph Mcfall</span> and <span className="font-medium text-gray-900 dark:text-white">141 others</span> love your story. See it and view more stories.
            </div>
            <div className="text-xs font-medium text-blue-700 dark:text-blue-500">44 minutes ago</div>
          </div>
        </DropdownItem>
      </div>

      {/* Chân Dropdown */}
      <DropdownDivider />
      <DropdownItem href="#" className="block py-2 text-base font-normal text-center text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:underline">
        <div className="inline-flex items-center justify-center w-full">
          <Eye className="w-5 h-5 mr-2" />
          View all
        </div>
      </DropdownItem>
    </Dropdown>
  );
}