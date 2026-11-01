'use client';

import { Avatar, Dropdown, DropdownHeader, DropdownItem, DropdownDivider  } from 'flowbite-react';

export default function UserDropdown () {
    return (
        <Dropdown
            label={
            <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
                size="sm"
            />
            }
            arrowIcon={false}
            inline
        >
            <DropdownHeader>
                <span className="block text-sm">Neil Sims</span>
                <span className="block truncate text-sm font-medium">neil.sims@flowbite.com</span>
            </DropdownHeader>
            <DropdownItem href="/dashboard">Dashboard</DropdownItem>
            <DropdownItem href="/settings">Settings</DropdownItem>
            <DropdownItem href="/earnings">Earnings</DropdownItem>
            <DropdownDivider />
            <DropdownItem href="/logout">Sign out</DropdownItem>
        </Dropdown>
    );
}