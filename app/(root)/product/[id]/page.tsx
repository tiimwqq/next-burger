import { Container } from '@/components/shared/container';
import { GroupVariants } from '@/components/shared/group-variants';
import { prisma } from '@/prisma/prisma-client';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import React from 'react';
import { ChooseIngredients } from '@/components/shared/choose-ingredients';
import { Button } from '@/components/ui/button';

export default async function Page({ params: { id } }: { params: { id: string } }) {
    const product = await prisma.product.findFirst({ where: { id: Number(id) }, include: { productItems: true } });

    if (!product) {
        return notFound();
    }

    return (
        <Container className='flex flex-col my-10'>
            <div className="flex gap-10 justify-center">
                <Image src={product.imageUrl} alt="" width={450} height={450} style={{ objectFit: 'contain' }} className='pr-[40px] border-r border-r-gray-300' />
                <div className="w-[520px] p-7 ">
                    <h1 className='font-bold mb-4 text-3xl' >{product.name}</h1>
                    <p className='text-gray-500 mb-5'>{product.description}</p>
                    <ChooseIngredients />
                    <Button className=' text-base p-5 my-3' variant={'outline'}>
                        Добавить в корзину за {product.productItems[0].price} тг
                    </Button>
                </div>
            </div>
        </Container>
    );
};