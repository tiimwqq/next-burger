'use client'

import { cn } from '@/lib/utils';
import { useState } from 'react';

interface Props {
  name: string;
  details: string;
  className?: string;
}


export const CartItemInfo: React.FC<Props> = ({ name, details, className }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldTruncate = details.length > 70;
  const displayText = shouldTruncate && !isExpanded
    ? `${details.slice(0, 70)}...`
    : details;

  const toggleExpand = () => {
    if (shouldTruncate) {
      setIsExpanded(prev => !prev);
    }
  };

  return (
    <div>
      <div className={cn('flex items-center justify-between', className)}>
        <h2 className="text-lg font-bold flex-1 leading-6">{name}</h2>
      </div>
      <p
        onClick={toggleExpand}
        className={cn(
          'text-xs text-gray-400 w-[90%] transition-all',
          shouldTruncate ? 'cursor-pointer hover:text-gray-500' : ''
        )}
      >
        {displayText}
      </p>
    </div>
  );
};
