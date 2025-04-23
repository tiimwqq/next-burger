import { cn } from '@/lib/utils';
import React from 'react';
import * as CartItem from './cart-item-details'
import { CartItemProps } from './cart-item-details/cart-item-details.types';
import { Trash2Icon } from 'lucide-react';

interface Props extends CartItemProps {
    className?: string;
}

export const CartDrawerItem: React.FC<Props> = ({
    id,
    imageUrl,
    details,
    name,
    price,
    quantity,
    className
}) => {
    return (
        <div className={cn(className, 'flex items-center gap-6 p-3 ')}>
            <CartItem.Image src={imageUrl} />
            <div className="flex-1">
                <CartItem.Info name={name} details={details} />
                <hr className="my-3" />
                <div className="flex items-center justify-between">
                    <CartItem.CountButton value={quantity} onClick={(type) => console.log(type)} />

                    <div className="flex items-center gap-3">
                        <CartItem.Price value={price} />
                        <Trash2Icon className='text-gray-400 cursor-pointer hover:text-gray-600' size={16}/>
                    </div>
                </div>
            </div>
        </div>
    );
};