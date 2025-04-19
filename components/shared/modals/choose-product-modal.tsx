'use client'

import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { useRouter } from 'next/navigation';
import React from 'react';
import { ChooseProductForm } from '../choose-product-form';
import { ProductWithRelations } from '@/@types/prisma';

interface Props {
  product: ProductWithRelations;
  className?: string;
}


export const ChooseProductModal: React.FC<Props> = ({ product, className }) => {
  const router = useRouter();


  return (
    <div className={className}>
      <Dialog open={Boolean(product)} onOpenChange={() => router.back()}>
        <DialogContent className='p-0 w-[1060px] max-w-[1060px] min-h-[500px] bg-white overflow-hidden flex items-center justify-center'>
          <DialogTitle>
            <ChooseProductForm imageUrl={product.imageUrl} name={product.name} textDetails={product.description} />
          </DialogTitle>
        </DialogContent>
      </Dialog>
    </div>
  );
};