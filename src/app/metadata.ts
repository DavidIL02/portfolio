import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'David Josué  Ibáñez Leal - Portfolio',
  description: 'Full-stack developer portfolio showcasing projects and skills',
  keywords: ['developer', 'portfolio', 'react', 'typescript', 'next.js'],
  authors: [{ name: 'David Josué Ibáñez Leal' }],
  creator: 'David Josué  Ibáñez Leal',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://your-portfolio.com',
    title: 'David Josué  Ibáñez Leal - Portfolio',
    description: 'Full-stack developer portfolio showcasing projects and skills',
    siteName: 'Your Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Josué  Ibáñez Leal - Portfolio',
    description: 'Full-stack developer portfolio showcasing projects and skills',
    creator: '@yourusername',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
}; 