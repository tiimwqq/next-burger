import React from 'react';
import Image from 'next/image'
import { Container } from './container';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { ArrowRight, ShoppingCart, User } from 'lucide-react';

export const Header: React.FC = () => {
    return (
        <header className=' border-b  '>
            <Container className='flex items-center justify-between py-8 gap-4'>
                {/* logo */}
                <div className="flex justify-between items-center gap-4">
                    <Image src='/logo.svg' alt='' width={40} height={40} />
                    <div className="flex flex-col -mt-1">
                        <h2 className='text-2xl font-black whitespace-nowrap'>NEXT BURGER</h2>
                        <span className='text-sm text-gray-500 leading-3'>вкусней уже некуда</span>
                    </div>
                </div>
                {/* input */}
                <Input className='max-w-[760px]' />
                {/* btns */}
                <div className="flex items-center justify-between gap-3">
                    <Button variant={'outline'} className='flex items-center justify-between gap-1'><User size={16} /> Войти</Button>
                    <Button className="group relative">
                        <b>520 ₽</b>
                        <span className="h-full w-[1px] bg-white/30 mx-3" />
                        <div className="flex items-center gap-1 transition duration-300 group-hover:opacity-0">
                            <ShoppingCart className="h-4 w-4 relative" strokeWidth={2} />
                            <b>3</b>
                        </div>
                        <ArrowRight className="w-5 absolute right-5 transition duration-300 -translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0" />
                    </Button>
                </div>
            </Container>
        </header>
    );
};