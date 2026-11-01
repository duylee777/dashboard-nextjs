'use client';

import { TextInput } from 'flowbite-react';
import { Search } from 'lucide-react';

export default function TopbarSearch() {
  return (
    <form action="#" method="GET" className="hidden lg:block lg:pl-3.5">
      <label htmlFor="topbar-search" className="sr-only">
        Search
      </label>
      <div className="mt-1 lg:w-96">
        <TextInput
          id="topbar-search"
          name="search"
          type="text"
          placeholder="Search"
          icon={Search}
        />
      </div>
    </form>
  );
}