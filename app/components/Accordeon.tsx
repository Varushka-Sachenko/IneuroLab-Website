'use client';

import { useState } from 'react';

interface AccordionProps {
  title: string;
  content: React.ReactNode;
}

export default function Accordion({ title, content }: AccordionProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg">
      <button
        className="w-full px-4 py-4 text-left flex justify-between items-center hover:bg-gray-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold">{title}</span>
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      
      {isOpen && (
        <div className="px-4 py-4 border-t bg-gray-50">
          {content}
        </div>
      )}
    </div>
  );
}