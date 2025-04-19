'use client'

import React from 'react';
import { Input } from '../ui/input';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { Button } from '../ui/button';
import { useFilters, useQueryFilters, useRollTypes } from '@/hooks';
export const Filters: React.FC = () => {
    const { selectedRollsType, price, sizes, setPrice, updatePrice, toggleRollsType } = useFilters();
    useQueryFilters({ price, sizes, selectedRollsType });
    const { rollType, loading } = useRollTypes();

    const defaultRollTypes = [
        { value: '', name: 'с лососем' },
        { value: '', name: 'с креветкой' },
        { value: '', name: 'с сыром' },
        { value: '', name: 'Каппа маки' },
        { value: '', name: 'Калифорния Чикен' },
        { value: '', name: 'Филадельфия' },
        { value: '', name: 'Бансай' },
        { value: '', name: 'Миссури' },
        { value: '', name: 'Небраска' },
        { value: '', name: 'Чикен Крим' },
        { value: '', name: 'Лава' },
    ]

    return (
        <div className='flex flex-col mt-4 gap-3'>
            {/* цена от  идо */}
            <div className="py-4 mb-4 border-b border-b-neutral-100 flex flex-col gap-3">
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
            {/* тип роллов */}
            <CheckboxFiltersGroup
                title='Тип роллов'
                limit={5}
                defaultItems={defaultRollTypes}
                items={rollType}
                loading={loading}
                onClickCheckBox={toggleRollsType}
                selected={selectedRollsType}
                name='typeRolls' />

            {/*  кнопка */}
            <Button className='my-5 w-full py-6'>
                Применить
            </Button>
        </div>
    );
};