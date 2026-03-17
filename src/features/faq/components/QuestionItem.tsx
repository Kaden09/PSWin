'use client';

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface QuestionItemProps {
  title: string;
  desc: string;
}

function QuestionItem({ title, desc }: QuestionItemProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`flex flex-col gap-6 max-w-200 overflow-hidden border border-primary-border bg-secondary-background rounded-2xl px-10 py-5 cursor-pointer duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-19'}`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold">{title}</h2>
        <ChevronDown className={`duration-300 ${isOpen && 'rotate-180'}`} />
      </div>
      <p className="text-secondary-font">{desc}</p>
    </div>
  );
}

export default QuestionItem;
