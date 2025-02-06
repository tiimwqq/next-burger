import React from 'react';
import { FilterCheckbox } from '../ui/filter-checkbox';
import { Input } from '../ui/input';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { Button } from '../ui/button';

export const Filters: React.FC = () => {
    return (
        <div className='flex flex-col mt-4 gap-3'>
            {/* фильтрация */}
            <div className="flex flex-col items-start">
                <h2 className='text-xl font-bold'>Фильтрация</h2>
                <div className="flex flex-col gap-4 mt-4">
                    <FilterCheckbox text="Можно собирать" value="1" />
                    <FilterCheckbox text="Новинки" value="2" />
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
                defaultItems={[
                    {
                        text: 'Сыр',
                        value: '1',
                    },
                    {
                        text: 'Красный лук',
                        value: '1',
                    },
                    {
                        text: 'Халапеньо',
                        value: '1',
                    },
                    {
                        text: 'Авокадо',
                        value: '1',
                    },
                    {
                        text: 'Грибы',
                        value: '1',
                    },
                ]}
                items={[
                    { text: 'Булочка', value: '1' },
                    { text: 'Говяжья котлета', value: '1' },
                    { text: 'Куриная котлета', value: '1' },
                    { text: 'Рыбная котлета', value: '1' },
                    { text: 'Веганская котлета', value: '1' },
                    { text: 'Сыр', value: '1' },
                    { text: 'Листья салата', value: '1' },
                    { text: 'Помидор', value: '1' },
                    { text: 'Огурец', value: '1' },
                    { text: 'Маринованный огурец', value: '1' },
                    { text: 'Красный лук', value: '1' },
                    { text: 'Белый лук', value: '1' },
                    { text: 'Халапеньо', value: '1' },
                    { text: 'Авокадо', value: '1' },
                    { text: 'Майонез', value: '1' },
                    { text: 'Кетчуп', value: '1' },
                    { text: 'Горчица', value: '1' },
                    { text: 'Соус барбекю', value: '1' },
                    { text: 'Чесночный соус', value: '1' },
                    { text: 'Сырный соус', value: '1' },
                    { text: 'Бекон', value: '1' },
                    { text: 'Грибы', value: '1' },
                    { text: 'Яйцо', value: '1' },
                    { text: 'Луковые кольца', value: '1' },
                    { text: 'Ананас', value: '1' },
                    { text: 'Хрустящий лук', value: '1' },
                ]}
            />
            {/*  кнопка */}
           <Button className='my-5 w-full'>
            применить
           </Button>
        </div>
    );
};