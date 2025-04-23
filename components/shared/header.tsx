import React from 'react';
import Image from 'next/image'
import { Container } from './container';
import { Button } from '../ui/button';
import { User } from 'lucide-react';
import Link from 'next/link';
import { SearchBar } from '../search-bar';
import { CartButton } from './cart-button';

export const Header: React.FC = () => {
    return (
        <header className=' border-b  '>
            <Container className='flex items-center justify-between py-8 gap-4'>
                {/* logo */}
                <Link href={'/'}>
                    <div className="flex justify-between items-center gap-2 mr-[70px]">
                        <Image src='/qwe.png' alt='' width={80} height={80} />
                        <div className="flex flex-col ">
                            <h2 className='text-xl font-black whitespace-nowrap'>SushkaShop</h2>
                            <span className='text-sm text-gray-500 leading-3 w-[150px]'>Роллы твоей мечты</span>
                        </div>
                    </div>
                </Link>
                {/* input */}
                <SearchBar />
                {/* btns */}
                <div className="flex items-center justify-between gap-3">
                    <Button variant={'outline'} className='flex items-center justify-between gap-1'><User size={16} /> Войти</Button>
                    <CartButton />
                </div>
            </Container>
        </header>
    );
};