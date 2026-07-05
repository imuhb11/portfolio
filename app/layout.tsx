import type { Metadata } from 'next';
import { Geist, Space_Grotesk } from 'next/font/google';
import './globals.css';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
  title: 'Bhumi Vijaykumar Hingu | Portfolio',
  description:
    'Computer Engineering student specializing in AI, ML, and software development. Explore projects, education, internships, and achievements.',
  keywords: ['Bhumi Hingu', 'portfolio', 'AI', 'machine learning', 'software developer'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geist.variable} ${spaceGrotesk.variable}`}>
        {children}
      </body>
    </html>
  );
}
