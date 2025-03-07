'use client'

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import { Category } from '@prisma/client';
import React from 'react';

type Props = {
    items: Category[]
}

export const Categories: React.FC<Props> = ({ items }) => {

    const activeCategoryId = useCategoryStore((state) => state.activeId);

    return (
        <div className='inline-flex gap-1 bg-gray-50 p-1 rounded-2xl text-sm  '>
            {items.map(({ name, id }, i) => (
                <a key={i} className={cn('flex items-center font-bold rounded-2xl h-11 px-5',
                    activeCategoryId === id && 'bg-white shadow-md shadow-gray-200 text-primary')}
                    href={`/#${name}`} >
                    <button>{name}</button>
                </a>
            ))}
        </div>
    );
};