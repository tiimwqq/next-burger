'use client'

import { cn } from '@/lib/utils';
import React, { useEffect } from 'react';
import { ProductCard } from './product-card';
import { useIntersection } from 'react-use';
import { useCategoryStore } from '@/store/category';
import { Prisma } from '@prisma/client';

type ProductWithItems = Prisma.ProductGetPayload<{
  include: { productItems: true; ingredients: true };
}>;

interface Props {
    title: string;
    products: ProductWithItems[];
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
    const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
    const intersectionRef = React.useRef<HTMLDivElement>(null);// создаем реф чтобы прикрутить его к обьекту при скролле
    const intersection = useIntersection(intersectionRef as React.RefObject<HTMLElement>, { threshold: 0.5 });//threshold - процент скролла(порог)

    useEffect(() => {
        if (intersection?.isIntersecting) { // если элемент в зоне видимости нашего экрана
            setActiveCategoryId(categoryId);
        }
    }, [categoryId, title, intersection, setActiveCategoryId])


    return (
        <div className={cn(className) + 'my-4 mb-[50px]'} id={title} ref={intersectionRef}>
            <h2 className='text-2xl font-bold'>{title}</h2>


            <div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
                {
                
                products
                    .map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.productItems?.[0]?.price ?? 0}
                            description={products?.[0]?.description ?? ""}
                        />
                    ))}
            </div>
        </div>
    );
};