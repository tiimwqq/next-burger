import React from 'react';
import { Categories } from './categories';
import { SortPopup } from './sort-popup';
import { Container } from './container';

export const TopBar: React.FC = () => {
    return (
        <div className="sticky top-0 bg-white py-4 shadow-lg shadow-black/5 z-10">

            <Container className="flex items-center justify-between ">
                <Categories />
                <SortPopup />
            </Container>
        </div>
    );
};