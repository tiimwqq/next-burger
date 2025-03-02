import React from 'react';

export default function Page({ params: { id } }: { params: { id: string } }) {
    return (
        <div>
            product {id}
        </div>
    );
};