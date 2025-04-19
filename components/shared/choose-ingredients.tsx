'use client'

import React, { useEffect, useState } from 'react';
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import { cn } from '@/lib/utils';
import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import Image from 'next/image';
import { Button } from '../ui/button';

interface Props {
    className?: string;
}

export const ChooseIngredients: React.FC<Props> = ({ className }) => {
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);

    useEffect(() => {
        async function fetchData() {
            try {
                await Api.ingredients.getAllIngredients().then(items => setIngredients(items || []));
            } catch (e) {
                console.log('ошибка получения ингредиентов', e);
            }
        }
        fetchData();
    }, []);

    return (
        <Carousel
            opts={{
                align: "start",
            }}
            className={cn('w-full my-3 ', className)}
        >
            <h3 className='mb-3'>С этим товаром выбирают</h3>
            <CarouselContent>
                {ingredients.map((item, index) => (
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                            <Card className='border-none  shadow-md'>
                                <CardContent className="flex items-center justify-center p-5 flex-col gap-3 max-h-[170px]">
                                    <Image src={item.imageUrl} alt={item.name} width={60} height={60} style={{ objectFit: 'contain' }} />
                                    <p className=" text-sm leading-none font-light text-center">{item.name}</p>
                                    <Button className='w-full h-7 text-sm' variant={'outline'}>{item.price} ₸</Button>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    )
};