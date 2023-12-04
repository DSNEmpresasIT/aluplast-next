'use client'
import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { BreadCumbComponent } from '@/components/catalog/BreadCumbComponent';
import { ShopComponent } from '@/components/catalog/ShopComponent';
import { ProductFathersTypes } from '@/utils/types';

const Index = () => {
  const [category, setCategory] = useState();
  const query = useSearchParams().get('categoria');

  useEffect(() => {
    // @ts-ignore
    if (query && Object.values(ProductFathersTypes).includes(query)) {
    // @ts-ignore
      setCategory(query);      
    } else {
      setCategory(undefined)
    }
  }, [query])
  
  return (
    <div className="page-wrap">
      <BreadCumbComponent product={undefined} />
      <ShopComponent query={category} />
    </div>
  )
}

export default Index;
