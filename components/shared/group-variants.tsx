'use client'

import { cn } from '@/lib/utils';
import React from 'react';

type Variant = {
    name: string;
    value: string;
    disabled?: boolean;
}

interface Props {
    className?: string;
    items: readonly Variant[];
    defaultValue?: string;
    onClickVariant?: (value: Variant['value']) => void;
    selectedValue?: Variant['value'];
}

export const GroupVariants: React.FC<Props> = ({ className, items, onClickVariant, selectedValue }) => {
    return (
        <div className={cn(className, 'flex justify-between bg-[#f3f3f7] rounded-3xl p-1 select-none')}>
            {items.map(item => (
                <button key={item.value} onClick={() =>onClickVariant?.(item.value)}
                    className={cn('flex items-center justify-center cursor-pointer h-[30px] flex-1 px-5 rounded-3xl transition-all duration-400 text-sm',
                        {
                            'bg-white shadow ': item.value === selectedValue,
                            'text-gray-500 opacity-50 pointer-events-none': item.disabled
                        }
                    )}>
                    {item.name}
                </button>
            ))}
        </div>
    );
};