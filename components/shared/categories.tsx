'use client'

import { cn } from '@/lib/utils';
import { useCategoryStore } from '@/store/category';
import React from 'react';


const cats = [
    { id: 1, name: 'Бургеры' },
    { id: 2, name: 'Комбо' },
    { id: 3, name: 'Закуски' },
    { id: 4, name: 'Коктейли' },
    { id: 5, name: 'Кофе' },
    { id: 6, name: 'Напитки' },
    { id: 7, name: 'Десерты' },
    { id: 8, name: 'Десерты' },
];
export const Categories: React.FC = () => {

    const activeCategoryId = useCategoryStore((state) => state.activeId);

    return (
        <div className='inline-flex gap-1 bg-gray-50 p-1 rounded-2xl text-sm  '>
            {cats.map(({ name, id }, i) => (
                <a key={i} className={cn('flex items-center font-bold rounded-2xl h-11 px-5',
                    activeCategoryId === id && 'bg-white shadow-md shadow-gray-200 text-primary')}
                    href={`/#${name}`} > 
                    <button>{name}</button>
                </a>
            ))}
        </div>
    );
};