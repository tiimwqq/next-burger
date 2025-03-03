'use client'

import React from 'react';
import { Input } from '../ui/input';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { Button } from '../ui/button';
import { useFilters, useIngredients, useQueryFilters } from '@/hooks';
export const Filters: React.FC = () => {
    const { selectedIngredients, price, sizes, setPrice, toggleSizes, toggleIngredients, updatePrice } = useFilters();
    const { ingredients, loading } = useIngredients();

    useQueryFilters({ price, sizes, selectedIngredients });

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
                        selected={sizes}
                        name='sizes'
                    />
                </div>
            </div>
            {/* цена от  идо */}
            <div className="py-4 my-4 border-y border-y-neutral-100 flex flex-col gap-3">
                <h2 className='text-base font-bold mb-4'>Цена от и до:</h2>
                <div className="flex gap-3 mb-3">
                    <Input
                        type='number'
                        placeholder='от'
                        min={0}
                        max={20000}
                        value={String(price.priceFrom)}
                        onChange={(e) => updatePrice('priceFrom', Number(e.target.value))} />
                    <Input type='number'
                        placeholder='до'
                        min={0}
                        max={20000}
                        value={String(price.priceTo)}
                        onChange={(e) => updatePrice('priceTo', Number(e.target.value))} />
                </div>
                <RangeSlider
                    min={0} max={5000} step={50}
                    value={[price.priceFrom || 0, price.priceTo || 5000]}
                    onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })} />
            </div>
            {/* ингредиенты */}
            <CheckboxFiltersGroup
                title='Ингредиенты'
                limit={5}
                defaultItems={ingredients.slice(0, 6)}
                items={ingredients}
                loading={loading}
                onClickCheckBox={toggleIngredients}
                selected={selectedIngredients}
                name='ingredient'
            />
            {/*  кнопка */}
            <Button className='my-5 w-full py-6'>
                Применить
            </Button>
        </div>
    );
};