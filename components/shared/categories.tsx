import { cn } from '@/lib/utils';
import React from 'react';


const cats = ['Пиццы', 'Комбо', 'Закуски', 'Коктейли', 'Кофе', 'Напитки', 'Десерты', 'Десерты'];
const activeIndex = 0;
export const Categories: React.FC = () => {
    return (
        <div className='inline-flex gap-1 bg-gray-50 p-1 rounded-2xl text-sm mt-3 '>
            {cats.map((item, i) => (
                <a key={i} href="" className={cn( 'flex items-center font-bold rounded-2xl h-11 px-5',
                 activeIndex === i && 'bg-white shadow-md shadow-gray-200 text-primary')} >
                    <button>{item}</button>
                </a>
            ))}
        </div>
    );
};