'use client'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BreadCumbComponent } from '@/components/catalog/BreadCumbComponent';
import { ShopComponent } from '@/components/catalog/ShopComponent';
import { ProductFathersTypes } from '@/utils/types';
import { getAllProducts } from '@/services/products-service';

const Index = () => {
  return (
    <div className="page-wrap">
      <BreadCumbComponent product={undefined} />
      <ShopComponent />
    </div>
  )
}

export default Index;
