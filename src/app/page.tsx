'use client';

import { useState } from 'react';
import Image from 'next/image';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = [
  {
    id: 'item-1',
    question: 'What is Frontend Mentor, and how will it help me?',
    answer: `Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It&apos;s suitable for all levels and ideal for portfolio building.`,
  },
  {
    id: 'item-2',
    question: 'Is Frontend Mentor free?',
    answer: `Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.`,
  },
  {
    id: 'item-3',
    question: 'Can I use Frontend Mentor projects in my portfolio?',
    answer: `Yes, you can use projects completed on Frontend Mentor in your portfolio. Its an excellent way to showcase your skills to potential employers!`,
  },
  {
    id: 'item-4',
    question: 'How can I get help if Im stuck on a Frontend Mentor challenge?',
    answer: `The best place to get help is inside Frontend Mentors Discord community. Theres a help channel where you can ask questions and seek support from other community members.`,
  },
];

export default function Home() {
  const [openItem, setOpenItem] = useState('item-1');

  return (
    <main className='bg-light-pink relative flex min-h-[100dvh] justify-center'>
      <Image
        priority
        src='/background-pattern-mobile.svg'
        alt='background pattern'
        width={500}
        height={250}
        className='absolute top-0 z-10 w-full md:hidden'
      />

      <div className='absolute h-96 w-full'>
        <Image
          priority
          src='/background-pattern-desktop.svg'
          alt='background pattern'
          fill
          className='hidden w-full object-cover md:block'
        />
      </div>

      <div className='relative z-20 mx-5 mt-32 flex h-max w-full flex-col gap-4 rounded-lg bg-white p-5 shadow-2xl md:mt-56 md:w-[700px] md:p-8'>
        <div className='flex flex-row items-center gap-6'>
          <div className='relative aspect-square w-7'>
            <Image src='/icon-star.svg' alt='icon' fill className='object-cover' />
          </div>

          <h1 className='text-4xl font-semibold'>FAQs</h1>
        </div>

        <Accordion type='single' collapsible className='w-full' value={openItem} onValueChange={setOpenItem}>
          {FAQ.map(({ id, question, answer }, index) => (
            <AccordionItem
              key={id}
              value={id}
              className={index !== FAQ.length - 1 ? 'border-b border-b-muted' : ''}
            >
              <AccordionTrigger className='group/item'>
                <p className='w-full group-hover/item:text-purple-600'>{question}</p>
                <div className='relative aspect-square h-8'>
                  <Image
                    src={openItem === id ? '/icon-minus.svg' : '/icon-plus.svg'}
                    alt='icon'
                    fill
                    className='object-cover'
                  />
                </div>
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </main>
  );
}
