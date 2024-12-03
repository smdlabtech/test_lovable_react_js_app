import React from 'react';
import { categories } from '../data/categories';

interface CategoryFilterProps {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

export default function CategoryFilter({ selectedCategory, setSelectedCategory }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center my-6">
      <button
        onClick={() => setSelectedCategory(null)}
        className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                   ${!selectedCategory 
                     ? 'bg-violet-100 text-violet-800' 
                     : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
      >
        All
      </button>
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => setSelectedCategory(category.id)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
                     ${selectedCategory === category.id 
                       ? `bg-${category.color}-100 text-${category.color}-800` 
                       : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
}