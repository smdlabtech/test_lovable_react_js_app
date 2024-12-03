import React, { useState, useMemo } from 'react';
import { Sparkles } from 'lucide-react';
import SearchBar from './components/SearchBar';
import CategoryFilter from './components/CategoryFilter';
import BentoGrid from './components/BentoGrid';
import { tools } from './data/tools';

function App() {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) ||
                          tool.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !selectedCategory || tool.category.toLowerCase() === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-8 h-8 text-violet-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Tools Explorer
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover and access a curated collection of powerful tools for AI, development, 
            marketing, and more.
          </p>
        </div>

        <SearchBar search={search} setSearch={setSearch} />
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          setSelectedCategory={setSelectedCategory} 
        />
        <BentoGrid tools={filteredTools} />
      </div>
    </div>
  );
}

export default App;