'use client'

import React, { useState } from 'react';
import { Input } from '../ui/input';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { Button } from '../ui/button';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';
import { useSet } from 'react-use';

type PriceProps = {
    priceFrom: number;
    priceTo: number;
}

export const Filters: React.FC = () => {
    const { ingredients, loading, toggleId, selectedIds } = useFilterIngredients();
    const [price, setprice] = useState<PriceProps>({ priceFrom: 0, priceTo: 5000 });
    const [sizes, { toggle: toggleSizes }] = useSet(new Set<string>([]));


    const updatePrice = (name: keyof PriceProps, value: number) => {
        setprice({
            ...price,
            [name]: value
        })
    }


    return (
        <div className='flex flex-col mt-4 gap-3'>
            {/* фильтрация */}
            <div className="flex flex-col items-start">
                <h2 className='text-xl font-bold'>Фильтрация</h2>
                <div className="mt-5">
                    <CheckboxFiltersGroup
                        title='Размеры'
                        items={[
                            { text: 'обычный', value: 'обычный' },
                            { text: 'средний', value: 'средний' },
                            { text: 'большой', value: 'большой' },
                        ]}
                        onClickCheckBox={toggleSizes}
                        selectedIds={sizes}
                        name='sizes'
                    />
                </div>
            </div>
            {/* цена от  идо */}
            <div className="py-4 my-4 border-y border-y-neutral-100 flex flex-col gap-3">
                <h2 className='text-base font-bold mb-4'>Цена от и до:</h2>
                <div className="flex gap-3 mb-3">
                    <Input type='number' placeholder={price.priceFrom.toString()} min={0} max={20000} value={String(price.priceFrom)} onChange={(e) => updatePrice('priceFrom', Number(e.target.value))} />
                    <Input type='number' placeholder={price.priceTo.toString()} min={0} max={20000} value={String(price.priceTo)} onChange={(e) => updatePrice('priceTo', Number(e.target.value))} />
                </div>
                <RangeSlider
                    min={0} max={5000} step={50}
                    value={[price.priceFrom, price.priceTo]}
                    onValueChange={([priceFrom, priceTo]) => setprice({ priceFrom, priceTo })} />
            </div>
            {/* ингредиенты */}
            <CheckboxFiltersGroup
                title='Ингредиенты'
                limit={5}
                defaultItems={ingredients.slice(0, 6)}
                items={ingredients}
                loading={loading}
                onClickCheckBox={toggleId}
                selectedIds={selectedIds}
                name='ingredient'
            />
            {/*  кнопка */}
            <Button className='my-5 w-full py-6'>
                Применить
            </Button>
        </div>
    );
};