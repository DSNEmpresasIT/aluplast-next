import React from 'react'
import { Metadata } from 'next';
import Index from '@/components/product'
 
export const metadata: Metadata = {
  title: 'Producto aluminio',
  alternates: {
    canonical: 'https://aluplast.com.ar/productos-de-aluminio-y-pvc'
  }
}

export default function Page() {
  return <Index />;
}
