import { cn } from '@/lib/utils';
import React from 'react';
import { ProductCard } from './product-card';

interface Props {
    title: string;
    products: any[];
    className?: string;
    listClassName?: string;
    categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({
    title,
    products,
    className,
    listClassName,
    categoryId
}) => {
    return (
        <div className={cn(className) + 'my-4 mb-[50px]'} >
            <h2 className='text-2xl font-bold'>{title}</h2>


            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
                        name={product.name}
                        imageUrl={product.imageUrl}
                        price={product.items[0].price} 
                        description={products[0].description}                    
                        />
                ))}
            </div>
        </div>
    );
};