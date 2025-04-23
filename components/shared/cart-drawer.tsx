'use client'

import React from 'react';
import {
    Sheet,
    SheetContent,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import { CartDrawerItem } from './cart-drawer-item';
interface Props {
    className?: string;
}

export const CartDrawer: React.FC<React.PropsWithChildren<Props>> = ({ children, className }) => {
    return (
        <div className={className}>
            <Sheet>
                <SheetTrigger asChild>{children}</SheetTrigger>
                <SheetContent className='flex flex-col justify-between pb-0 '>
                    <SheetHeader>
                        <SheetTitle>В козине: 3 товара</SheetTitle>
                    </SheetHeader>
                    <div className="-mx-6 mt-5 overflow-auto flex-1 scrollbar">
                        <CartDrawerItem
                            id={1}
                            imageUrl={'https://storage.yandexcloud.net/sushi-market/products/product_1847/643786b41548f-450x450.png'}
                            details={'Ролл с лососем и шапкой (5 шт.), Ролл с сыром (5 шт.), Ролл с лососем (5 шт.), Ролл с беконом (5 шт.), Ролл с крабом (5 шт.), Ролл с креветкой (5 шт.), Ролл с такуаном (5 шт.), Каппа маки (8 шт.)'}
                            name={'Шок'}
                            price={926}
                            quantity={1} 
                            className='bg-white shadow mb-3'/>
                             <CartDrawerItem
                            id={1}
                            imageUrl={'https://storage.yandexcloud.net/sushi-market/products/product_1847/643786b41548f-450x450.png'}
                            details={'Ролл с лососем и шапкой (5 шт.), Ролл с сыром (5 шт.), Ролл с лососем (5 шт.), Ролл с беконом (5 шт.), Ролл с крабом (5 шт.), Ролл с креветкой (5 шт.), Ролл с такуаном (5 шт.), Каппа маки (8 шт.)'}
                            name={'Шок'}
                            price={926}
                            quantity={1} 
                            className='bg-white shadow mb-3'/>
                             <CartDrawerItem
                            id={1}
                            imageUrl={'https://storage.yandexcloud.net/sushi-market/products/product_1847/643786b41548f-450x450.png'}
                            details={'Ролл с лососем и шапкой (5 шт.), Ролл с сыром (5 шт.), Ролл с лососем (5 шт.), Ролл с беконом (5 шт.), Ролл с крабом (5 шт.), Ролл с креветкой (5 шт.), Ролл с такуаном (5 шт.), Каппа маки (8 шт.)'}
                            name={'Шок'}
                            price={926}
                            quantity={1} 
                            className='bg-white shadow mb-3'/>
                            
                    </div>
                    <SheetFooter className='-mx-6 bg-white p-8'>
                        <div className="w-full">
                            <div className="flex justify-between mb-5">
                                <span className=' text-neutral-500'>
                                    Итого
                                </span>
                                <span className='font-bold text-lg'>1200тг</span>
                            </div>
                            <Link href={'/cart'}>
                                <Button type='submit' className='h-12 w-full'>
                                    Оформить заказ
                                    <ArrowRight className='w-5 ml-2' />
                                </Button>
                            </Link>
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </div>
    );
};