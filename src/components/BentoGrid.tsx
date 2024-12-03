import React from 'react';
import { Tool } from '../types';
import ToolCard from './ToolCard';

interface BentoGridProps {
  tools: Tool[];
}

export default function BentoGrid({ tools }: BentoGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {tools.map((tool) => (
        <ToolCard key={tool.id} tool={tool} />
      ))}
    </div>
  );
}