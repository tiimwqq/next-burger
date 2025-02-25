import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';

interface Props {
    id: number;
    name: string;
    description?: string;
    price: number;
    imageUrl: string;
    className?: string;
}

export const ProductCard: React.FC<Props> = ({ id, name, price, imageUrl, description}) => {
    return (
        <div className='flex justify-center flex-col max-w-[280px] min-h-[260px] max-h-[440px] my-5 group'>
            <Link href={`/product/${id}`}>
                <div className="  p-6  rounded-md bg-gray-100 ">
                    <Image src={imageUrl} alt="" width={230} height={230} className='w-[220px] h-[220px] group-hover:-translate-y-1 transition duration-300' />
                </div>
                <h2 className='text-lg font-bold mt-3'>{name}</h2>
                <p className='text-sm text-gray-400 flex flex-wrap my-3'>{description}</p>
                <div className="flex items-center justify-between ">
                    <span className='text-lg'>от <b>{price} тг</b> </span>
                    <Button variant={'secondary'}>
                        <Plus className='mr-2' size={18}/>
                        Добавить</Button>
                </div>
            </Link>
        </div>
    );
};