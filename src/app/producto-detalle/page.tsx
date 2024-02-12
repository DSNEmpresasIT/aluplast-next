import React from 'react'
import { Metadata } from 'next';
import Index from '@/components/product'
import { PAGES } from '@/utils/pages';
 
export const metadata: Metadata = {
  title: PAGES.PRODUCT,
  alternates: {
    canonical: 'https://aluplast.com.ar/productos-de-aluminio-y-pvc'
  }
}

export default function Page() {
  return <Index />;
}
