import '../styles/globals.css';

import { ReactNode } from 'react';
import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';

const workSans = Work_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FAQ accordion',
  description: 'front end mentor challenge by Adam Ridhwan',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body className={`${workSans.className} min-h-[100dvh]`}>
        {children}
        <footer className='flex flex-col items-center py-10'>
          <div>
            <div>
              Challenge by{' '}
              <a
                href='https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz'
                target='_blank'
                className='text-blue-500 underline'
              >
                Frontend Mentor
              </a>
            </div>
            <div>
              Coded by{' '}
              <a href='https://www.adamridhwan.com/' target='_blank' className='text-blue-500 underline'>
                Adam Ridhwan
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
