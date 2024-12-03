import { Tool } from '../types';

export const tools: Tool[] = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'OpenAI\'s powerful language model for conversation and assistance',
    category: 'AI',
    url: 'https://chat.openai.com',
    icon: 'bot'
  },
  {
    id: 'claude',
    name: 'Claude AI',
    description: 'Advanced AI assistant by Anthropic',
    category: 'AI',
    url: 'https://claude.ai',
    icon: 'brain'
  },
  {
    id: 'pexels',
    name: 'Pexels',
    description: 'Free stock photos and videos',
    category: 'Media',
    url: 'https://pexels.com',
    icon: 'image'
  },
  {
    id: 'notion',
    name: 'Notion',
    description: 'All-in-one workspace for notes and collaboration',
    category: 'Development',
    url: 'https://notion.so',
    icon: 'notebook'
  },
  {
    id: 'coursera',
    name: 'Coursera',
    description: 'Online courses from top universities',
    category: 'Learning',
    url: 'https://coursera.org',
    icon: 'graduation-cap'
  }
];