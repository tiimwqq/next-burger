'use client'

import React from 'react';
import { FilterCheckbox } from '../ui/filter-checkbox';
import { Input } from '../ui/input';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { Button } from '../ui/button';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

export const Filters: React.FC = () => {
    const {ingredients, loading, toggleId, selectedIds} = useFilterIngredients();
    

    return (
        <div className='flex flex-col mt-4 gap-3'>
            {/* фильтрация */}
            <div className="flex flex-col items-start">
                <h2 className='text-xl font-bold'>Фильтрация</h2>
                <div className="flex flex-col gap-4 mt-4">
                    <FilterCheckbox name='ewf' text="Можно собирать" value="1" />
                    <FilterCheckbox name='wef' text="Новинки" value="2" />
                </div>
            </div>
            {/* цена от  идо */}
            <div className="py-4 my-4 border-y border-y-neutral-100 flex flex-col gap-3">
                <h2 className='text-base font-bold mb-4'>Цена от и до:</h2>
                <div className="flex gap-3 mb-3">
                    <Input type='number' placeholder='0' min={0} max={20000} />
                    <Input type='number' placeholder='1950' min={0} max={20000} />
                </div>
                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>
            {/* ингредиенты */}
            <CheckboxFiltersGroup
                title='Ингредиенты'
                className='mt-5'
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