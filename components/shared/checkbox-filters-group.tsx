'use client'

import React, { useState } from 'react';
import { FilterChecboxProps, FilterCheckbox } from '../ui/filter-checkbox';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';

type Item = FilterChecboxProps;
interface Props {
    title: string;
    items: Item[];
    defaultItems?: Item[];
    limit?: number;
    searchInputPlaceholder?: string;
    onClickCheckBox?: (id: string) => void;
    defaultValue?: string;
    loading?: boolean
    selected?: Set<string>;
    name?: string;
}
export const CheckboxFiltersGroup: React.FC<Props> = (
    {
        title,
        items,
        defaultItems,
        limit = 5,
        searchInputPlaceholder = 'поиск...',
        onClickCheckBox,
        loading,
        selected,
        name,
    }
) => {

    const [showAll, setShowAll] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const list = showAll ? items : (defaultItems || items).slice(0, limit); //создаем список с элементами при нажатии на кнопку "Показать все"

    if (loading) {
        return (
            <>
                <h2 className='text-base font-bold mb-4'>{title}</h2>
                <div className="flex flex-col gap-4 max-h-96 overflow-auto scrollbar pr-2">
                    {...Array(limit).fill(0).map((_, index) => (
                        <Skeleton key={index} className='h-6 mb-1' />
                    ))}
                </div>
            </>

        )
    }

    return (
        <div className=''>
            <h2 className='text-base font-bold mb-4'>{title}</h2>

            {
                showAll && (
                    <div className="mb-5">
                        <Input
                            onChange={e => setSearchValue(e.target.value)}
                            placeholder={searchInputPlaceholder}
                            className='bg-gray-50 border-none' />
                    </div>
                )
            }

            <div className="flex flex-col gap-4 max-h-96 overflow-auto scrollbar pr-2">
                {list
                    .filter(item => item.text.toLowerCase().includes(searchValue.toLowerCase())) //фильтруем товар по инпуту
                    .map((item, index) => (
                        <FilterCheckbox
                            key={index}
                            text={item.text}
                            value={item.value}
                            endAdornment={item.endAdornment}
                            checked={selected?.has(item.value)}
                            onCheckedChange={() => onClickCheckBox?.(item.value)}
                            name={name}
                        />
                    ))}
            </div>
            {items.length > limit && (
                <Button
                    variant={'ghost'}
                    onClick={() => setShowAll(!showAll)}
                    className='mt-4 text-primary'>
                    {showAll ? 'Скрыть' : '+ Показать все'}
                </Button>
            )}
        </div>
    );
};