export interface Tool {
  id: string;
  name: string;
  description: string;
  category: 'AI' | 'Development' | 'Marketing' | 'Media' | 'Data' | 'Learning';
  url: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  description: string;
}