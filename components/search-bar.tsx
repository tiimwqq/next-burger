'use client'

import { Search } from 'lucide-react';
import React, {  useRef, useState } from 'react';
import { Input } from './ui/input';
import { useClickAway, useDebounce } from 'react-use';
import Link from 'next/link';
import { Api } from '@/services/api-client';
import { Product } from '@prisma/client';

export const SearchBar: React.FC = () => {

    const [searchValue, setSearchValue] = useState('');
    const [focused, setFocused] = useState(false);
    const [products, setProducts] = useState<Product[]>([])
    const ref = useRef(null);

    useClickAway(ref, () => {
        setFocused(false);
    })

    useDebounce(async () => {
        try {
            await Api.products.search(searchValue).then(items => {
                console.log("Ответ API:", items);
                setProducts(items || []); // Гарантируем, что будет массив
            });
        } catch (error) {
            console.error("Произошла ошибка:", error);
        }
    }, 150, [searchValue])

    const onClickCleanSearch = () => {
        setSearchValue('');
        setFocused(false);
    }

    return (
        <>
            {focused && <div className={`fixed top-0 left-0 right-0 bottom-0 z-30 bg-black/50 `}></div>}
            <div ref={ref} className="relative w-full z-30 mx-4">
                <Search size={16} className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 border-none' />
                <Input className={`max-w-[764px] border-none bg-gray-50 pl-10 
                `}
                    placeholder='поиск...'
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setFocused(true)}
                />
                {products.length > 0 && <div
                    className={`absolute w-full max-w-[764px]  bg-white rounded-xl p-2 top-14 shadow-md transition-all duration-300 opacity-0 z-30 mt-2
                    ${focused ? 'top-12 opacity-100 shadow-[0_0_8px_1px_rgba(255,255,255,0.3)]' : 'hidden'}`}
                >
                    {products.map((product) => (
                        <Link 
                        onClick={onClickCleanSearch}
                        key={product.id} 
                        href={`/product/${product.id}`} 
                        className='flex items-center gap-1 hover:bg-primary/10 rounded-sm px-2 '>
                            <img src={product.imageUrl} alt={product.name} className='h-14 w-14' />
                            <div className="px-3 py-2 text-sm text-gray-500">
                                {product.name}
                            </div>
                        </Link>
                    ))}
                </div>}
            </div>

        </>
    );
};