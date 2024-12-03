import React from 'react';
import * as Icons from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

export default function ToolCard({ tool }: ToolCardProps) {
  const Icon = (Icons as any)[tool.icon] || Icons.Box;

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-md 
                 transition-all duration-200 flex flex-col gap-4 border 
                 border-gray-100 hover:border-violet-200"
    >
      <div className="flex items-start justify-between">
        <div className="p-2 bg-violet-50 rounded-lg group-hover:bg-violet-100 
                      transition-colors">
          <Icon className="w-6 h-6 text-violet-600" />
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium 
                         bg-${tool.category.toLowerCase()}-50 
                         text-${tool.category.toLowerCase()}-700`}>
          {tool.category}
        </span>
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {tool.name}
        </h3>
        <p className="text-sm text-gray-600">
          {tool.description}
        </p>
      </div>
    </a>
  );
}