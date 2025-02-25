import { ArrowUpDown } from 'lucide-react';
import React from 'react';

export const SortPopup: React.FC = () => {
    return (
        <div className='inline-flex items-center gap-2 bg-gray-50 px-5 h-[52px] rounded-2xl cursor-pointer'>
            <ArrowUpDown size={16}/>
            <span>сортировка: </span>
            <b className='text-primary'>популярное</b>
        </div>
    );
};