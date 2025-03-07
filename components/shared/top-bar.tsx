import React from 'react';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';
import { Category } from '@prisma/client';

type Props = {
    categories: Category[]
}
export const TopBar: React.FC<Props> = ({categories}) => {
    return (
        <div className="sticky top-0 bg-white py-4 shadow-lg shadow-black/5 z-10">

            <Container className="flex items-center justify-between ">
                <Categories items={categories}/>
                <SortPopup />
            </Container>
        </div>
    );
};