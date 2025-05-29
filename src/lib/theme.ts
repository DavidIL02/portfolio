export type Theme = 'light' | 'dark';

export const themes = {
  light: {
    background: 'bg-white',
    text: 'text-gray-900',
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    accent: 'text-purple-600',
    border: 'border-gray-200',
    card: 'bg-white',
    hover: 'hover:bg-gray-50',
  },
  dark: {
    background: 'bg-gray-900',
    text: 'text-gray-100',
    primary: 'text-blue-400',
    secondary: 'text-gray-400',
    accent: 'text-purple-400',
    border: 'border-gray-700',
    card: 'bg-gray-800',
    hover: 'hover:bg-gray-700',
  },
} as const;

export const defaultTheme: Theme = 'dark'; 