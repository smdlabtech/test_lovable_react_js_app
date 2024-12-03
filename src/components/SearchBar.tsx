import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  search: string;
  setSearch: (value: string) => void;
}

export default function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-5 w-5 text-gray-400" />
      </div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-xl 
                 leading-5 bg-white placeholder-gray-500 focus:outline-none 
                 focus:placeholder-gray-400 focus:ring-1 focus:ring-violet-500 
                 focus:border-violet-500 sm:text-sm"
        placeholder="Search tools and resources..."
      />
    </div>
  );
}