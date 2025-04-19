import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { Separator } from '@radix-ui/react-select';
import Image from 'next/image';
import { ChooseIngredients } from './choose-ingredients';

interface Props {
    imageUrl: string;
    name: string;
    textDetails?: string | null;
    className?: string;
}

export const ChooseProductForm: React.FC<Props> = ({
    name,
    imageUrl,

    textDetails,
    className
}) => {
    const totalPrice = 1000;
    return (
        <div className={cn(className, 'flex gap-5')}>
            <Image src={imageUrl} alt="" width={280} height={280} style={{ objectFit: 'contain' }} className='mr-8'/>
            <Separator className='w-[1px] bg-gray-300' />
            <div className="w-[490px]  p-7 flex flex-col items-start gap-3 pt-10">
                <h1 className='font-extrabold mb-2 text-3xl'>{name}</h1>
                <p className='text-gray-400 font-light mb-4'>{textDetails}</p>
                <Button className=' px-5 text-sm py-3' variant={'outline'}>
                    Добавить в корзину за {totalPrice} тг
                </Button>
                <ChooseIngredients />
            </div>
        </div>
    );
};